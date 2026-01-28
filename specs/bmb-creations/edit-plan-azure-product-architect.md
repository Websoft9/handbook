---
mode: edit
originalAgent: '_bmad/cis/agents/custom/azure-product-architect.md'
agentName: 'azure-product-architect'
agentType: 'module'
editSessionDate: '2026-01-28'
editCompleted: true
editCompletedTime: '2026-01-28'
stepsCompleted:
  - e-01-load-existing.md
  - e-02-discover-edits.md
  - e-04-type-metadata.md
  - e-05-persona.md
  - e-06-commands-menu.md
  - e-07-activation.md
  - e-08c-edit-module.md
---

# Edit Plan: azure-product-architect

## Original Agent Snapshot

**File:** _bmad/cis/agents/custom/azure-product-architect.md
**Type:** module (CIS)
**Version:** 1.0.0
**Has Sidecar:** false

### Current Persona

**Role:** Full-stack Azure Marketplace Growth Architect specialized in conversion-optimized copywriting. Expert in "Software Supermarket" strategy (Category Suites + App SKUs), funnel-aware content design (visitor → trial → paid conversion), B2B copywriting, trademark compliance, SEO optimization, and data-driven listing optimization for Azure Marketplace & AppSource.

**Identity:** A seasoned marketplace strategist who has mastered the intersection of product management, conversion copywriting, growth marketing, and data analytics. Background spans SKU architecture, funnel optimization, and performance-driven content creation for Azure Marketplace & AppSource. Relentlessly customer-centric and obsessed with "User Confirmation" — if users can't grasp value in 3 seconds, the copy has failed.

**Communication Style:** Direct, professional, and structured with the precision of a conversion copywriter, insight of a data analyst, and patience of an educator. Uses marketing frameworks fluently. Speaks in metrics and benchmarks to validate recommendations. Always explains the strategic "Why" with supporting data and provides actionable next steps.

**Principles:** 8 detailed principles covering Azure Marketplace optimization, platform constraints, Software Supermarket strategy, content structure, B2B messaging, plan structure, enterprise trust signals, SEO optimization, and educational content.

### Current Commands

1. [MH] Redisplay Menu Help
2. [CH] Chat with the Agent about anything
3. [NP] Generate a new Azure Marketplace Offer (Category Suite or Single Product)
4. [NS] Generate distinct Plan specifications for apps within an Offer
5. [OA] Review an existing listing description and optimize it with "Software Supermarket" principles
6. [KW] Conduct SEO keyword research and placement strategy
7. [LP] Generate high-conversion landing page content
8. [TP] Design trial program strategy (Free Trial vs Freemium)
9. [PK] Design pricing packages with conversion optimization
10. [FC] Map content strategy across conversion funnel
11. [EA] Generate trial nurture email sequence (7-step)
12. [DA] Dismiss Agent

### Current Menu Handlers

- NP → np-generate-offer.md
- NS → ns-generate-plans.md
- OA → oa-optimize-listing.md
- KW → kw-keyword-research.md
- LP → lp-landing-page.md
- TP → tp-trial-plan.md
- PK → pk-pricing-package.md
- FC → fc-funnel-content.md
- EA → ea-email-nurture.md

### Current Metadata

- name: azure-product-architect
- description: Azure Marketplace Growth Architect
- module: cis
- hasSidecar: false
- version: 1.0.0

---

## Edits Planned

### 🆕 NEW EDITS - Session 2 (2026-01-28 继续)

#### Workflow Edits - [NP] Generate New Offer Enhancement

**1. GitHub Stars Real-Time Verification** ⭐
- [ ] In Top N Analysis step, ensure ALL GitHub stars data is verified via actual API calls
- [ ] Implement: `curl -s https://api.github.com/repos/[owner]/[repo] | jq '.stargazers_count'`
- [ ] Replace any LLM-inferred star counts with real-time API results
- [ ] Add error handling for API failures (rate limits, repo not found)
- [ ] Display verification timestamp with each GitHub stars result

**2. Standardize Output File Naming** 📁
- [ ] Update all NP workflow file outputs to use consistent naming pattern:
  - `[catalog_name]-suite-offer-listing.md` (main offer listing content)
  - `[catalog_name]-top-analysis.md` (Top N app analysis report)
  - `[catalog_name]-plans.md` (individual plan specifications)
- [ ] Replace previous variable naming patterns with this standard
- [ ] Update workflow step instructions to use new naming convention
- [ ] Ensure [catalog_name] uses kebab-case format

**3. Title A/B/C Testing Options** 🎯
- [ ] Modify offer listing Title generation to produce 3 variants:
  - **Title Option A**: [specific strategy/approach]
  - **Title Option B**: [specific strategy/approach]
  - **Title Option C**: [specific strategy/approach]
- [ ] Each variant should follow different optimization strategies (e.g., keyword-heavy vs brand-focused vs benefit-driven)
- [ ] Include brief rationale for each Title variant
- [ ] Present all 3 options to user with recommendation
- [ ] Allow user to select preferred Title or request regeneration

**Target Files:**
- `_bmad/cis/workflows/azure-mk-content/np-generate-offer.md`

---

### ⚙️ PREVIOUS EDITS - Session 1 (2026-01-28 已完成)

#### Workflow Edits - [NP] Generate New Offer (Category Suite Only)

#### 1. Remove 9-App Mandatory Requirement
- [ ] Delete auto-supplement logic that forces 9 apps minimum
- [ ] Remove hardcoded validation checks for 9 apps
- [ ] Update workflow to accept flexible app counts (n ≥ 3, no upper limit)

#### 2. Add Dynamic App Quantity Input
- [ ] Add user prompt: "How many apps do you want to include in this Category Suite? (minimum 3)"
- [ ] Validate input: n ≥ 3
- [ ] Pass 'n' value to subsequent workflow steps

#### 3. Implement Top N App Evaluation System
- [ ] Create new workflow step: Generate Top N Analysis Report
  - Include dimensions: App name, description, GitHub Stars, market search volume, Azure Marketplace competition, hiring metrics (job postings), other relevant data
  - Generate comprehensive "Suitability Score" with rationale (why/why not worth selling)
  - Output to structured file: `{output_folder}/top-n-analysis-{category-name}.md`

- [ ] Create interactive evaluation loop allowing users to:
  - Review the Top N analysis
  - Replace specific apps (by index or name)
  - Reorder apps by priority
  - Add more apps (increase n)
  - Remove apps (decrease n)
  - Regenerate entire analysis
  
- [ ] Add explicit confirmation gate: "Confirm these apps to proceed to Offer Listing generation [Y/N]"
- [ ] Only proceed to offer-listing creation after user confirms

#### 4. Update Workflow File References
- [ ] File: `_bmad/cis/workflows/azure-mk-content/np-generate-offer.md`
- [ ] Add new step between app selection and listing generation
- [ ] Ensure step sequence is enforced

### Workflow Edits - Available Plans Section (All Offers)

#### 5. Implement Smart "Available Plans" Generation
- [ ] Add character budget calculation for Available Plans section
- [ ] Implement dynamic description length algorithm:
  - If 3-5 apps: 40-60 characters per app description
  - If 6-9 apps: 25-35 characters per app description  
  - If 10+ apps: 15-20 characters per app description
  
- [ ] Ensure ALL apps are listed (no truncation)
- [ ] Add validation: Total Description HTML must be ≤ 3,000 characters
- [ ] If exceeding limit, auto-compress:
  1. First: Shorten Available Plans descriptions
  2. Second: Compress other sections if still over
  
- [ ] Display character count breakdown in output showing Available Plans segment size

### Persona Edits

#### 6. Update "Software Supermarket Strategy" Principle
- [ ] Remove: "CRITICAL: If user provides <9 apps for Category Suite, auto-supplement to 9 apps using category-appropriate alternatives for SEO optimization."
- [ ] Add: "Flexible app counts (minimum 3, no upper limit) with user-controlled selection process."
- [ ] Add: "Generate data-driven Top N analysis (GitHub Stars, search volume, competition, hiring metrics) to guide app selection decisions."
- [ ] Add: "Interactive evaluation loop allows users to refine app choices before finalizing offer listings."
- [ ] Emphasize: "Available Plans section must list ALL selected apps with dynamically-adjusted description lengths to stay within 3,000-character Description limit."

**New Principle Text (APPROVED):**
```
Software Supermarket Strategy: Use Category Suites for breadth positioning with flexible 
app counts (minimum 3, no upper limit determined by user need and SEO strategy). Generate 
data-driven Top N analysis (GitHub Stars, market search volume, Azure Marketplace competition, 
hiring metrics, other relevant indicators) with comprehensive suitability scoring to guide 
app selection. Enable interactive evaluation loop where users can refine choices (replace, 
reorder, add/remove apps) before finalizing listings. In Available Plans sections, 
dynamically adjust description length based on app count (fewer apps = detailed 40-60 chars, 
more apps = concise 15-20 chars) ensuring ALL apps are listed while maintaining 3,000-character 
Description limit. Always present Value (Tools) first, Enabler (Websoft9) second. Use 
app-specific Plan names for psychological anchoring while transparently noting full catalog access.
```

**Other 7 Principles:** No changes required

### Activation Edits

#### 9. Critical Actions (NO CHANGES REQUIRED)
- No critical_actions field needed
- Existing activation steps remain unchanged

### Routing Decision

**Agent Type:** Module Agent (CIS)
- module: "cis" (not stand-alone)
- hasSidecar: false
- **Route to:** e-08c-edit-module.md
- All 12 menu items remain unchanged
- Menu descriptions remain as-is
- [NP] workflow modifications are internal to the workflow file, not menu structure

### Menu Handlers

#### 8. Verify Handler Paths
- [ ] Confirm `exec` path for [NP] command still points to correct workflow file after edits
- [ ] No changes needed to handler structure itself

---

## Edits Applied

### ✅ Agent File Edits (azure-product-architect.md)

**File:** `_bmad/cis/agents/custom/azure-product-architect.md`
**Backup:** `_bmad/cis/agents/custom/azure-product-architect.md.backup`
**Date Applied:** 2026-01-28

#### Persona Principle Updated:
- ✅ **Software Supermarket Strategy** principle completely rewritten
- ✅ Removed: "CRITICAL: If user provides <9 apps for Category Suite, auto-supplement to 9 apps"
- ✅ Added: "flexible app counts (minimum 3, no upper limit)"
- ✅ Added: "Generate data-driven Top N analysis (GitHub Stars, market search volume, Azure Marketplace competition, hiring metrics)"
- ✅ Added: "Enable interactive evaluation loop where users can refine choices (replace, reorder, add/remove apps)"
- ✅ Added: "dynamically adjust description length based on app count (fewer apps = detailed 40-60 chars, more apps = concise 15-20 chars)"
- ✅ Maintained: Other 7 principles unchanged

### ✅ Workflow File Edits (np-generate-offer.md)

**File:** `_bmad/cis/workflows/azure-mk-content/np-generate-offer.md`
**Date Applied:** 2026-01-28

#### Step 6A.1 - Information Collection:
- ✅ Removed: Hardcoded "list apps" approach
- ✅ Added: "How many apps do you want to include? (minimum 3, no upper limit)"
- ✅ Added: Validation for n ≥ 3
- ✅ Removed: All auto-supplementation logic and explanations

#### Step 6A.2 - Top N App Analysis (NEW):
- ✅ Created comprehensive data-driven analysis system
- ✅ Analyzes: App name, description, GitHub Stars, market search volume, Azure Marketplace competition, hiring demand, other relevant data
- ✅ Generates: Suitability Score (1-10) with rationale
- ✅ Outputs: Structured markdown file to `specs/output/top-n-analysis-{category-name}.md`
- ✅ Displays: Summary table for quick review

#### Step 6A.3 - Interactive Evaluation Loop (NEW):
- ✅ Created 6-option menu for app refinement
- ✅ [1] Replace specific app
- ✅ [2] Reorder apps by priority
- ✅ [3] Add more apps (increase count)
- ✅ [4] Remove apps (decrease count)
- ✅ [5] Regenerate entire analysis
- ✅ [6] Confirm and proceed
- ✅ Enforced: User MUST confirm before proceeding to listing generation

#### Step 6A.6 - Dynamic Available Plans Generation:
- ✅ Added: Algorithm for dynamic description length
  - 3-5 apps: 40-60 chars per description
  - 6-9 apps: 25-35 chars per description
  - 10+ apps: 15-20 chars per description
- ✅ Added: Character budget management for Available Plans section
- ✅ Added: Compression strategy if exceeding 3,000 char limit
- ✅ Added: Character count breakdown display
- ✅ Requirement: List ALL apps (no truncation)

#### Removed Sections:
- ✅ Deleted: Old Step 6A.2 "Data-Driven App Popularity Analysis" (replaced with new Top N system)
- ✅ Deleted: "Default Rankings" reference list (now generated dynamically)
- ✅ Deleted: All auto-supplementation examples and rationales

---

## Edit Summary

**Total Changes:** 3 major components
1. ✅ Agent Persona Principle (1 principle updated)
2. ✅ Workflow Information Collection (flexible input added)
3. ✅ Workflow Top N Analysis System (new feature added)
4. ✅ Workflow Interactive Evaluation Loop (new feature added)
5. ✅ Workflow Dynamic Available Plans (algorithm added)

**Files Modified:** 2
- `_bmad/cis/agents/custom/azure-product-architect.md`
- `_bmad/cis/workflows/azure-mk-content/np-generate-offer.md`

**Lines Changed:** ~150 lines modified/added
**Backup Created:** ✅ Yes

**Testing Recommended:**
1. Test [NP] command with 3 apps (minimum)
2. Test [NP] command with 15+ apps (upper range)
3. Verify Top N analysis file generation
4. Verify interactive evaluation loop options
5. Verify Available Plans character count management
6. Verify Description stays under 3,000 characters

---

## Edit Session Complete ✅

**Completed:** 2026-01-28
**Status:** Success

### Final State
- Agent file updated successfully
- All edits applied
- Backup preserved at: `_bmad/cis/agents/custom/azure-product-architect.md.backup`

---

## Validation Phase Starting

Proceeding to comprehensive agent validation...
