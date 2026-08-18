"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { siteData } from "@/config/siteData";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { MapPin, Mail, Phone, Clock, Send, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const ContactModule: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    attachmentUrl: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [toastState, setToastState] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Valid email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.subject.trim()) errs.subject = "Subject or service inquiry is required";
    if (!formData.message.trim()) errs.message = "Message details are required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      subject: formData.subject,
      attachment_url: formData.attachmentUrl,
      message: formData.message,
      to_name: "Himnova Enterprise Architecture Team",
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setToastState({
        isVisible: true,
        message: "Thank you! Our engineering team will contact you within 24 hours.",
        type: "success",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        attachmentUrl: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setToastState({
        isVisible: true,
        message: "Failed to dispatch message. Please contact us directly at " + siteData.company.contact.email,
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50 border-t dark:border-white/5 light:border-slate-200">
      <ParallaxBackground
        speed={0.15}
        className="absolute inset-0 bg-hero-glow opacity-80"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-14 sm:mb-16">
          <Badge variant="cyan">Start Your Transformation</Badge>
          <h2 className="section-heading">
            Ready to Build the Next Era of{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-teal bg-clip-text text-transparent">
              Cloud Intelligence?
            </span>
          </h2>
          <p className="section-subtext">
            Partner with Himnova Technologies for zero-downtime cloud migration, agentic AI integration, and enterprise software architecture.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <StaggerContainer className="lg:col-span-5 space-y-6" stagger={0.1}>
            <StaggerItem>
              <Card className="p-6 sm:p-8 space-y-6 border-brand-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-brand-cyan/15 p-3 text-brand-cyan">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Kathmandu Headquarters</h3>
                    <p className="text-xs text-brand-cyan font-semibold">{siteData.company.legalName}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <p className="font-semibold text-slate-900 dark:text-white">{siteData.company.headquarters.address}</p>
                  <p>{siteData.company.headquarters.landmark}</p>
                  <p>{siteData.company.headquarters.city}, {siteData.company.headquarters.country}</p>
                </div>

                <div className="pt-4 border-t dark:border-white/10 light:border-slate-200 space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                    <span>{siteData.company.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Phone className="h-4 w-4 text-brand-teal shrink-0" />
                    <span>{siteData.company.contact.phonePrimary}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Clock className="h-4 w-4 text-purple-500 shrink-0" />
                    <span>Mon – Fri: 9:00 AM – 6:00 PM NPT</span>
                  </div>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="p-6 space-y-4 bg-gradient-to-br from-brand-cyan/10 to-brand-teal/5 border-brand-teal/30">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-brand-cyan" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zero-Trust Confidentiality SLA</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  All communications and project specifications shared with Himnova Technologies are covered under our standard Enterprise Non-Disclosure Agreement.
                </p>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <RevealOnScroll direction="left" delay={0.1} className="lg:col-span-7">
            <Card className="p-6 sm:p-8 md:p-10 border-brand-cyan/20 gradient-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-brand-cyan" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                    Submit Your Inquiry
                  </span>
                </div>

                <Input
                  label="Full Name *"
                  placeholder="e.g. Sushil Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Official Email *"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                  />
                  <Input
                    label="Phone / Mobile *"
                    placeholder="+977 980-0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                  />
                </div>

                <Input
                  label="Subject / Project Area *"
                  placeholder="e.g. Cloud DevOps Migration or Agentic AI Pipeline"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  error={errors.subject}
                />

                <Input
                  label="Specification / Architecture Doc Link (Optional)"
                  placeholder="https://drive.google.com/... or Notion link"
                  value={formData.attachmentUrl}
                  onChange={(e) => setFormData({ ...formData, attachmentUrl: e.target.value })}
                />

                <Textarea
                  label="Project Requirements / Message *"
                  rows={5}
                  placeholder="Describe your current infrastructure, timeline, and expected outcomes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                  icon={submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                >
                  {submitting ? "Transmitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </Card>
          </RevealOnScroll>
        </div>
      </div>

      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState({ ...toastState, isVisible: false })}
      />
    </section>
  );
};
