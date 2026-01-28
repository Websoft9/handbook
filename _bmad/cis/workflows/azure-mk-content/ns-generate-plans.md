---
name: ns-generate-plans
description: Generate distinct Plan specifications for apps within an Offer
---

# NS Workflow: Generate Plan Specifications

**Goal:** Create Plan specifications (Plan Name, Summary, Description) for Azure Marketplace Offers using strict HTML templates.

---

## Step 1: Plan Type Selection

Ask user which offer type they need Plans for:

**[1] Category Suite Plans** - Individual app Plans within a suite

**[2] Single Product Plans** - Pricing tiers for one software

Wait for user selection: 1 or 2

---

## Step 2: Load Reference Template

- For [1]: Reference `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/category-suite-plan-template.md`
- For [2]: Reference `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/single-product-plan-template.md`

*These templates provide structural understanding. Actual generation uses strict HTML templates.*

---

## Step 3: Safe Claims Rule Reminder

**IMPORTANT - Apply to ALL numeric outputs:**

When generating quantified benefits in Plan Summaries or Descriptions:
- Use boundary qualifiers: "up to X", "typically X", "depending on configuration"
- Bind numbers to specific actions: "Deploy in minutes (environment-dependent)"
- Add brief disclaimers where appropriate: "(varies by environment)"

---

## Step 4A: FOR CATEGORY SUITE PLANS [1]

### 4A.1: Information Collection

- **Ask:** List of apps/tools to create Plans for (e.g., Jenkins, GitLab, n8n)
- **Ask:** Category context (e.g., DevOps, Workflow Automation)
- **Ask:** Do you want to add a "Full Catalog" plan for users who want maximum flexibility? [Y/N]
  * If Y: Will generate additional "Full {Category} Catalog" plan at the end
  * If N: Skip Full Catalog plan
- **Ask (optional):** Which apps have highest brand recognition/search volume? (For prioritization if not already determined)

### 4A.2: Marketing Strategy Note

**All Plans deliver the SAME VM image with access to full app catalog.** Individual app Plans use psychological anchoring to reduce decision friction (users see familiar app names and decide faster). This is a conversion optimization strategy, not a technical limitation.

### 4A.3: Generate Individual App Plans

For each app, generate using template:

**Plan ID:** `[app-name]-suite` (kebab-case, e.g., `wordpress-cms`, `magento-cms`)

**Plan Name:** `[App Name] [Category] Suite` (e.g., "Jenkins DevOps Suite", "WordPress CMS Suite")

**Plan Summary:** `[App]-optimized with access to [N]+ [Category] tools` (50-80 chars)
- Example: "WordPress-optimized with access to 15+ CMS tools"
- Example: "Joomla-ready deployment + full CMS catalog access"

**Plan Description: LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-plan-category-suite-app.html`

2. **Collect placeholder values:**
   - `[APP_NAME]`: App name (e.g., "WordPress", "Jenkins")
   - `[N]`: Total number of apps in catalog
   - `[CATEGORY]`: Category name (e.g., "CMS", "DevOps")
   - `[TOP_APP_1-3]`: Top 3 apps to list

3. **Replace ALL placeholders** in template

4. **Present final HTML**

### 4A.4: Generate Full Catalog Plan (If Y)

If user selected Y for Full Catalog plan:

**Plan ID:** `full-[category]-catalog` (e.g., `full-cms-catalog`, `full-devops-catalog`)

**Plan Name:** `Full [Category] Catalog` (e.g., "Full CMS Catalog", "Full DevOps Catalog")

**Plan Summary:** `Deploy any [Category] tool on demand - [Top App 1], [Top App 2], [Top App 3] & [N]+ more` (within 100 chars)

**Plan Description: LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-plan-category-suite-full-catalog.html`

2. **Collect placeholder values:**
   - `[N]`: Total number of apps in catalog
   - `[CATEGORY]`: Category name
   - `[APP_LIST]`: List of 6-8 top apps (comma-separated)

3. **Replace ALL placeholders** in template

4. **Present final HTML**

### 4A.5: Pricing Psychology Note

Include in output:
- **Individual app plans:** Position as entry-level (lower psychological barrier)
- **Full Catalog plan:** Can price 20-30% higher (flexibility premium) even though technical delivery is identical
- Users perceive Full Catalog as "more valuable" due to explicit multi-tool positioning

### 4A.6: Output Format

Present as table with Plan ID, Plan Name, Plan Summary, and full Plan Description for each app (+ Full Catalog if requested).

---

## Step 4B: FOR SINGLE PRODUCT PLANS [2]

### 4B.1: Information Collection

- **Ask:** Software name (e.g., WordPress, Magento)
- **Ask:** Which Plan differentiation strategy do you prefer?
  * **[1] By Scale/Traffic** (Starter/Business/Enterprise) - RECOMMENDED - Highest conversion, easy user matching
  * **[2] By Use Case** (e.g., Blogs/E-commerce/Enterprise) - Clear scenario fit
  * **[3] By Service Level** (Self-Managed/Managed/Fully-Managed) - Service differentiation
  * **[4] Hybrid** (Scale + Features + Service) - Comprehensive, strongest value perception
  * **[5] By Operating System** (Debian/Ubuntu/AlmaLinux/Oracle Linux) - OS choice for enterprise compliance

**Note:** Strategy 1 (By Scale/Traffic) is the default recommendation for products with identical technical delivery.

- **Ask:** Number of tiers/variants needed (typically 3-4 for strategies 1-4, or 4-6 OS variants for strategy 5)
- **Ask:** VM resource specs per tier (vCPU, RAM, Storage) [Skip if strategy 5 - use standard specs]
- **Ask (if strategy 1 or 4):** Traffic/scale estimates per tier (e.g., < 10K, 10K-50K, 50K+ visits/month)
- **Ask (if strategy 2):** Primary use case per tier (e.g., Blogs, E-commerce, Multisite)
- **Ask (if strategy 3 or 4):** Service level differentiation (e.g., manual backups vs automated, basic vs priority support)
- **Ask (if strategy 5):** Which OS variants to offer? (Select from: Debian 12.7, Ubuntu 24.04 LTS, AlmaLinux 9.4, Oracle Linux 9.5, or specify others)

### 4B.2: Plan Differentiation Strategies

**Strategy 1 - By Scale/Traffic (Most Common):**
- Differentiate by: VM specs + traffic capacity + basic feature tiers
- Example: Starter (2vCPU, <10K visits), Business (4vCPU, 10K-50K visits), Enterprise (8vCPU, 50K+ visits)
- Add feature progression: Starter (basic caching), Business (Redis + automated backups), Enterprise (Redis + CDN + priority support)

**Strategy 2 - By Use Case:**
- Differentiate by: Pre-installed plugins/configs + optimized for specific scenarios
- Example: "[Software] for Blogs" (SEO tools), "[Software] for E-commerce" (WooCommerce optimized), "[Software] for Enterprise" (Multisite + SSO)
- Note: If all Plans technically identical, emphasize "optimized for" rather than "restricted to"

**Strategy 3 - By Service Level:**
- Differentiate by: Management and support services
- Example: Self-Managed (DIY), Managed (automated updates/backups), Fully-Managed (24/7 monitoring + priority support)

**Strategy 4 - Hybrid (RECOMMENDED):**
- Combine all dimensions: VM specs + features + service level + traffic capacity
- Creates strongest value perception and clearest differentiation
- Example: Starter (2vCPU + basic features + manual backups + <10K visits), Professional (4vCPU + Redis + automated backups + 10K-50K visits + RECOMMENDED tag), Enterprise (8vCPU + full features + priority support + 50K+ visits)

**Strategy 5 - By Operating System:**
- Differentiate by: Base OS choice for enterprise compliance or team preference
- Available OS options: Debian 12.7, Ubuntu 24.04 LTS, AlmaLinux 9.4, Oracle Linux 9.5
- Note: All Plans deliver identical Docker-based app runtime and Websoft9 panel
- Pricing: Can be identical OR add premium for enterprise-grade OS (e.g., Oracle Linux +10-15%)
- Example: "[Software] on Debian 12.7", "[Software] on Ubuntu 24.04"
- Ideal for: Enterprises with OS standardization policies, teams with specific OS expertise

### 4B.3: Generate Each Tier/Variant

For each tier/variant:

**Plan ID:** 
- Strategies 1-4: `[software]-[tier]` (e.g., `wordpress-starter`, `wordpress-professional`)
- Strategy 5: `[software]-[os-shortname]` (e.g., `wordpress-debian`, `wordpress-ubuntu`)

**Plan Name:**
- Strategies 1-4: `[Software] [Tier] Plan` (e.g., "WordPress Starter Plan")
- Strategy 5: `[Software] on [OS Name]` (e.g., "WordPress on Debian 12.7")
- For mid-tier plan (strategies 1-4): Consider adding "Recommended" or "Most Popular" marker

**Plan Summary:** (within 100 chars, apply safe claims if numeric)
- Strategies 1-4 examples:
  * Starter: "Entry-level - 2vCPU/4GB - Ideal for personal blogs (<10K visits/month)"
  * Professional: "Recommended - 4vCPU/8GB + Redis - Business sites (10K-50K visits/month)"
  * Enterprise: "High-performance - 8vCPU/16GB + CDN - E-commerce & publishers (50K+ visits)"
- Strategy 5 example: "[Software] on [OS Name] with Docker runtime and Websoft9 management"

**Plan Description: LOAD HTML TEMPLATE AND REPLACE PLACEHOLDERS:**

**FOR STRATEGIES 1-4 (Scale/Use Case/Service/Hybrid):**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-plan-single-product-tier.html`

2. **Collect placeholder values:**
   - `[VCPU]`: vCPU count
   - `[RAM]`: RAM in GB
   - `[STORAGE]`: Storage in GB
   - `[FEATURE_1_TITLE]` and `[FEATURE_1_DESC]`: First key feature
   - `[FEATURE_2_TITLE]` and `[FEATURE_2_DESC]`: Second key feature
   - `[SERVICE_LEVEL_TITLE]` and `[SERVICE_LEVEL_DESC]`: Service level description
   - `[USE_CASES]`: Specific use cases and user personas
   - `[CAPACITY_CLAIM]`: Safe performance claims with qualifiers
   - `[RECOMMENDED_TAG]`: For mid-tier, add "<p><i>This is our most popular plan...</i></p>", else leave empty

3. **Replace ALL placeholders** in template

4. **Present final HTML**

**FOR STRATEGY 5 (OS-Based Plans):**

1. **Load:** `{project-root}/_bmad/cis/agents/custom/azure-product-architect-data/html-plan-single-product-os-based.html`

2. **Collect placeholder values:**
   - `[OS_NAME_AND_VERSION]`: Full OS name with version and key benefit
   - `[SOFTWARE]`: Software name
   - `[DEFAULT_SPECS]`: Default VM specs (e.g., "4 vCPU, 8GB RAM, 100GB Storage")
   - `[OS_SPECIFIC_USE_CASES]`: Use cases specific to OS choice

3. **Replace ALL placeholders** in template

4. **Present final HTML**

### 4B.4: Pricing Psychology Guidance

Include in output:

**For Strategies 1-4:**
- **Entry-level (tier 1):** Price to reduce barrier ($39-59/month range) - Attracts price-sensitive users
- **Mid-tier (tier 2):** Mark as "Recommended" or "Most Popular" - Highest margin, 60-70% of buyers choose this ($99-149/month range)
- **Premium (tier 3):** High anchor price to make mid-tier feel like better value ($249-399/month range)
- **Price ratio:** Aim for ~2-3x between tiers (not linear) to maximize perceived value jumps

**For Strategy 5 (OS-Based):**
- **Debian/Ubuntu:** Standard pricing (baseline, e.g., $79-99/month)
- **AlmaLinux:** Same as Debian/Ubuntu (community-supported, RHEL-compatible)
- **Oracle Linux:** Can add 10-15% premium if targeting Oracle ecosystem buyers (e.g., $89-109/month)
- Note: Technical delivery is identical - pricing differentiation is based on perceived enterprise value
- Consider offering all OS variants at same price to simplify choice (let users pick by preference, not price)

### 4B.5: Output Format

Present as table with Plan ID, Plan Name, Plan Summary, and full Plan Description for each tier.

---

## Step 5: Output Formatting for Partner Center

### 5.1: HTML Validation

- Only use approved tags: `<b>`, `<i>`, `<br>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<h1>`-`<h6>`
- Ensure all tags have proper opening/closing (except `<br>`)

### 5.2: Present Final Output

Present final output with clear section:

```
✅ Ready for Partner Center (copy below):
```

Add reminder note: "This content uses only Azure Marketplace-approved HTML and can be pasted directly into Partner Center Plan fields."

### 5.3: Save Output

Save generated Plans table to `{project-root}/specs/output/[offer-name]-plans.md`

Confirm file saved location to user.

---

## Output

Complete Plan specifications with safe numeric claims and Partner Center-ready formatting.
