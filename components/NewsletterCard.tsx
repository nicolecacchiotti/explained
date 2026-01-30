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
}

export function NewsletterCard({ issue, isCurrent = false }: NewsletterCardProps) {
  const [imageError, setImageError] = useState(false);
  const isComingSoon = isCurrent;

  return (
    <Card
      href={isComingSoon ? undefined : issue.figmaLink}
      target={isComingSoon ? undefined : "_blank"}
      rel={isComingSoon ? undefined : "noopener noreferrer"}
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
          <CardBadge position="top-left">Coming Soon (Feb 6)</CardBadge>
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
