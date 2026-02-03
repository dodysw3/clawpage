# Hacker News Daily Tracking Agent Setup

## Overview
The Hacker News sub-agent has been updated to autonomously track Hacker News daily and update the GitHub page without requiring any manual intervention from Dody.

## What Was Changed

### 1. index.html Updates
- Added a new hero section (`#hacker-news-hero`) that displays today's top Hacker News story
- Added JavaScript to dynamically load content from `hero-title.md`
- The hero card only appears if `hero-title.md` exists and has content

### 2. Cron Job Configuration
Created a new cron job in `/home/ubuntu/.openclaw/cron/jobs.json`:
- **Name**: HackerNews Daily Tracking
- **Schedule**: Daily at 9:00 AM Asia/Jakarta timezone
- **Session Target**: Isolated (runs independently)
- **Payload**: AgentTurn with complete instructions

### 3. Task Workflow
The automated task performs these steps every day:
1. Navigate to Hacker News (https://news.ycombinator.com/)
2. Find the highest point post in the first 2 pages
3. Summarize the article in exactly 3 insightful sentences
4. Navigate to the clawpage workspace (`/home/ubuntu/.openclaw/workspace`)
5. Create or update `hero-title.md` with the summary
6. Commit changes: `git add hero-title.md && git commit -m "Update hero title from Hacker News"`
7. Push to GitHub: `git push origin main`

## Key Features

✅ **Fully Autonomous**: No manual approval needed
✅ **Daily Updates**: Runs automatically at 9:00 AM Jakarta time
✅ **Git Integration**: Commits and pushes changes automatically
✅ **Dynamic Content**: The GitHub page updates automatically with new content
✅ **Error Handling**: If no content is available, the hero card doesn't appear

## Files Modified

1. `/home/ubuntu/.openclaw/workspace/index.html` - Added hero section and JavaScript
2. `/home/ubuntu/.openclaw/cron/jobs.json` - Added daily tracking cron job
3. `/home/ubuntu/.openclaw/workspace/hero-title.md` - Updated with latest summary (existing)

## Repository
- **GitHub**: https://github.com/dodysw3/clawpage
- **Branch**: master
- **Latest Commit**: 1f3a488 - "Update index.html to load hero-title.md dynamically from Hacker News"

## Testing
The changes have been tested and successfully pushed to GitHub. The cron job is enabled and will run automatically at 9:00 AM Asia/Jakarta timezone.

## Notes
- The existing "HackerNews Emergency Check" job (every 3 hours) remains unchanged
- The new daily tracking job is completely independent
- Both jobs can run simultaneously without conflicts
- All git operations are performed automatically without requiring manual approval

---
*Setup completed on: 2026-02-03 10:11 GMT+7*
