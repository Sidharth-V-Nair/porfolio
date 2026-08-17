"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/content";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone ?? "+91 73564 45085",
    href: `tel:${profile.phone ?? "+917356445085"}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location ?? "Kerala, India",
    href: "https://maps.google.com/?q=Kerala,India",
    external: true,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to full-time & freelance",
  },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send your message.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-bg py-24 md:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-crimson-bright/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-crimson-bright/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          {...fadeUp}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-crimson-bright" />

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-crimson-bright">
              Get in touch
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-paper sm:text-5xl md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-crimson-bright">meaningful.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-[family-name:var(--font-space-grotesk)] text-base leading-7 text-ash md:text-lg">
            Have a project, an opportunity, or just an interesting idea? Send me
            a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact information */}
          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-paper">
                Contact information
              </p>

              <Sparkles size={15} className="text-crimson-bright" />
            </div>

            <div className="space-y-3">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, external }, index) => {
                  const content = (
                    <>
                      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-bg text-crimson-bright transition-all duration-300 group-hover:border-crimson-bright/40 group-hover:bg-crimson-bright group-hover:text-paper">
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          className="relative z-10"
                        />

                        <span className="absolute inset-0 -translate-x-full bg-crimson-bright transition-transform duration-500 group-hover:translate-x-0" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ash">
                          {label}
                        </p>

                        <p className="mt-1 truncate font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-paper">
                          {value}
                        </p>
                      </div>

                      {href && (
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-ash/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crimson-bright"
                        />
                      )}
                    </>
                  );

                  const className =
                    "group flex items-center gap-4 rounded-xl border border-line/80 bg-bg-elevated/40 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson-bright/40 hover:bg-bg-elevated/80";

                  if (href) {
                    return (
                      <motion.a
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                        className={className}
                      >
                        {content}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div
                      key={label}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className={className}
                    >
                      {content}
                    </motion.div>
                  );
                },
              )}
            </div>

            {/* Availability card */}
            <div className="mt-6 rounded-xl border border-crimson-bright/20 bg-crimson-bright/[0.04] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-crimson-bright shadow-[0_0_12px_rgba(239,68,68,0.8)]" />

                <div>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-paper">
                    Currently available
                  </p>

                  <p className="mt-1 text-sm leading-6 text-ash">
                    I&apos;m currently open to exciting full-time opportunities,
                    freelance projects, and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-crimson-bright/30 via-line to-line opacity-70" />

            <div className="relative rounded-2xl border border-line bg-bg-elevated/80 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-bright">
                    Start a conversation
                  </p>

                  <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.03em] text-paper">
                    Send me a message
                  </h3>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg sm:flex">
                  <Send size={16} className="text-crimson-bright" />
                </div>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="text-sm font-semibold text-paper">
                      Message sent successfully.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-ash">
                      Thanks for reaching out. I&apos;ll get back to you as soon
                      as possible.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4"
                >
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-crimson-bright"
                  />

                  <div>
                    <p className="text-sm font-semibold text-paper">
                      Something went wrong.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-ash">
                      {errorMessage || "Please try again in a moment."}
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ash"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12 w-full rounded-lg border border-line bg-bg px-4 font-[family-name:var(--font-space-grotesk)] text-sm text-paper outline-none transition-all duration-300 placeholder:text-ash/40 hover:border-line/80 focus:border-crimson-bright focus:bg-bg-elevated focus:ring-4 focus:ring-crimson-bright/5"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ash"
                    >
                      Your email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12 w-full rounded-lg border border-line bg-bg px-4 font-[family-name:var(--font-space-grotesk)] text-sm text-paper outline-none transition-all duration-300 placeholder:text-ash/40 hover:border-line/80 focus:border-crimson-bright focus:bg-bg-elevated focus:ring-4 focus:ring-crimson-bright/5"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ash"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    maxLength={200}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Let's work together"
                    className="h-12 w-full rounded-lg border border-line bg-bg px-4 font-[family-name:var(--font-space-grotesk)] text-sm text-paper outline-none transition-all duration-300 placeholder:text-ash/40 hover:border-line/80 focus:border-crimson-bright focus:bg-bg-elevated focus:ring-4 focus:ring-crimson-bright/5"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-ash"
                    >
                      Your message
                    </label>

                    <span className="font-mono text-[9px] text-ash/50">
                      {form.message.length}/5000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    className="w-full resize-none rounded-lg border border-line bg-bg px-4 py-3.5 font-[family-name:var(--font-space-grotesk)] text-sm leading-6 text-paper outline-none transition-all duration-300 placeholder:text-ash/40 hover:border-line/80 focus:border-crimson-bright focus:bg-bg-elevated focus:ring-4 focus:ring-crimson-bright/5"
                  />
                </div>

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-ash/60">
                    Your message will be delivered directly to my inbox.
                    I&apos;ll never share your information.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-crimson-bright px-6 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-paper shadow-[0_10px_30px_rgba(239,68,68,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_35px_rgba(239,68,68,0.2)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 size={16} />
                        Sent successfully
                      </>
                    ) : (
                      <>
                        <Send
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                        Send message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
