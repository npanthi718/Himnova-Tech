"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { siteData, CareerItem } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FileInput } from "@/components/ui/FileInput";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Loader2,
  Inbox,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import Link from "next/link";

const MAX_RESUME_MB = 5;
const MAX_COVER_MB = 5;
const MAX_TOTAL_ATTACHMENT_MB = 7;

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const CareersModule: React.FC = () => {
  const openings = siteData.careers;
  const hasOpenings = openings.length > 0;

  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [toastState, setToastState] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    yearsExperience: "",
    linkedInUrl: "",
    appliedPosition: siteData.careers[0]?.role || "General Application",
    professionalSummary: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateFileSize = (file: File | null, maxMB: number, fieldName: string): string | null => {
    if (!file) return null;
    if (file.size > maxMB * 1024 * 1024) {
      return `${fieldName} must be under ${maxMB}MB`;
    }
    return null;
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.currentLocation.trim()) errs.currentLocation = "Current location is required";
    if (!formData.yearsExperience.trim()) errs.yearsExperience = "Years of experience is required";
    if (!resumeFile) errs.resume = "Resume is required (PDF, DOC, or DOCX)";
    else {
      const sizeErr = validateFileSize(resumeFile, MAX_RESUME_MB, "Resume");
      if (sizeErr) errs.resume = sizeErr;
    }
    if (coverLetterFile) {
      const sizeErr = validateFileSize(coverLetterFile, MAX_COVER_MB, "Cover letter");
      if (sizeErr) errs.coverLetter = sizeErr;
    }
    if (resumeFile && coverLetterFile && resumeFile.size + coverLetterFile.size > MAX_TOTAL_ATTACHMENT_MB * 1024 * 1024) {
      errs.coverLetter = `Resume and cover letter together must be under ${MAX_TOTAL_ATTACHMENT_MB}MB`;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_SERVICE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      "";
    const adminTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_ADMIN_TEMPLATE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      "";
    const candidateTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_CANDIDATE_TEMPLATE_ID || "";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_PUBLIC_KEY ||
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      "";

    try {
      let resumeBase64 = "";
      if (resumeFile) {
        try {
          resumeBase64 = await fileToBase64(resumeFile);
        } catch (fileErr) {
          console.warn("Resume Base64 conversion warning:", fileErr);
        }
      }

      let coverBase64 = "";
      if (coverLetterFile) {
        try {
          coverBase64 = await fileToBase64(coverLetterFile);
        } catch (fileErr) {
          console.warn("Cover Letter Base64 conversion warning:", fileErr);
        }
      }

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        current_location: formData.currentLocation,
        years_experience: formData.yearsExperience,
        linkedin_url: formData.linkedInUrl || "Not Provided",
        applied_role: formData.appliedPosition || selectedRole?.role || "General Application",
        message: formData.professionalSummary || "See attached resume.",
        resume_filename: resumeFile?.name || "Resume Attached",
        resume_content: resumeBase64,
        resume_file: resumeBase64,
        resume_attachment: resumeBase64,
        cover_letter_filename: coverLetterFile?.name || "Not Provided",
        cover_letter_content: coverBase64 || "Not Provided",
        cover_letter_file: coverBase64 || "Not Provided",
        cover_letter_attachment: coverBase64 || "Not Provided",
        to_name: "Himnova Talent Acquisition Team",
      };

      if (serviceId && publicKey) {
        if (adminTemplateId) {
          try {
            await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);
          } catch (adminErr) {
            console.error("Career Admin EmailJS send failed:", adminErr);
          }
        }
        if (candidateTemplateId) {
          try {
            await emailjs.send(serviceId, candidateTemplateId, templateParams, publicKey);
          } catch (candErr) {
            console.error("Career Candidate EmailJS send failed:", candErr);
          }
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setToastState({
        isVisible: true,
        message: "Thank you for applying! Our engineering leadership will review your application within 24 hours.",
        type: "success",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentLocation: "",
        yearsExperience: "",
        linkedInUrl: "",
        appliedPosition: siteData.careers[0]?.role || "General Application",
        professionalSummary: "",
      });
      setResumeFile(null);
      setCoverLetterFile(null);
      setIsApplyModalOpen(false);
      setSelectedRole(null);
    } catch (err) {
      console.error("EmailJS Submission error:", err);
      setToastState({
        isVisible: true,
        message: "Submission encountered an issue. Please try again or email " + siteData.company.contact.careersEmail,
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="careers" className="section-padding relative overflow-hidden bg-white dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-14 sm:mb-16">
          <Badge variant="teal">Careers & Engineering Culture</Badge>
          <h2 className="section-heading">
            Join the Top 1% Engineering Talent
          </h2>
          <p className="section-subtext">
            We are hiring ambitious architects, AI researchers, and designers to build global cloud infrastructure.
          </p>
        </RevealOnScroll>

        {!hasOpenings ? (
          <RevealOnScroll>
            <Card className="max-w-2xl mx-auto p-10 sm:p-14 text-center space-y-6 border-brand-cyan/20">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center">
                <Inbox className="h-8 w-8 text-brand-cyan" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                No Open Positions Right Now
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                We don&apos;t have any active openings at the moment, but we&apos;re always interested in exceptional talent. Send us your resume and we&apos;ll reach out when a matching role opens.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  icon={<Mail className="h-4 w-4" />}
                  onClick={() => {
                    setSelectedRole(null);
                    setFormData((prev) => ({ ...prev, appliedPosition: "General Application" }));
                    setIsApplyModalOpen(true);
                  }}
                >
                  Submit General Application
                </Button>
                <Link href="#contact">
                  <Button variant="outline">Contact Our Team</Button>
                </Link>
              </div>
            </Card>
          </RevealOnScroll>
        ) : (
          <StaggerContainer className="space-y-5 sm:space-y-6" stagger={0.08}>
            {openings.map((career) => (
              <StaggerItem key={career.id}>
                <Card className="p-6 sm:p-8 hover:border-brand-cyan/40 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                          {career.role}
                        </h3>
                        <Badge variant="cyan">{career.department}</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-brand-cyan" />
                          {career.locationType}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-brand-teal" />
                          {career.experience}
                        </span>
                        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <DollarSign className="h-4 w-4 text-emerald-500 shrink-0" />
                          {career.salaryRange}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Button variant="outline" size="sm" onClick={() => setSelectedRole(career)}>
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        icon={<ArrowUpRight className="h-4 w-4" />}
                        onClick={() => {
                          setSelectedRole(career);
                          setFormData((prev) => ({ ...prev, appliedPosition: career.role }));
                          setIsApplyModalOpen(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>

      {selectedRole && !isApplyModalOpen && (
        <Modal
          isOpen={!!selectedRole}
          onClose={() => setSelectedRole(null)}
          title={selectedRole.role}
          maxWidth="lg"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="cyan">{selectedRole.department}</Badge>
              <Badge variant="teal">{selectedRole.locationType}</Badge>
              <Badge variant="slate">Experience: {selectedRole.experience}</Badge>
              <Badge variant="outline">Compensation: {selectedRole.salaryRange}</Badge>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {selectedRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Technical Requirements
              </h4>
              <ul className="space-y-2">
                {selectedRole.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t dark:border-white/10 light:border-slate-200 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setSelectedRole(null)}>
                Close
              </Button>
              <Button
                icon={<ArrowUpRight className="h-4 w-4" />}
                onClick={() => {
                  if (selectedRole) {
                    setFormData((prev) => ({ ...prev, appliedPosition: selectedRole.role }));
                  }
                  setIsApplyModalOpen(true);
                }}
              >
                Proceed to Application
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          title={`Job Application: ${formData.appliedPosition || selectedRole?.role || "General Application"}`}
          maxWidth="lg"
        >
          <form ref={formRef} onSubmit={handleApplySubmit} className="space-y-4">
            
            {/* Position Applied For Selector */}
            <div className="w-full space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Position Applied For *
              </label>
              <select
                name="applied_role"
                value={formData.appliedPosition}
                onChange={(e) => setFormData({ ...formData, appliedPosition: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50
                  bg-white border border-slate-300 text-slate-900
                  dark:bg-alpine-850 dark:border-white/10 dark:text-white"
              >
                {siteData.careers.length > 0 ? (
                  <>
                    {siteData.careers.map((career) => (
                      <option key={career.id} value={career.role}>
                        {career.role} — ({career.department})
                      </option>
                    ))}
                    <option value="General Application">General Application (Future Openings)</option>
                  </>
                ) : (
                  <option value="General Application">General Application (No Active Positions)</option>
                )}
              </select>
            </div>

            <Input
              label="Full Name *"
              name="from_name"
              placeholder="e.g. Sushil Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              error={errors.fullName}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address *"
                name="from_email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />
              <Input
                label="Phone Number *"
                name="phone"
                placeholder="+977 980-0000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Current Location *"
                name="current_location"
                placeholder="e.g. Kathmandu, Nepal"
                value={formData.currentLocation}
                onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                error={errors.currentLocation}
              />
              <Input
                label="Years of Experience *"
                name="years_experience"
                placeholder="e.g. 4"
                value={formData.yearsExperience}
                onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
                error={errors.yearsExperience}
              />
            </div>

            <Input
              label="LinkedIn / Portfolio URL (Optional)"
              name="linkedin_url"
              placeholder="https://linkedin.com/in/..."
              value={formData.linkedInUrl}
              onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
            />

            <FileInput
              label="Resume *"
              name="resume_file"
              value={resumeFile}
              onChange={setResumeFile}
              error={errors.resume}
              maxSizeMB={MAX_RESUME_MB}
            />

            <FileInput
              label="Cover Letter"
              name="cover_letter_file"
              value={coverLetterFile}
              onChange={setCoverLetterFile}
              error={errors.coverLetter}
              maxSizeMB={MAX_COVER_MB}
              optional
            />

            <Textarea
              label="Professional Summary (Optional)"
              name="message"
              rows={3}
              placeholder="Briefly highlight your key achievements..."
              value={formData.professionalSummary}
              onChange={(e) => setFormData({ ...formData, professionalSummary: e.target.value })}
            />

            <input type="hidden" name="applied_role" value={formData.appliedPosition || selectedRole?.role || "General Application"} />
            <input type="hidden" name="resume_filename" value={resumeFile?.name || "Resume Attached"} />
            <input type="hidden" name="cover_letter_filename" value={coverLetterFile?.name || "Not Provided"} />
            <input type="hidden" name="to_name" value="Himnova Talent Acquisition Team" />

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Protected by Himnova Zero-Trust Candidate Privacy.
              </span>
              <div className="flex items-center gap-3">
                <Button type="button" variant="ghost" onClick={() => setIsApplyModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  icon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                >
                  {submitting ? "Transmitting..." : "Submit Application"}
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      )}

      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState({ ...toastState, isVisible: false })}
      />
    </section>
  );
};
