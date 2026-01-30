"use client";

import { useState, useEffect } from "react";
import { newsletterIssues } from "@/data/issues";
import { resourceLinks } from "@/data/resources";
import { NewsletterCard } from "@/components/NewsletterCard";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/design-system";
import { PasswordProtection } from "@/components/PasswordProtection";
import {
  LightbulbIcon,
  MessageIcon,
  ChartIcon,
  UsersIcon,
} from "@/components/icons/ResourceIcons";

export default function Home() {
  // Get the latest issue (last in array) and past issues
  const currentIssue = newsletterIssues[newsletterIssues.length - 1];
  const pastIssues = newsletterIssues.slice(0, -1).reverse(); // Show most recent first

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastPosition, setToastPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("explained_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "current-issue", "past-issues", "about", "resources"];
      const scrollPosition = window.scrollY + 200; // Offset for fixed nav
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (for Resources section)
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - 100;

      // Check sections in reverse order to catch the bottom sections properly
      let activeId = "hero"; // Default to hero
      
      // If near bottom, prioritize resources section
      if (isNearBottom) {
        const resourcesElement = document.getElementById("resources");
        if (resourcesElement) {
          activeId = "resources";
        }
      } else {
        // Otherwise, check sections normally
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            // Check if we're within the section or have passed it
            if (scrollPosition >= offsetTop - 100) {
              activeId = sectionId;
              break;
            }
          }
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Navigation */}
      <nav className="fixed left-1/2 top-4 z-50 w-full -translate-x-1/2">
        <div className="mx-auto max-w-[52rem] px-6">
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center"
            >
              <img src="/images/Logo.svg" alt="explained" className="h-[19px]" />
            </button>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("current-issue")}
                className={`text-sm transition-colors hover:text-white ${
                  activeSection === "current-issue"
                    ? "text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                Current Issue
              </button>
              <button
                onClick={() => scrollToSection("past-issues")}
                className={`text-sm transition-colors hover:text-white ${
                  activeSection === "past-issues"
                    ? "text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                Past Issues
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm transition-colors hover:text-white ${
                  activeSection === "about"
                    ? "text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className={`text-sm transition-colors hover:text-white ${
                  activeSection === "resources"
                    ? "text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                Resources
              </button>
            </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-40 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
            }}
          />
          {/* Gradient overlay - fades to background color */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/60 to-[#0f0f0f]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-3 flex justify-center">
            <img src="/images/Logo.svg" alt="explained" className="h-[51px] md:h-16" />
          </div>
          <p className="mb-4 text-xl leading-relaxed text-zinc-300 md:text-2xl">
            A design newsletter exploring AI tools
          </p>
          <p className="mx-auto text-lg leading-relaxed text-zinc-400">
            Want to integrate AI into your work but don't have the time to dig through articles? 
            We're here to gather resources to help you learn.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6">
        {/* Figma Access Notification */}
        <section className="py-6">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-white/10 bg-zinc-900/50 px-6 py-4 backdrop-blur-sm">
              <p className="text-sm text-zinc-300">
                <span className="font-medium text-white">Note:</span> Each newsletter opens as a Figma prototype. If you don't have access, reach out to{" "}
                <span className="inline-flex items-center gap-1 text-white">
                  Bhavana Veeravalli
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                      setToastPosition({ top: rect.bottom + 8, left: rect.left });
                      navigator.clipboard.writeText("Bhavana Veeravalli");
                      setCopiedId("Bhavana Veeravalli");
                      setTimeout(() => {
                        setCopiedId(null);
                        setToastPosition(null);
                      }, 2000);
                    }}
                    className="text-white hover:text-zinc-200 transition-colors"
                    title="Copy name"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-1 text-white">
                  Mickayla Ratliff
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                      setToastPosition({ top: rect.bottom + 8, left: rect.left });
                      navigator.clipboard.writeText("Mickayla Ratliff");
                      setCopiedId("Mickayla Ratliff");
                      setTimeout(() => {
                        setCopiedId(null);
                        setToastPosition(null);
                      }, 2000);
                    }}
                    className="text-white hover:text-zinc-200 transition-colors"
                    title="Copy name"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </span>
                , or{" "}
                <span className="inline-flex items-center gap-1 text-white">
                  Nicole Cacchiotti
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                      setToastPosition({ top: rect.bottom + 8, left: rect.left });
                      navigator.clipboard.writeText("Nicole Cacchiotti");
                      setCopiedId("Nicole Cacchiotti");
                      setTimeout(() => {
                        setCopiedId(null);
                        setToastPosition(null);
                      }, 2000);
                    }}
                    className="text-white hover:text-zinc-200 transition-colors"
                    title="Copy name"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </span>{" "}
                on Slack and we'll approve you.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Current Issue */}
        <section id="current-issue" className="py-8">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8 md:grid-cols-1">
              <NewsletterCard issue={currentIssue} isCurrent={true} />
            </div>
          </div>
        </section>

        {/* Past Issues Section */}
        {pastIssues.length > 0 && (
          <section id="past-issues" className="py-16">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white">Past Issues</h2>
              </div>

              {/* Past Issues Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {pastIssues.map((issue) => (
                  <NewsletterCard key={issue.id} issue={issue} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white">About explained</h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
              <p>
                Overwhelmed by the number of AI tools and unsure of where to start? We were too.
              </p>
              <p>
                That's why we created <span className="font-semibold italic">explained</span>, 
                a design newsletter dedicated to exploring AI. Every other month, each issue 
                spotlights an AI tool and explains how teams are using it on their projects.
              </p>
              <p>
                Our goal is to help you upskill and enhance your projects—one tool at a time.
              </p>
              <p className="text-base text-zinc-400">
                Note: <span className="italic">explained</span> is not the authority on all things AI. 
                We're here to gather resources to help you learn. We are not experts. We are explainers.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 pb-32">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white">Resources & Links</h2>
            <p className="mb-8 text-lg text-zinc-400">
              We'd love to hear from you! Share your thoughts, suggest tools, or tell us about 
              your AI journey.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {resourceLinks.map((resource) => {
                const getIcon = () => {
                  switch (resource.icon) {
                    case "lightbulb":
                      return <LightbulbIcon className="h-6 w-6 text-white/60" />;
                    case "message":
                      return <MessageIcon className="h-6 w-6 text-white/60" />;
                    case "chart":
                      return <ChartIcon className="h-6 w-6 text-white/60" />;
                    case "users":
                      return <UsersIcon className="h-6 w-6 text-white/60" />;
                    default:
                      return null;
                  }
                };

                return (
                  <Card
                    key={resource.id}
                    href={resource.id === "get-involved" ? undefined : resource.url}
                    target={resource.id === "get-involved" ? undefined : (resource.url.startsWith("http") ? "_blank" : undefined)}
                    rel={resource.id === "get-involved" ? undefined : (resource.url.startsWith("http") ? "noopener noreferrer" : undefined)}
                    variant={resource.id === "get-involved" ? "comingSoon" : "default"}
                    className={resource.id === "get-involved" ? "md:col-span-2" : ""}
                  >
                    <CardContent>
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 flex-shrink-0">
                            {getIcon()}
                          </div>
                          <div className="flex items-end min-w-0 pt-0.5">
                            <CardTitle size="medium" className="mb-0">{resource.title}</CardTitle>
                          </div>
                        </div>
                        {resource.id !== "get-involved" && (
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </div>
                      {resource.id === "get-involved" ? (
                        <CardDescription clamp={2}>
                          Passionate about AI experimentation and adoption? Reach out to{" "}
                          <span className="inline-flex items-center gap-0.5 text-white underline hover:text-zinc-200 transition-colors">
                            Bhavana Veeravalli
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setToastPosition({ top: rect.bottom + 8, left: rect.left });
                                navigator.clipboard.writeText("Bhavana Veeravalli");
                                setCopiedId("Bhavana Veeravalli");
                                setTimeout(() => {
                                  setCopiedId(null);
                                  setToastPosition(null);
                                }, 2000);
                              }}
                              className="text-white hover:text-zinc-200 transition-colors"
                              title="Copy name"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          </span>
                          ,{" "}
                          <span className="inline-flex items-center gap-0.5 text-white underline hover:text-zinc-200 transition-colors">
                            Mason Plunkett
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setToastPosition({ top: rect.bottom + 8, left: rect.left });
                                navigator.clipboard.writeText("Mason Plunkett");
                                setCopiedId("Mason Plunkett");
                                setTimeout(() => {
                                  setCopiedId(null);
                                  setToastPosition(null);
                                }, 2000);
                              }}
                              className="text-white hover:text-zinc-200 transition-colors"
                              title="Copy name"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          </span>
                          ,{" "}
                          <span className="inline-flex items-center gap-0.5 text-white underline hover:text-zinc-200 transition-colors">
                            Mickayla Ratliff
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setToastPosition({ top: rect.bottom + 8, left: rect.left });
                                navigator.clipboard.writeText("Mickayla Ratliff");
                                setCopiedId("Mickayla Ratliff");
                                setTimeout(() => {
                                  setCopiedId(null);
                                  setToastPosition(null);
                                }, 2000);
                              }}
                              className="text-white hover:text-zinc-200 transition-colors"
                              title="Copy name"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          </span>{" "}
                          or{" "}
                          <span className="inline-flex items-center gap-0.5 text-white underline hover:text-zinc-200 transition-colors">
                            Nicole Cacchiotti
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                setToastPosition({ top: rect.bottom + 8, left: rect.left });
                                navigator.clipboard.writeText("Nicole Cacchiotti");
                                setCopiedId("Nicole Cacchiotti");
                                setTimeout(() => {
                                  setCopiedId(null);
                                  setToastPosition(null);
                                }, 2000);
                              }}
                              className="text-white hover:text-zinc-200 transition-colors"
                              title="Copy name"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          </span>{" "}
                          on Slack to learn how you can get involved.
                        </CardDescription>
                      ) : (
                        <CardDescription clamp={2}>{resource.description}</CardDescription>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Copy Toast */}
      {copiedId && toastPosition && (
        <div
          className="fixed z-50 animate-in fade-in slide-in-from-top-2"
          style={{
            top: `${toastPosition.top}px`,
            left: `${toastPosition.left}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="rounded-lg border border-white/10 bg-zinc-900/95 px-3 py-2 shadow-lg backdrop-blur-sm whitespace-nowrap">
            <p className="text-xs text-white">
              Copied
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
            <img src="/images/Logo.svg" alt="explained" className="h-4" />
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
