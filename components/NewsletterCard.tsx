"use client";

import { NewsletterIssue } from "@/types/newsletter";
import { useState } from "react";
import {
  Card,
  CardImage,
  CardBadge,
  CardContent,
  CardMeta,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/design-system";

interface NewsletterCardProps {
  issue: NewsletterIssue;
  isCurrent?: boolean;
  layout?: "vertical" | "horizontal";
}

export function NewsletterCard({ issue, isCurrent = false, layout = "vertical" }: NewsletterCardProps) {
  const [imageError, setImageError] = useState(false);
  const isComingSoon = issue.figmaLink === "#" || !issue.figmaLink;

  if (layout === "horizontal") {
    return (
      <Card
        href={isComingSoon ? undefined : issue.figmaLink}
        target={isComingSoon ? undefined : "_blank"}
        rel={isComingSoon ? undefined : "noopener noreferrer"}
        variant={isComingSoon ? "comingSoon" : "interactive"}
        className="flex flex-row overflow-hidden"
      >
        {/* Left: text content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <CardMeta items={[issue.volume, issue.date]} />
            <CardTitle size="large">{issue.featuredTool}</CardTitle>
            <CardDescription clamp={3}>{issue.description}</CardDescription>
          </div>
          {!isComingSoon && (
            <div className="mt-6">
              <CardAction>Read Issue</CardAction>
            </div>
          )}
        </div>

        {/* Right: image */}
        <div className="relative w-72 flex-shrink-0 overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20">
          {!imageError && issue.imageUrl && (
            <img
              src={issue.imageUrl}
              alt={`${issue.title} - ${issue.volume}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-zinc-900/60 to-transparent" />
          {isComingSoon && (
            <div className="absolute top-4 right-4">
              <span className="rounded-full border border-white/20 bg-black/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card
      href={isComingSoon ? undefined : issue.figmaLink}
      variant={isComingSoon ? "comingSoon" : "interactive"}
    >
      <CardImage
        src={imageError ? "" : issue.imageUrl}
        alt={`${issue.title} - ${issue.volume}`}
        onError={() => setImageError(true)}
        placeholder={
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-6xl">📰</div>
              <p className="text-sm text-zinc-400">Add {issue.imageUrl}</p>
            </div>
          </div>
        }
      >
        {isComingSoon ? (
          <CardBadge position="top-left">Coming Soon</CardBadge>
        ) : isCurrent ? (
          <CardBadge position="top-left">Current Issue</CardBadge>
        ) : null}
      </CardImage>

      <CardContent>
        <CardMeta items={[issue.volume, issue.date]} />
        <CardTitle>{issue.featuredTool}</CardTitle>
        <CardDescription>{issue.description}</CardDescription>
        {!isComingSoon && <CardAction>Read Issue</CardAction>}
      </CardContent>
    </Card>
  );
}
