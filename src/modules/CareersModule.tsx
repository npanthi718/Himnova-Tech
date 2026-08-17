"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { siteData, CareerItem } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";
import { Briefcase, MapPin, DollarSign, Clock, ArrowUpRight, CheckCircle2, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const CareersModule: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastState, setToastState] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioCvUrl: "",
    coverLetter: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.portfolioCvUrl.trim()) errs.portfolioCvUrl = "CV / Portfolio link is required";
    if (!formData.coverLetter.trim()) errs.coverLetter = "Cover letter statement is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      applied_role: selectedRole ? selectedRole.role : "General Engineering Application",
      cv_url: formData.portfolioCvUrl,
      message: formData.coverLetter,
      to_name: "Himnova Talent Acquisition Team",
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback simulation when env keys are unset for local demonstration
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setToastState({
        isVisible: true,
        message: "Thank you for applying! Our engineering leadership will review your application within 24 hours.",
        type: "success",
      });

      setFormData({ fullName: "", email: "", phone: "", portfolioCvUrl: "", coverLetter: "" });
      setIsApplyModalOpen(false);
    } catch (err) {
      console.error("EmailJS Submission error:", err);
      setToastState({
        isVisible: true,
        message: "Submission encountered an issue. Please try again or email careers@himnova.com.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-24 relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="teal">Careers & Engineering Culture</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white dark:text-white light:text-slate-900">
            Join the Top 1% Engineering Talent
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            We are hiring ambitious architects, AI researchers, and designers to build global cloud infrastructure.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="space-y-6">
          {siteData.careers.map((career, index) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 hover:border-brand-cyan/40 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white dark:text-white light:text-slate-900">
                        {career.role}
                      </h3>
                      <Badge variant="cyan">{career.department}</Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-brand-cyan" />
                        {career.locationType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-brand-teal" />
                        {career.experience}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="h-4 w-4 text-emerald-400" />
                        {career.salaryRange}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedRole(career)}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      icon={<ArrowUpRight className="h-4 w-4" />}
                      onClick={() => {
                        setSelectedRole(career);
                        setIsApplyModalOpen(true);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Role Details Modal */}
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {selectedRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technical Requirements
              </h4>
              <ul className="space-y-2">
                {selectedRole.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setSelectedRole(null)}>
                Close
              </Button>
              <Button
                icon={<ArrowUpRight className="h-4 w-4" />}
                onClick={() => setIsApplyModalOpen(true)}
              >
                Proceed to Application
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Application Form Modal */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          title={`Apply for: ${selectedRole?.role || "Engineering Position"}`}
          maxWidth="lg"
        >
          <form onSubmit={handleApplySubmit} className="space-y-4">
            <Input
              label="Full Name *"
              placeholder="e.g. Sushil Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              error={errors.fullName}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address *"
                type="email"
                placeholder="sushil@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />
              <Input
                label="Phone Number *"
                placeholder="+977 980-0000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
              />
            </div>

            <Input
              label="CV / Portfolio Link (Google Drive, LinkedIn, GitHub) *"
              placeholder="https://github.com/username or https://drive.google.com/..."
              value={formData.portfolioCvUrl}
              onChange={(e) => setFormData({ ...formData, portfolioCvUrl: e.target.value })}
              error={errors.portfolioCvUrl}
            />

            <Textarea
              label="Cover Letter / Professional Summary *"
              rows={4}
              placeholder="Briefly state your technical achievements and why you want to join Himnova..."
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              error={errors.coverLetter}
            />

            <div className="pt-4 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
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

      {/* Toast Notification */}
      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState({ ...toastState, isVisible: false })}
      />
    </section>
  );
};
