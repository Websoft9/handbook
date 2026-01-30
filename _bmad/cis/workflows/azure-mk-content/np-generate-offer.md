---
name: np-generate-offer
description: Generate Azure Marketplace Offer Listing (Single Product with Hosting Value Focus)
---

# NP Workflow: Generate Offer Listing

**Goal:** Create conversion-optimized Azure Marketplace Offer content (Title, Summary, Description) for Single Product offers using strict HTML templates and Hosting Value Proposition Framework.

**Workflow Overview:**
1. Collect basic software information (name, category, related apps, reference URLs)
2. Auto-generate hosting-focused pain points and benefits (using reference URLs for context)
3. User confirms/edits generated content
4. Auto-populate categories
5. Generate title options (A/B/C testing)
6. Generate summary and description
7. Present final output for approval

---

## Step 1: Initial Information Collection

**Ask user to provide:**

1. **Software Name** (e.g., WordPress, Magento, Joomla, n8n)
2. **Category/Industry** (e.g., CMS, E-commerce, AI Workflow, DevOps)
3. **Related Applications** (optional - apps that complement this software, e.g., WooCommerce for WordPress, Redis for caching)
4. **Reference URLs** (optional - up to 3 URLs for context, e.g., official website, documentation, GitHub repo)
   - URL 1: [Primary reference, e.g., https://example.com]
   - URL 2: [Secondary reference, optional]
   - URL 3: [Tertiary reference, optional]

**Note:** This workflow is optimized for **Single Product Offers** (one primary software with self-hosting emphasis).

**Purpose of Reference URLs:**
- Used by AI to understand software context and generate accurate hosting-focused pain points and benefits
- Helps identify common deployment challenges and operational requirements
- Provides context for generating realistic value propositions

---

## Step 2: Auto-Generate Hosting Value Framework Content

**CRITICAL INSTRUCTIONS:**

Based on the software name, category, and **reference URLs** provided, **automatically generate** pain points and benefits using the **Hosting Value Proposition Framework** (7 core principles):

**If reference URLs provided:**
- Fetch and analyze content from provided URLs to understand deployment requirements, common pain points, and operational complexity
- Use URL context to generate realistic, software-specific hosting challenges
- Incorporate actual deployment patterns and maintenance requirements from documentation

**Generation Process:**

1. **Performance** - Faster page loads, better SEO, lower bounce rates
2. **Reliability** - 99.9% uptime SLA, automated backups, disaster recovery
3. **Ease of Use** - One-click deployment, no DevOps skills required
4. **Day-2 Operations** - Automated security patches, SSL renewal, health monitoring
5. **Support** - 24/7/365 Azure-specialized team
6. **Cost Transparency** - Transparent Azure billing, MACC-eligible, no hidden fees
7. **Scalability** - Grow resources as business grows

**WHAT TO GENERATE:**

Generate **3 Pain Points** focused on hosting/operations/infrastructure challenges:
- ❌ **DO NOT** describe software features or business capabilities
- ✅ **DO** focus on deployment complexity, maintenance burden, infrastructure management
- Examples:
  - "Complex multi-step deployment requiring Docker expertise"
  - "Manual SSL certificate renewal and security patch management"
  - "Unpredictable hosting costs with hidden infrastructure fees"
  - "Hours spent troubleshooting server configuration and database optimization"

Generate **3 Benefits** focused on hosting value delivery (map to 7 principles above):
- ❌ **DO NOT** highlight software-specific features (e.g., "WordPress themes", "n8n integrations")
- ✅ **DO** emphasize hosting infrastructure benefits
- Examples:
  - "Deploy production-ready [App] in under 10 minutes (Ease of Use)"
  - "Save up to 10 hours/week on routine infrastructure maintenance (Day-2 Operations)"
  - "99.9% uptime SLA with automated backups and DDoS protection (Reliability)"
  - "Transparent Azure billing with no hidden infrastructure costs (Cost Transparency)"

**Apply Safe Claims Rule:**
- Use boundary qualifiers: "up to X", "typically X", "average X"
- Bind numbers to specific actions: "Save up to 10 hours/week on patching"
- Add disclaimers where appropriate: "(varies by environment)"

---

## Step 3: Present Auto-Generated Content for User Confirmation

**Display generated content:**

```
🤖 Auto-Generated Hosting Value Content

Based on: [Software Name] - [Category]
Reference URLs analyzed: [Number of URLs provided]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 PAIN POINTS (Hosting/Operations Focus)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. [Generated Pain Point 1]
2. [Generated Pain Point 2]
3. [Generated Pain Point 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ BENEFITS (Hosting Value Framework)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. [Generated Benefit 1] → Maps to: [Principle Name]
2. [Generated Benefit 2] → Maps to: [Principle Name]
3. [Generated Benefit 3] → Maps to: [Principle Name]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Ask user:**
```
Choose an option:
[1] ✅ Confirm and proceed
[2] 🔄 Regenerate with different focus
[3] ✏️ Edit specific pain point or benefit (provide number to edit)
[4] ➕ Add additional pain point or benefit

Select option (1-4):
```

**Handle user response:**

**[1] Confirm:** Proceed to Step 4

**[2] Regenerate:**
- Ask: "What aspect should we emphasize? (Performance/Reliability/Cost/Operations/etc.)"
- Regenerate content with new emphasis
- Redisplay confirmation menu

**[3] Edit:**
- Ask: "Which item to edit? (P1/P2/P3 for Pain Points, B1/B2/B3 for Benefits)"
- Ask: "Provide new content"
- Validate against Hosting Value Framework rules
- Update and redisplay confirmation menu

**[4] Add:**
- Ask: "Add Pain Point (P) or Benefit (B)?"
- Ask: "Provide content"
- Validate against Hosting Value Framework rules
- Add to list and redisplay confirmation menu

**CRITICAL:** User MUST select option [1] to proceed. Do NOT auto-advance without explicit confirmation.

---

## Step 4: Categories & Industries Selection

**Partner Center Required Fields:**

Based on the software and category, **automatically suggest** up to 2 Categories and 2 Industries from Partner Center options.

**Data-driven recommendations:**
- **CMS/Web:** Categories ["Web" or "Developer Tools"], Industries ["Retail" or "Media & Entertainment"]
- **DevOps:** Categories ["Developer Tools" or "IT & Management Tools"], Industries ["Professional Services" or "Manufacturing"]
- **AI/ML:** Categories ["AI + Machine Learning"], Industries ["Financial Services" or "Healthcare"]
- **E-commerce:** Categories ["Web" or "Business Applications"], Industries ["Retail" or "Consumer Goods"]

**Present recommendations to user for confirmation or modification.**

**Note:** Correct category selection significantly impacts Azure internal search ranking.

---

## Step 5: IMPORTANT - Safe Claims Rule

**Apply to ALL numeric outputs:**

When generating quantified benefits:
- Use boundary qualifiers: "up to X", "typically X", "average X", "depending on configuration"
- Bind numbers to specific actions: "Save up to 10 hours/week on patching" (not "reduce costs 40%")
- Add brief disclaimers: "(varies by environment and plan configuration)" where appropriate

**Examples:**
- ✅ "Deploy in minutes (environment-dependent)"
- ✅ "Save up to 10 hours/week on routine maintenance tasks"
- ✅ "Reduce time spent on backup management by ~70% (typical for SMB deployments)"
- ✅ "Improve page load speeds by 40-60% with built-in caching (varies by content)"
- ✅ "Handle up to 10x traffic with optimized configurations (depending on workload)"
- ❌ "Deploy in 5 minutes"
- ❌ "Save 10 hours/week"
- ❌ "70% cost reduction"
- ❌ "10x faster performance"
- ❌ "Free [feature]" (use "Included [feature]" or "No additional [feature] costs")

---

## Step 6: Generate Title (A/B/C Testing)

Optimize for brand keyword search.

**Generate 3 Title Variants for A/B/C Testing:**

**Title Option A (Brand-First Strategy):**
- Format: `[Software] on Azure - [Key Benefit] Self-Hosted by Websoft9`
- Example: "WordPress on Azure - Full Control & Expert Support by Websoft9"
- Rationale: Prioritizes software name for brand searches, includes trust signal
- Best for: Users searching for specific software + Azure

**Title Option B (Benefit-First Strategy):**
- Format: `[Quantified Benefit] - Self-Host [Software] on Azure`
- Example: "Save 60% on Hosting - Self-Host WordPress on Azure"
- Rationale: Leads with compelling benefit, targets cost-conscious buyers
- Best for: Conversion-focused, competitive differentiation

**Title Option C (Use Case Strategy):**
- Format: `[Software] for [Use Case] - Azure Self-Hosted Solution`
- Example: "WordPress for E-commerce - Azure Self-Hosted with WooCommerce"
- Rationale: Targets specific use case searches, includes key feature/plugin
- Best for: Niche audiences, vertical-specific buyers

**Present all 3 options with character counts:**
```
📊 Title A/B/C Test Options:

A. [Generated Title A] (X chars)
   Strategy: Brand-First | Best for: Brand Searches

B. [Generated Title B] (Y chars)
   Strategy: Benefit-First | Best for: Cost-Conscious

C. [Generated Title C] (Z chars)
   Strategy: Use Case | Best for: Vertical-Specific

Which Title do you prefer? (A/B/C or type 'regenerate' for new options)
```

**User Selection:** Wait for user to select A, B, C, or request regeneration before proceeding.

---

## Step 7: Generate Summary

"Self-host [Software] with full control + expert support", quantified benefit (with safe claims).

**Character limit:** 150 chars

**Auto-generate based on confirmed pain points and benefits from Step 3.**

---

## Step 8: Generate Short Description

"Turnkey [Software] self-hosting" with service features.

**Character limit:** 200-250 chars

**Auto-generate based on software name and hosting value framework.**

---

## Step 9: Generate Description (Using Template)

**LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-description-single-product-2800.html`

2. **AUTO-POPULATE placeholder values using confirmed content:**
   - `[SOFTWARE]`: Software name from Step 1
   - `[TARGET_PERSONA]`: Auto-generate based on category/industry from Step 1
   - `[PAIN_POINT_1-3]`: Use the 3 confirmed pain points from Step 3
   - `[SPECIFIC_BENEFIT_1-3]`: Use the 3 confirmed benefits from Step 3 (hosting-focused)
   - `[PLAN_1-3_NAME]`: Auto-generate plan tier names (e.g., "[Software] for Startups", "[Software] for Growing Teams", "[Software] for Enterprises")
   - `[TCO_SAVINGS]`: Use safe qualifier (e.g., "40-60% (for 50+ user deployments)")
   - `[DEPLOYMENT_TIME]`: Use safe qualifier (e.g., "under 10 minutes (environment-dependent)")

3. **Replace ALL placeholders** in template with auto-populated values

4. **Validate character count** ≤3000 (template targets 2800, leaves 200 buffer)

5. **If >3000,** remove optional bullets from "Customer Success" section first

6. **Present generated content for user review:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📄 GENERATED OFFER DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Character Count: [X]/3000

[Display generated HTML content]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Choose an option:
[1] ✅ Confirm and proceed
[2] ✏️ Edit specific section
[3] 🔄 Regenerate with adjustments

Select option (1-3):
```

**CRITICAL:** Do NOT add sections beyond template. Do NOT expand bullet lists beyond template limits.

---

## Step 10: Metadata & Output Formatting

### 10.1: Search Keywords

**Auto-generate** "Search Keywords": Provide list of 3 high-impact SEO keywords (max 3 allowed) that are NOT already in the Title.

Based on software name and category.

### 10.2: HTML Validation

- Only use approved tags: `<b>`, `<i>`, `<br>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<h1>`-`<h6>`
- Ensure all tags have proper opening/closing (except `<br>`)

### 10.3: Present Final Output

Present final output in clearly marked section:

```
✅ Ready for Partner Center (copy below):
```

Add reminder note: "This content uses only Azure Marketplace-approved HTML and can be pasted directly into Partner Center fields."

### 10.4: Save Output

**Standard File Naming Convention:**

Save generated content to: `{project-root}/specs/output/{software-name}-offer-listing.md`

**Naming Rules:**
- Use kebab-case for `{software-name}` (e.g., "wordpress", "n8n", "magento")
- Suffix indicates content type: `-offer-listing`

**Confirm file saved location to user:**
```
✅ File saved:
- Offer Listing: specs/output/{software-name}-offer-listing.md
```

---

## Output

Full Markdown listing draft with:
- SEO-optimized structure
- Hosting Value Framework-aligned pain points and benefits
- Safe numeric claims with qualifiers
- Partner Center-ready formatting
- Character count validation
