# 📝 Medium to Markdown Migration Guide

## How to Copy-Paste from Medium While Preserving Formatting

### Method 1: Direct Copy-Paste (Recommended for Simple Articles)

1. **Copy from Medium**: Select all content in Medium article
2. **Paste into your `.md` file**: Just paste directly
3. **I'll clean it up**: When you tell me to format it, I'll:
   - Fix image paths
   - Clean up formatting
   - Add proper frontmatter
   - Preserve lists, headings, and code blocks

### Method 2: Using Browser Extensions (Best for Complex Articles)

#### Option A: MarkDownload Extension
1. Install [MarkDownload](https://github.com/deathau/markdownload) browser extension
2. Open your Medium article
3. Click the extension icon
4. Copy the Markdown output
5. Paste into your `.md` file

#### Option B: Copy as Markdown Extension
1. Install [Copy as Markdown](https://github.com/0x6b/copy-as-markdown) extension
2. Select content in Medium
3. Right-click → "Copy as Markdown"
4. Paste into your `.md` file

### Method 3: Manual Cleanup Template

When you paste from Medium, you'll often get:
- `file://` URLs for images
- Extra spacing
- Date strings like "Feb 14, 2025"
- Medium-specific formatting

**Just paste it as-is!** I'll handle:
- ✅ Converting `file://` URLs to proper image paths
- ✅ Extracting dates from content
- ✅ Cleaning up spacing
- ✅ Fixing headings
- ✅ Preserving lists and code blocks
- ✅ Adding proper frontmatter

---

## Step-by-Step Workflow

### Step 1: Create Your Article File

```bash
# Create file with simple name
touch src/content/articles/my-medium-article.md
```

### Step 2: Copy-Paste from Medium

Just copy everything from Medium and paste it into your file. Don't worry about:
- Image paths (I'll fix them)
- Dates (I'll extract them)
- Formatting (I'll clean it up)
- Frontmatter (I'll add it)

### Step 3: Tell Me to Format It

Say: **"Format this article and push it"**

I'll:
1. Extract the date from content
2. Create proper slug from title
3. Fix all image paths
4. Clean up formatting
5. Add proper frontmatter
6. Preserve your content structure
7. Push to GitHub

---

## Common Medium Formatting Issues & How I Fix Them

| Medium Format | What I Convert It To |
|---------------|---------------------|
| `file:///path/to/image.webp` | `/images/article images/.../image.webp` |
| `Feb 14, 2025` | `date: 2025-02-14` in frontmatter |
| `·` (bullet) | Proper list formatting |
| Extra blank lines | Clean spacing |
| Medium links | Preserved as-is |
| Code blocks | Preserved with proper syntax |

---

## Example: Before & After

### What You Paste (from Medium):
```markdown
My Article Title

file:///Users/.../image.webp
·
Feb 14, 2025

Introduction text here...

## Section 1

More content...
```

### What I Create:
```markdown
---
title: "My Article Title"
path: "/articles/my-article-title/"
date: 2025-02-14
last_modified_at: 2025-02-14T12:00:00-05:00
excerpt: "Introduction text here..."
image: "/images/article images/.../image.webp"
tags: ["AI", "Machine Learning"]
toc: true
featured: false
draft: false
---

# My Article Title

![Article Image](/images/article images/.../image.webp)

Introduction text here...

## Section 1

More content...
```

---

## Tips for Best Results

### ✅ DO:
- Copy everything including title
- Include images (even if paths look wrong)
- Keep dates in the content
- Paste as-is, don't try to fix it

### ❌ DON'T:
- Don't manually fix image paths
- Don't remove dates from content
- Don't worry about frontmatter
- Don't spend time formatting

---

## Bulk Migration Workflow

If you have multiple Medium articles:

1. **Create all files**: `article-1.md`, `article-2.md`, etc.
2. **Paste content**: Copy-paste from each Medium article
3. **Tell me**: "Format all articles and push them"
4. **I'll process**: All articles at once, one commit, one push

---

## Image Handling

### If Images Are Already Downloaded:
- Put them in: `src/images/article images/Your Article Title/`
- I'll automatically link them when formatting

### If Images Need to Be Downloaded:
1. Download images from Medium
2. Put them in: `src/images/article images/Your Article Title/`
3. Paste article content (with broken image links)
4. I'll fix all image paths automatically

---

## Quick Reference

```bash
# 1. Create file
touch src/content/articles/my-article.md

# 2. Paste Medium content (don't format!)

# 3. Tell me: "Format this and push"

# 4. Done! Article is live in 2-5 minutes
```

---

## Need Help?

Just paste your Medium content and say:
- "Format this article"
- "Fix the images and push"
- "Process all these Medium articles"

I'll handle everything! 🚀

