"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Scale,
  LockKeyhole,
  GaugeCircle,
  CheckCircle2,
  FileText,
  Search,
  ChevronDown,
  Download,
  Info,
  Globe,
  Lock,
  Server,
  Building2,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export const GovernanceModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("privacy-policy");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedClause, setExpandedClause] = useState<string | null>(null);

  const tabs = [
    { id: "privacy-policy", label: "Privacy Policy", icon: ShieldCheck, color: "text-cyan-400" },
    { id: "terms-of-service", label: "Terms of Service", icon: Scale, color: "text-emerald-400" },
    { id: "security-sovereignty", label: "Security & Sovereignty", icon: LockKeyhole, color: "text-purple-400" },
    { id: "sla-commitments", label: "SLA & Commitments", icon: GaugeCircle, color: "text-amber-400" },
  ];

  React.useEffect(() => {
    let lastHash = "";
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      const validTabs = ["privacy-policy", "terms-of-service", "security-sovereignty", "sla-commitments"];
      if (validTabs.includes(hash) && hash !== lastHash) {
        lastHash = hash;
        setActiveTab(hash);
        setTimeout(() => {
          const el = document.getElementById(hash) || document.getElementById("governance");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 80);
      }
    };

    checkHash();
    const interval = setInterval(checkHash, 100);
    window.addEventListener("hashchange", checkHash);
    window.addEventListener("popstate", checkHash);
    return () => {
      clearInterval(interval);
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("popstate", checkHash);
    };
  }, []);

  const policyData: Record<
    string,
    {
      title: string;
      subtitle: string;
      effectiveDate: string;
      complianceStandards: string[];
      plainEnglishSummary: string;
      sections: Array<{ id: string; title: string; summary: string; clauses: string[] }>;
    }
  > = {
    "privacy-policy": {
      title: "Privacy Policy & Data Sovereignty Directive",
      subtitle:
        "Compliant with Nepal Privacy Act 2075 (2018), Nepal Digital Nepal Framework, EU GDPR Principles & Global Data Minimization Standards.",
      effectiveDate: "August 2026 (Version 3.2)",
      complianceStandards: ["Nepal Privacy Act 2075", "EU GDPR Aligned", "ISO/IEC 27001 Controls", "Zero Data-Sale SLA"],
      plainEnglishSummary:
        "We collect only essential business and technical information needed to deliver your software. We never sell your data, we encrypt all communications, and you retain 100% ownership over your enterprise dataset and source code at all times.",
      sections: [
        {
          id: "data-collection",
          title: "1. Information We Collect & Purpose Limitation",
          summary: "We restrict data collection strictly to business-critical operational data.",
          clauses: [
            "Contact & Account Information: Full Name, Business Email Address, Phone Number, Corporate Location, and Billing Address provided during inquiry or onboarding.",
            "Technical Telemetry & Infrastructure Metrics: System performance logs, API latency counters, browser type, and IP address collected for server security and uptime optimization.",
            "Client Project Materials: Specifications, wireframes, repository code, and database schemas uploaded for contract execution remain strictly confidential under Non-Disclosure Agreements (NDAs).",
            "Zero Sensitive Consumer Data Mining: Himnova does not harvest personal consumer browsing behavior, financial credentials, or third-party profiling data.",
          ],
        },
        {
          id: "data-sovereignty",
          title: "2. Data Storage, Sovereignty & Regional Hosting",
          summary: "Local hosting in Nepal and global multi-region cloud options.",
          clauses: [
            "Regional Nepal Hosting: For regulated Nepalese government, banking, and health sectors, data can be isolated within high-security data centers located in Kathmandu, Nepal.",
            "International Multi-Region Cloud: Global workloads are deployed across AWS (ap-south-1 Mumbai / Singapore) or DigitalOcean with automated geo-redundancy.",
            "Encryption in Transit & at Rest: All transmitted data uses TLS 1.3 encryption, and database volumes are encrypted using AES-256 with client-managed key rotation.",
            "Zero Third-Party Data Monetization: Himnova under no circumstances sells, leases, or trades client datasets or user activity telemetry to advertising networks.",
          ],
        },
        {
          id: "user-rights",
          title: "3. User Data Rights & Portability",
          summary: "Complete authority to inspect, export, or permanently delete your data.",
          clauses: [
            "Right of Access & Inspection: Clients may request a full audit report of all stored business data at any time.",
            "Right to Deletion ('Right to be Forgotten'): Upon contract completion or request, all development snapshots and staging records are scrubbed within 14 business days.",
            "Data Portability: Source code repositories, PostgreSQL/MySQL database dumps, and assets are handed over in open formats (Git, SQL, JSON) without vendor lock-in.",
          ],
        },
      ],
    },

    "terms-of-service": {
      title: "Master Terms of Service & Software Delivery Agreement",
      subtitle:
        "Standard commercial and technical governing agreement under the Electronic Transaction Act 2063 & Commercial Law of Nepal.",
      effectiveDate: "August 2026 (Version 4.0)",
      complianceStandards: ["Nepal Electronic Transaction Act 2063", "Contract Act 2056", "100% IP Handover", "Milestone Delivery"],
      plainEnglishSummary:
        "When you hire Himnova, you get 100% ownership of the final software source code and assets upon milestone payment completion. We work with clear Statements of Work (SOW), transparent milestone sign-offs, and 6 months of free warranty support.",
      sections: [
        {
          id: "scope-sow",
          title: "1. Statement of Work (SOW) & Agile Sprint Governance",
          summary: "Clear project milestones, deliverables, and change request procedures.",
          clauses: [
            "Defined Acceptance Criteria: Every project milestone is governed by an agreed SOW outlining tech stack, feature scope, sprint timelines, and acceptance criteria.",
            "Change Request Governance: Scope adjustments or feature additions requested during development are estimated transparently via formal Change Orders.",
            "Client Testing & Sign-Off: Sprints include a 5-day User Acceptance Testing (UAT) window for client review prior to final milestone release.",
          ],
        },
        {
          id: "ip-ownership",
          title: "2. Intellectual Property (IP) & Source Code Transfer",
          summary: "Complete transfer of source code, designs, and intellectual property rights.",
          clauses: [
            "100% Source Code Ownership: Upon final milestone settlement, Himnova transfers full, unencumbered ownership of all custom source code, Git commits, and database schemas to the client.",
            "Pre-Existing Framework & Library License: Himnova grants perpetual, royalty-free usage rights for open-source dependencies and internal utility modules utilized in the build.",
            "No Code Sequestration: We do not hold client repositories hostage or inject obfuscated kill-switches into client software.",
          ],
        },
        {
          id: "payment-dispute",
          title: "3. Commercial Terms, Warranties & Legal Jurisdiction",
          summary: "Transparent invoicing, milestone billing, and Nepalese legal jurisdiction.",
          clauses: [
            "Milestone Payment Schedule: Payments are structured transparently across project initiation, prototype approval, beta UAT, and final production launch.",
            "6-Month Bug-Fix Warranty: All custom software builds include 6 months of complimentary SLA bug-fixing and security patch coverage.",
            "Governing Law & Jurisdiction: This agreement is governed by the laws of Nepal. Any formal legal disputes are subject to arbitration in Kathmandu, Nepal.",
          ],
        },
      ],
    },

    "security-sovereignty": {
      title: "Zero-Trust Security & Cloud Sovereignty Blueprint",
      subtitle:
        "Multi-layered cybersecurity controls, OWASP Top 10 mitigation, ISO 27001 alignment & automated vulnerability scanning.",
      effectiveDate: "August 2026 (Version 2.8)",
      complianceStandards: ["OWASP Top 10 Protected", "Zero-Trust RBAC", "ISO 27001 Framework", "AES-256 Encryption"],
      plainEnglishSummary:
        "Security is engineered into our software from line one. We enforce Zero-Trust access control, multi-factor authentication, automated dependency vulnerability scanning, and isolated database clusters to shield your business from cyber threats.",
      sections: [
        {
          id: "zero-trust",
          title: "1. Zero-Trust Access Architecture & RBAC",
          summary: "Least-privilege permission controls and privileged session logging.",
          clauses: [
            "Least-Privilege Enforcement: Developer and admin access to production clusters is granted on a strict least-privilege basis via Role-Based Access Control (RBAC).",
            "Multi-Factor Authentication (MFA): Mandatory hardware key or TOTP MFA enforced for all cloud management consoles and code repositories.",
            "Privileged Audit Logging: All database access, SSH sessions, and admin actions are logged to immutable, tamper-evident audit trails.",
          ],
        },
        {
          id: "application-security",
          title: "2. Application Vulnerability Defense & Secure SDLC",
          summary: "Continuous static and dynamic security testing across CI/CD pipelines.",
          clauses: [
            "OWASP Top 10 Defense: Native protection against SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, and broken authentication vectors.",
            "Automated Dependency Scanning: GitHub Dependabot and Snyk security scanners run on every git pull request to patch vulnerable packages before build output.",
            "API Security & Rate-Limiting: Public endpoints are protected with Cloudflare Web Application Firewalls (WAF), IP throttling, and DDoS mitigation.",
          ],
        },
      ],
    },

    "sla-commitments": {
      title: "Service Level Agreement (SLA) & Operational Reliability",
      subtitle:
        "Guaranteed uptime benchmarks, 24/7 incident escalation, recovery metrics (RPO/RTO) & proactive server monitoring.",
      effectiveDate: "August 2026 (Version 3.5)",
      complianceStandards: ["99.99% Production Uptime", "4-Hour Critical SLA", "Daily Offsite Backups", "RPO < 15 Min / RTO < 1 Hr"],
      plainEnglishSummary:
        "We commit to 99.99% system availability for production environments. If a critical issue arises, our incident response team initiates triage within 4 hours, backed by automated hourly database backups and rapid disaster recovery.",
      sections: [
        {
          id: "uptime-targets",
          title: "1. Availability Benchmarks & Maintenance Schedules",
          summary: "High-availability clustering, load balancing, and planned maintenance windows.",
          clauses: [
            "99.99% Production Uptime Target: Applies to all managed enterprise cloud deployments, load balancers, and production microservices.",
            "Scheduled Maintenance Notifications: System maintenance or database index optimization is performed during low-traffic hours with 48-hour advance notice.",
          ],
        },
        {
          id: "incident-response",
          title: "2. Incident Response Windows & Support Triage",
          summary: "Tiered incident severity response windows and escalation ladders.",
          clauses: [
            "Severity 1 (Critical Outage): Immediate response within 1 hour; dedicated engineering team assigned until full resolution.",
            "Severity 2 (Major Feature Impairment): Initial response within 4 hours; patch deployed within 24 hours.",
            "Severity 3 (Minor Bug / Query): Response within 24 hours on business days.",
            "Daily Offsite Snapshots: Automated PostgreSQL/MySQL database backups taken daily and stored in geographically isolated storage (RPO < 15 Min, RTO < 1 Hour).",
          ],
        },
      ],
    },
  };

  const currentPolicy = policyData[activeTab];

  return (
    <section id="governance" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Background Cyber Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <Badge variant="teal" className="uppercase tracking-widest px-4 py-1">
            GOVERNANCE, COMPLIANCE & LEGAL SLA
          </Badge>
          <h2 className="section-heading">
            Enterprise Governance & <span className="text-brand-cyan">Legal Commitments</span>
          </h2>
          <p className="section-subtext">
            Institutional-grade transparency tailored to Nepal and global software delivery. Clear contracts, 100% source code ownership, zero data sales, and guaranteed 99.99% operational uptime.
          </p>
        </RevealOnScroll>

        {/* Tab Selection Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-alpine-900/90 border border-slate-300 dark:border-white/10 max-w-4xl mx-auto backdrop-blur-md">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedClause(null);
                }}
                className={`scroll-mt-32 flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25 scale-[1.02]"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Policy Active View Card Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <Card className="p-6 sm:p-10 border-slate-200 dark:border-white/10 bg-white dark:bg-alpine-900/90 shadow-2xl relative overflow-hidden">
            
            {/* Header Metadata Banner */}
            <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  {currentPolicy.effectiveDate}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentPolicy.complianceStandards.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                {currentPolicy.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentPolicy.subtitle}
              </p>
            </div>

            {/* Plain English Summary Callout Box */}
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-slate-900 dark:text-white space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Info className="h-4 w-4 shrink-0" />
                <span>Plain-English Business Summary for Clients</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentPolicy.plainEnglishSummary}
              </p>
            </div>

            {/* Detailed Clauses List */}
            <div className="space-y-6">
              {currentPolicy.sections.map((section) => (
                <div
                  key={section.id}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-alpine-850/60 p-5 sm:p-6 space-y-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                      {section.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {section.clauses.length} Articles
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {section.summary}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-white/10">
                    {section.clauses.map((clause, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{clause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Legal Notice Footer */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-brand-cyan" />
                <span>Himnova Technologies Private Limited • Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Verified Legal Framework</span>
              </div>
            </div>

          </Card>
        </motion.div>

      </div>
    </section>
  );
};
