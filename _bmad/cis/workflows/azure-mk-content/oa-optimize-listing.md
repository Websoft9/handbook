---
name: oa-optimize-listing
description: Review and optimize existing Azure Marketplace listing descriptions
---

# OA Workflow: Optimize Existing Listing

**Goal:** Analyze existing listing content and rewrite with "Growth Infrastructure Platform" principles, safe claims, and Partner Center compliance.

---

## Step 1: Request Existing Description

Ask user to paste existing description text.

---

## Step 2: Identify Weaknesses

Analyze the description for common issues:

### Check for "Growth Infrastructure" vs "Tool Catalog" positioning:
- ❌ **Tool Catalog:** Lists tools as features without business context
- ✅ **Growth Infrastructure:** Frames content around business timelines and expansion scenarios

### Check for business timeline structure:
- ❌ **Missing:** No scenario showing when/why user would add apps over time
- ✅ **Present:** Clear timeline narrative (e.g., "Q1 WordPress, Q2 Moodle, Q3 Magento")

### Check for "3-Second User Confirmation Test":
- ❌ **Fails:** User can't answer "What do I get today?" and "What flexibility tomorrow?"
- ✅ **Passes:** Title + Summary clearly communicate starting app + expansion capability

### Check for "Single-App vs Multi-App Platform" comparison:
- ❌ **Missing:** No explicit section comparing single-app offers to platform approach
- ✅ **Present:** Clear comparison showing re-deployment pain vs expansion flexibility

### Check for "Suite" confusion:
- ❌ **Confusing:** Uses "Suite" implying bundle pricing or forced multi-app purchase
- ✅ **Clear:** Uses "Starting Point + Expansion" model, emphasizes per-app billing

### Check for "Manager-first" vs "Tool-first" positioning:
- ❌ **Manager-first:** "Websoft9 provides [tools]..." 
- ✅ **Tool-first:** "[Primary App] powered by Websoft9..." or "[App] Hosting with Multi-App Platform"

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

### Apply "Growth Infrastructure Platform" positioning:
- Convert tool-listing patterns to business-evolution scenarios
- Lead with primary app in Title (SEO anchor for specific search traffic)
- Add timeline narrative: When user would add each app (Q1/Q2/Q3 or use case triggers)
- Include "growth insurance" framing: Small premium today eliminates re-deployment later

### Add "Single-App Solutions vs Multi-App Platform" comparison:
- Create explicit section comparing single-app offers to platform approach
- Address user's mental model: "Why choose this over [competitor]'s single-app offer?"
- Highlight re-deployment pain: "Avoid 2-week setup when adding new applications"

### Rename "Available Plans" section:
- ❌ "Available Plans" or "Select Your Tools"
- ✅ "Choose Your Starting Point, Expand When Ready"
- Each plan description must show expansion path
- Example: "Start with WordPress, add Drupal for multilingual, expand to Magento for online store"

### Eliminate "Suite" confusion:
- Replace "Suite" terminology with "Starting Point + Expansion" model
- Emphasize per-app billing clarity: "Deploy [App], with ability to add others anytime"
- Clarify: User is not buying bundle, they're buying platform with first app included

### Make it "Tool-first" (Value > Enabler):
- Lead with primary tool name and benefits
- Mention Websoft9 as enabler in supporting role
- Title format: "[Primary App] Hosting with Multi-App [Category] Platform"

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

Rewritten listing description with "Growth Infrastructure Platform" positioning, business timeline scenarios, single-app vs multi-app comparison, safe claims, HTML compliance, and character limit validation.
