---
name: np-generate-offer
description: Generate Azure Marketplace Offer Listing (Category Suite or Single Product)
---

# NP Workflow: Generate Offer Listing

**Goal:** Create conversion-optimized Azure Marketplace Offer content (Title, Summary, Description) using strict HTML templates.

---

## Step 1: Offer Type Selection

Ask user to select offer type:

**[1] Category Suite** - Multiple apps under one category (e.g., "DevOps Suite" with Jenkins, GitLab, Jira)

**[2] Single Product** - One primary software with self-hosting emphasis (e.g., "WordPress on Websoft9")

Wait for user selection: 1 or 2

---

## Step 2: Load Reference Template

- For [1]: Reference `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/category-suite-offer-template.md`
- For [2]: Reference `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/single-product-offer-template.md`

*These templates provide structural understanding. Actual generation uses strict HTML templates.*

---

## Step 3: Categories & Industries Selection

**Partner Center Required Fields:**

Ask user to select up to 2 Categories and 2 Industries from Partner Center options.

**Data-driven recommendations based on product type:**
- **CMS/Web:** Categories ["Web" or "Developer Tools"], Industries ["Retail" or "Media & Entertainment"]
- **DevOps:** Categories ["Developer Tools" or "IT & Management Tools"], Industries ["Professional Services" or "Manufacturing"]
- **AI/ML:** Categories ["AI + Machine Learning"], Industries ["Financial Services" or "Healthcare"]
- **E-commerce:** Categories ["Web" or "Business Applications"], Industries ["Retail" or "Consumer Goods"]

**Note:** Correct category selection significantly impacts Azure internal search ranking.

---

## Step 4: Getting Started & Documentation Links

Prompt user to provide (or generate placeholder for):
- **Getting Started Guide URL** (HTTPS required): `https://docs.websoft9.com/[product]/getting-started`
- **Full Documentation URL:** `https://docs.websoft9.com/[product]`
- **Video Tutorial URL** (if available): `https://youtube.com/...`

*These links will be embedded in Description under "Resources" section.*

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

## Step 6A: FOR CATEGORY SUITE [1]

### 6A.1: Information Collection

- **Ask:** Category Name (e.g., DevOps, CMS, AI Workflow)
- **Ask:** How many apps do you want to include in this Category Suite? (minimum 3, no upper limit)
  - Validate: n ≥ 3
  - Store as `{app_count}`
- **Ask:** Target Audience (e.g., DevOps Teams, IT Managers)
- **Ask:** Primary Quantified Benefit (remember to apply Safe Claims rule)

### 6A.2: Generate Top N App Analysis Report

**Generate comprehensive data-driven analysis for app selection:**

1. **Identify Category Context**: Based on the category name, identify relevant apps and competitive landscape

2. **Analyze N Apps** (where N = `{app_count}` from user input):
   - **App Name**
   - **Description**: 1-2 sentence overview
   - **GitHub Stars**: ⭐ **REAL-TIME VERIFICATION REQUIRED**
     - For each open-source app, execute: `curl -s https://api.github.com/repos/[owner]/[repo] | jq '.stargazers_count'`
     - Display result with timestamp: "X stars (verified 2026-01-28 14:30 UTC)"
     - Handle errors: If rate limit hit, show: "Unable to verify (API rate limit)" and use cached data with disclaimer
     - If repo not found: Show "Repository not found or private"
     - Never use LLM-inferred star counts - always use actual API results
   - **Market Search Volume**: Estimated monthly searches on Azure Marketplace and Google
   - **Azure Marketplace Competition**: Number of existing offers, competitive intensity (Low/Medium/High)
   - **Hiring Demand**: Job posting frequency on LinkedIn/Indeed using app keywords
   - **Other Relevant Data**: StackOverflow activity, developer community size, enterprise adoption
   - **Suitability Score**: Composite score (1-10) based on all dimensions
   - **Sales Recommendation**: "Worth Selling" or "Consider Alternatives" with brief rationale

3. **Output Format**: Generate structured analysis file and save to:
   `{project-root}/specs/output/{catalog_name}-top-analysis.md`
   
   **Naming Convention**: Use kebab-case for `{catalog_name}` (e.g., "devops", "cms", "ai-workflow")

4. **Display Summary**: Present top findings in table format for quick review

**Example Output Structure:**
```markdown
# Top N Analysis: {Category Name}
Generated: {date}

## Summary
- Total Apps Analyzed: {app_count}
- Highly Recommended: {count}
- Moderate Potential: {count}
- Low Priority: {count}

## Detailed Analysis

### 1. {App Name}
- **Description**: {brief description}
- **GitHub Stars**: {number}
- **Market Search Volume**: {monthly searches estimate}
- **Azure Competition**: {Low/Medium/High}
- **Hiring Demand**: {job postings/month}
- **Community**: {StackOverflow questions, forum activity}
- **Suitability Score**: {1-10}/10
- **Recommendation**: Worth Selling | Consider Alternatives
- **Rationale**: {why this app is/isn't a good fit}

[Repeat for all N apps]

## Recommended Priority Ranking
1. {App Name} (Score: X/10)
2. {App Name} (Score: X/10)
...
```

### 6A.3: Interactive App Evaluation Loop

**Present evaluation menu to user:**

```
📊 Top N Analysis Complete!

Your Category Suite currently has {app_count} apps.
Review the analysis at: specs/output/top-n-analysis-{category-name}.md

What would you like to do?

[1] Replace a specific app
[2] Reorder apps by priority
[3] Add more apps (increase count)
[4] Remove apps (decrease count)
[5] Regenerate entire analysis with new apps
[6] ✅ Confirm and proceed to Offer Listing generation

Select option (1-6):
```

**Handle each option:**

**[1] Replace App:**
- Ask: "Which app do you want to replace? (provide name or number)"
- Ask: "What app should replace it?"
- Regenerate analysis for the new app
- Update analysis file
- Redisplay evaluation menu

**[2] Reorder Apps:**
- Display current priority ranking
- Ask: "Provide new order (e.g., '3,1,5,2,4' or drag-and-drop style list)"
- Update ranking in analysis file
- Redisplay evaluation menu

**[3] Add Apps:**
- Ask: "How many apps to add?"
- Update `{app_count}`
- Ask: "What apps to add?"
- Regenerate analysis including new apps
- Redisplay evaluation menu

**[4] Remove Apps:**
- Ask: "Which apps to remove? (provide names or numbers)"
- Verify: Check if removing will go below minimum 3
- If valid: Update `{app_count}`, regenerate analysis
- Redisplay evaluation menu

**[5] Regenerate:**
- Ask: "Provide new app list or category focus"
- Regenerate entire Top N analysis
- Redisplay evaluation menu

**[6] Confirm:**
- Proceed to Step 6A.4
- Use finalized app list from analysis

**CRITICAL:** User MUST select option [6] to proceed. Do NOT auto-advance without explicit confirmation.

### 6A.4: Generate Title (A/B/C Testing)

Optimize for Azure Marketplace search (40% algorithm weight on title keywords).

**Generate 3 Title Variants for A/B/C Testing:**

**Title Option A (Keyword-Heavy Strategy):**
- Format: `[High-Traffic App 1], [App 2], [App 3] & More [Category] Suite - Self-Hosted on Azure`
- Rationale: Maximizes app keyword density for organic search, targets users searching for specific tools
- Best for: High-volume app searches, broad category appeal

**Title Option B (Benefit-Driven Strategy):**
- Format: `[Category] Suite - [Quantified Benefit] with [Top App] & [Top App 2]`
- Example: "DevOps Suite - Save 10hrs/week with Jenkins, GitLab & More"
- Rationale: Leads with value proposition, includes top apps for search relevance
- Best for: Conversion-focused, addresses pain points immediately

**Title Option C (Brand + Value Strategy):**
- Format: `Complete [Category] Platform - [Top App], [App 2] Self-Hosted by Websoft9`
- Rationale: Positions as comprehensive solution, includes brand trust signal
- Best for: Enterprise buyers, brand-aware audiences

**Present all 3 options with character counts:**
```
📊 Title A/B/C Test Options:

A. [Generated Title A] (X chars)
   Strategy: Keyword-Heavy | Best for: Organic Search

B. [Generated Title B] (Y chars)
   Strategy: Benefit-Driven | Best for: Conversion

C. [Generated Title C] (Z chars)
   Strategy: Brand + Value | Best for: Enterprise

Which Title do you prefer? (A/B/C or type 'regenerate' for new options)
```

**User Selection:** Wait for user to select A, B, C, or request regeneration before proceeding.

### 6A.4: Generate Summary

Include top 2-3 high-traffic app names in first 50 characters, quantified benefit (with safe claims), "unified management".

**Character limit:** 150 chars

### 6A.5: Generate Short Description

List 6-8 apps with service features.

**Character limit:** 200-250 chars

### 6A.6: Generate Description (Using Template)

**LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-description-category-suite-2800.html`

2. **Collect placeholder values from user:**
   - `[TARGET_AUDIENCE]`: e.g., "AI Engineers, Data Scientists, and DevOps Teams"
   - `[QUANTIFIED_BENEFIT]`: e.g., "Reduce workflow development time by up to 60%"
   - `[APP_1]`, `[APP_2]`, `[APP_3]`, `[APP_4]`: Top 4 apps from priority ranking
   - `[APP_1_DESCRIPTION]`: Brief description (10-15 words)
   - `[PAIN_CONTEXT]`: e.g., "complex tool integration, lengthy deployment cycles, and ongoing maintenance overhead"
   - `[PAIN_POINT_1-4]`: Specific pain points from user input
   - `[CATEGORY]`: Category name (e.g., "AI Workflow", "DevOps", "CMS")
   - `[N]`: Total number of apps (e.g., "8", "15")

3. **Replace ALL placeholders** in template with collected values

4. **CRITICAL - Dynamic Available Plans Generation:**

   **Calculate description length per app based on total app count:**
   ```
   If app_count = 3-5:  Use 40-60 characters per app description
   If app_count = 6-9:  Use 25-35 characters per app description
   If app_count = 10+:  Use 15-20 characters per app description
   ```

   **Generate Available Plans section:**
   - **List ALL apps** (no truncation)
   - Format: `<li><b>{App Name} Suite</b> — {dynamic-length description}</li>`
   - Adjust description conciseness based on app count
   - Example descriptions by length:
     - **40-60 chars**: "World's leading CMS powering 43% of websites — unlimited themes, plugins, and customization freedom"
     - **25-35 chars**: "Leading CMS with extensive plugin ecosystem and community support"
     - **15-20 chars**: "Popular CMS platform"

   **Character Budget Management:**
   - Calculate Available Plans section size: `<h3>Available Plans</h3>` + intro paragraph + all `<li>` items
   - Ensure total Description HTML ≤ 3000 characters
   - If exceeding: First compress Available Plans descriptions, then other sections if needed

5. **Validate character count** ≤3000 (display breakdown: Available Plans section = X chars, Total = Y chars)

6. **If >3000,** apply compression strategy:
   - Step 1: Reduce Available Plans descriptions to next lower tier
   - Step 2: Remove optional bullets from other sections
   - Step 3: Compress pain points if still over

7. **Present final HTML** with character count displayed:
   ```
   ✅ Character Count: 2,847/3,000
   - Available Plans section: 456 chars
   - Listed {app_count} apps with {description_length} char descriptions
   ```

**CRITICAL:** Do NOT add sections beyond template. Template is designed to stay within 3000 character limit with dynamic Available Plans adjustment.

---

## Step 6B: FOR SINGLE PRODUCT [2]

### 6B.1: Information Collection

- **Ask:** Software Name (e.g., WordPress, Magento, Joomla)
- **Ask:** Primary Industry/Use Case (e.g., E-commerce, Publishing, SaaS)
- **Ask:** Key Self-Hosting Benefits (e.g., data sovereignty, unlimited customization)
- **Ask:** Primary Quantified Benefit (remember to apply Safe Claims rule)

### 6B.2: Generate Title (A/B/C Testing)

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

### 6B.3: Generate Summary

"Self-host [Software] with full control + expert support", quantified benefit (with safe claims).

**Character limit:** 150 chars

### 6B.4: Generate Short Description

"Turnkey [Software] self-hosting" with service features.

**Character limit:** 200-250 chars

### 6B.5: Generate Description (Using Template)

**LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-description-single-product-2800.html`

2. **Collect placeholder values from user:**
   - `[SOFTWARE]`: Software name (e.g., "WordPress", "Magento")
   - `[TARGET_PERSONA]`: Target persona (e.g., "WordPress developer", "e-commerce manager")
   - `[PAIN_POINT_1-3]`: Three specific pain points from user input
   - `[SPECIFIC_BENEFIT_1-3]`: Software-specific benefits beyond standard benefits
   - `[PLAN_1-3_NAME]`: Plan tier names (e.g., "Starter", "Professional", "Enterprise")
   - `[TCO_SAVINGS]`: TCO savings percentage with safe qualifier (e.g., "40-60%")
   - `[DEPLOYMENT_TIME]`: Deployment time with safe qualifier (e.g., "minutes (environment-dependent)")

3. **Replace ALL placeholders** in template with collected values

4. **Validate character count** ≤3000 (template targets 2800, leaves 200 buffer)

5. **If >3000,** remove optional bullets from "Customer Success" section first

6. **Present final HTML** with character count displayed

**CRITICAL:** Do NOT add sections beyond template. Do NOT expand bullet lists beyond template limits.

---

## Step 7: Metadata & Output Formatting

### 7.1: Search Keywords

Generate "Search Keywords": Provide list of 3 high-impact SEO keywords (max 3 allowed) that are NOT already in the Title.

### 7.2: HTML Validation

- Only use approved tags: `<b>`, `<i>`, `<br>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<h1>`-`<h6>`
- Ensure all tags have proper opening/closing (except `<br>`)

### 7.3: Present Final Output

Present final output in clearly marked section:

```
✅ Ready for Partner Center (copy below):
```

Add reminder note: "This content uses only Azure Marketplace-approved HTML and can be pasted directly into Partner Center fields."

### 7.4: Save Output

**Standard File Naming Convention:**

Save generated content to: `{project-root}/specs/output/{catalog_name}-suite-offer-listing.md`

**Related Files (if Category Suite):**
- Top N Analysis: `{catalog_name}-top-analysis.md` (already saved in Step 6A.2)
- Plans (if generated separately): `{catalog_name}-plans.md`

**Naming Rules:**
- Use kebab-case for `{catalog_name}` (e.g., "devops", "cms", "ai-workflow")
- Suffix indicates content type: `-suite-offer-listing`, `-top-analysis`, `-plans`

**Confirm file saved location to user:**
```
✅ Files saved:
- Offer Listing: specs/output/{catalog_name}-suite-offer-listing.md
- Top N Analysis: specs/output/{catalog_name}-top-analysis.md
```

---

## Output

Full Markdown listing draft with SEO-optimized structure, safe numeric claims, validation language, VM architecture transparency, and Partner Center-ready formatting.
