"use client";

import { NewsletterIssue } from "@/types/newsletter";
import { useState } from "react";

interface FeaturedIssueHeroProps {
  issue: NewsletterIssue;
}

export function FeaturedIssueHero({ issue }: FeaturedIssueHeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={issue.figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-zinc-900/70"
    >
      {/* Background Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20">
        {!imageError ? (
          <img
            src={issue.imageUrl}
            alt={`${issue.title} - ${issue.volume}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        
        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Top badge - explained logo */}
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-sm" />
          <span className="text-sm font-medium text-white/90">
            {issue.title} - {issue.volume}
          </span>
        </div>

        {/* Featured Tool Badge */}
        <div className="absolute right-6 top-6">
          <span className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
            Featured Tool
          </span>
        </div>

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-300">
            <span>{issue.volume}</span>
            <span>•</span>
            <span>{issue.date}</span>
          </div>

          <h2 className="mb-4 text-4xl font-bold text-white">
            {issue.featuredTool}
          </h2>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-zinc-300">
            {issue.description}
          </p>

          <div className="flex items-center gap-2 text-base font-medium text-white transition-colors group-hover:translate-x-1">
            <span>Read Issue</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
