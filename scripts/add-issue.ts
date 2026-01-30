#!/usr/bin/env ts-node

/**
 * Helper script to add a new newsletter issue
 * 
 * Usage: npm run add-issue
 */

import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function main() {
  console.log('\n📰 Add New Newsletter Issue\n');

  const id = await question('Issue ID (number): ');
  const volume = await question('Volume/Issue name (e.g., "Issue 3"): ');
  const date = await question('Date (e.g., "January 2026"): ');
  const featuredTool = await question('Featured Tool name: ');
  const description = await question('Description: ');
  const imageName = await question('Image filename (e.g., "issue-3.png"): ');
  const figmaLink = await question('Figma prototype link: ');

  const newIssue = `  {
    id: ${id},
    title: "explained",
    volume: "${volume}",
    date: "${date}",
    featuredTool: "${featuredTool}",
    description: "${description}",
    imageUrl: "/images/${imageName}",
    figmaLink: "${figmaLink}",
  },`;

  console.log('\n✅ New issue data:');
  console.log(newIssue);
  console.log('\n📝 Add this to data/issues.ts');
  console.log(`📸 Don't forget to add ${imageName} to public/images/\n`);

  rl.close();
}

main();
