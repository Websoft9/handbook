---
name: oa-optimize-listing
description: Review and optimize existing Azure Marketplace listing descriptions
---

# OA Workflow: Optimize Existing Listing

**Goal:** Analyze existing listing content and rewrite with "Software Supermarket" principles, safe claims, and Partner Center compliance.

---

## Step 1: Request Existing Description

Ask user to paste existing description text.

---

## Step 2: Identify Weaknesses

Analyze the description for common issues:

### Check for "Manager-first" vs "Tool-first" positioning:
- ❌ **Manager-first:** "Websoft9 provides [tools]..." 
- ✅ **Tool-first:** "[Tools] powered by Websoft9..."

### Check for Plan Menu visibility:
- ❌ **Missing:** No explicit list of available Plans
- ✅ **Present:** Clear section listing available Plans/SKUs

### Check HTML compliance:
- ❌ **Violations:** Unapproved tags, unclosed tags, CSS/JavaScript
- ✅ **Compliant:** Only `<b>`, `<i>`, `<br>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<h1>`-`<h6>`

### Check trademark compliance:
- ❌ **Issues:** Direct endorsement claims, missing disclaimers
- ✅ **Compliant:** Trademark disclaimer present

### Check numeric claims:
- ❌ **Hard commitments:** "Save 10 hours/week", "Free trial", "70% cost reduction"
- ✅ **Safe claims:** "Save up to 10 hours/week", "Test in your environment", "Reduce costs by 40-60%"

### Check character limits:
- ❌ **Over limit:** Description >3000 characters
- ✅ **Within limit:** Description ≤3000 characters

---

## Step 3: Rewrite Improvements

Apply optimizations:

### Make it "Tool-first" (Value > Enabler):
- Lead with tool names and benefits
- Mention Websoft9 as enabler, not primary focus

### Explicitly list the Plans:
- Add "Available Plans" section if missing
- List each Plan with brief description

### Apply Safe Claims rule:
- Replace hard numeric statements with qualified versions
- Use "up to / typically / depending on" + bind to specific objects
- Add brief disclaimers: "(varies by environment)"

### Replace "free trial" language:
- ❌ "Start your free trial"
- ✅ "Deploy in minutes and verify [core value] in your environment"
- ✅ "Test with your actual workflows before committing to production"

### Validate HTML tags compliance:
- Remove any unapproved tags
- Ensure proper opening/closing for all tags (except `<br>`)

### Add trademark disclaimer if missing:
- Standard disclaimer mentioning Microsoft products or third-party software trademarks

---

## Step 4: Output Formatting

Present optimized content with:

```
✅ Ready for Partner Center (copy below):
```

Add reminder note: "This content uses only Azure Marketplace-approved HTML and can be pasted directly into Partner Center fields."

---

## Step 5: Save Output

Save optimized content to `{project-root}/specs/output/[offer-name]-optimized.md`

Confirm file saved location to user.

---

## Output

Rewritten listing description with "Software Supermarket" positioning, safe claims, HTML compliance, and character limit validation.
