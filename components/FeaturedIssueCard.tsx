"use client";

import Image from "next/image";
import { NewsletterIssue } from "@/types/newsletter";
import { useState } from "react";

interface FeaturedIssueCardProps {
  issue: NewsletterIssue;
}

export function FeaturedIssueCard({ issue }: FeaturedIssueCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={issue.figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-zinc-900/70"
    >
      <div className="grid md:grid-cols-2">
        {/* Image Side */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 md:aspect-auto">
          {!imageError ? (
            <Image
              src={issue.imageUrl}
              alt={`${issue.title} - ${issue.volume}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-6xl">📰</div>
                <p className="text-sm text-zinc-400">Add {issue.imageUrl}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

          {/* Current Issue Badge */}
          <div className="absolute right-4 top-4">
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Featured Tool
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center p-6">
          <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
            <span>{issue.volume}</span>
            <span>•</span>
            <span>{issue.date}</span>
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            {issue.featuredTool}
          </h3>

          <p className="mb-4 text-sm leading-relaxed text-zinc-400">
            {issue.description}
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
            <span>Read Issue</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </a>
  );
}
