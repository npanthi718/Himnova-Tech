"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Scale, LockKeyhole, GaugeCircle } from "lucide-react";
import { motion } from "framer-motion";

const governanceItems = [
  {
    id: "privacy-policy",
    icon: ShieldCheck,
    title: "Privacy Policy",
    summary:
      "We collect only business-critical data, use purpose-based retention, and never sell client data.",
    points: [
      "Data minimization by default for forms, analytics, and support channels",
      "Purpose limitation with clear retention windows and deletion workflows",
      "Client-controlled data export and deletion requests",
      "Cross-border transfer safeguards aligned with enterprise contracts",
    ],
  },
  {
    id: "terms-of-service",
    icon: Scale,
    title: "Terms of Service",
    summary:
      "Clear scope, transparent responsibilities, and enterprise-grade legal protection for both sides.",
    points: [
      "Statement of work alignment, acceptance criteria, and milestone sign-off",
      "IP ownership clarity for source code, documentation, and deliverables",
      "Change request governance with timeline and cost transparency",
      "Dispute resolution path with defined response timelines",
    ],
  },
  {
    id: "security-sovereignty",
    icon: LockKeyhole,
    title: "Security and Sovereignty",
    summary:
      "Zero-trust controls, least-privilege access, and regional data hosting options for regulated workloads.",
    points: [
      "Role-based access control, MFA, and audited privileged sessions",
      "Encryption in transit and at rest with managed key policies",
      "Segregated environments for development, staging, and production",
      "Secure SDLC with dependency scanning and incident response playbooks",
    ],
  },
  {
    id: "sla-commitments",
    icon: GaugeCircle,
    title: "SLA Commitments",
    summary:
      "Operational excellence standards modeled after global IT delivery practices.",
    points: [
      "Availability target up to 99.95% for managed production services",
      "Incident severities with response windows and escalation ladders",
      "RPO and RTO targets defined per workload tier",
      "Monthly service reporting for uptime, incidents, and remediation",
    ],
  },
];

export const GovernanceModule: React.FC = () => {
  return (
    <section id="governance" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Badge variant="teal">Governance and Compliance</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Built for Real Enterprise Expectations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Our delivery standards mirror what global IT partners enforce: privacy accountability,
            contractual clarity, security controls, and measurable service commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {governanceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <Card className="h-full p-7 border-white/10 light:border-slate-200/80 hover:border-brand-cyan/40 transition-colors">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3">
                      <div className="rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-3 text-brand-cyan">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{item.title}</h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.summary}</p>

                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
                          - {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
