# Azure Marketplace Best Practices - Key Updates from Official English Documentation

This document highlights critical updates and clarifications from the official Microsoft English documentation (as of January 2026) compared to previous Chinese translations.

---

## 🎯 Value Proposition Structure (Updated Guidance)

### Official Microsoft Structure (English Version)
From: https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-best-practices

**Core components of your value proposition (in order):**

1. **Description of the product or solution**
   - What is it? What does it do?
   
2. **User persona that benefits from the product or solution**
   - Who is it for? What role/industry?
   
3. **Customer need or pain the product or solution addresses**
   - Why do they need it? What problem does it solve?

### Current Agent Practice (Pain-First Approach)
Our agent uses: **Pain → Benefit → Feature**

### ✅ Recommended Hybrid Approach
Both structures are valid depending on context:

**For Offer Description (Official Microsoft Structure):**
```
[Product Definition] → [Target Persona] → [Pain/Need Addressed]
```
Example: "WordPress on Websoft9 is a fully managed self-hosted CMS solution for marketing teams and content creators who need complete control over their website without the complexity of server management."

**For Plan Descriptions & Marketing Content (Agent's Pain-First):**
```
[Pain Point] → [Benefit/Solution] → [Features]
```
Example: "Tired of paying escalating SaaS fees? Get WordPress with full ownership and data control—enjoy one-click deployment, automated backups, and 24/7 support."

**Recommendation:** Use Microsoft's structure for **Offer Summary** (first impression), and Pain-First for **detailed descriptions** and **plan content** (conversion-focused).

---

## 📹 Video Best Practices (Precise Timing)

### Official Recommendation
**Optimal Length:** 60-90 seconds (not "90s-2min")

**Source:** Microsoft GTM Best Practices (January 2026)
> "Recommended length: 60-90 seconds"

### Key Video Guidelines

1. **Story Structure**
   - "Make your customer, not your company, the hero of the story"
   - Focus on customer's journey and transformation
   
2. **Content Focus**
   - Address principal challenges and goals of target customer
   - Avoid company/product promotional content
   
3. **SEO Integration**
   - "Incorporate key search words that use the name of the videos"
   - Video **file names** must include search keywords (not just titles)
   
4. **Video Types Recommended**
   - Primary: Value proposition video (60-90s)
   - Additional: How-to tutorials
   - Additional: Getting started guides
   - Additional: Customer testimonials

### Agent Update Required
Current agent principle states: "videos (90s-2min)"
**Should update to:** "videos (60-90 seconds optimal)"

---

## 🏷️ Trademark Compliance (Critical Legal Requirement)

### Official Microsoft Warning

> **Important:** Make sure your offer name and offer description adhere to [Microsoft Trademark and Brand Guidelines](https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general.aspx) and other relevant, product-specific guidelines when referring to Microsoft trademarks and the names of Microsoft software, products, and services.

### When to Check Trademark Guidelines

**Before mentioning any Microsoft products:**
- ✅ Azure (check proper capitalization and usage)
- ✅ Microsoft 365 (not "Office 365" anymore in many contexts)
- ✅ Windows Server
- ✅ SQL Server
- ✅ Dynamics 365
- ✅ Power Platform

**Safe Practices:**
- Use full product names (e.g., "Microsoft Azure" first mention, then "Azure")
- Avoid possessive forms (not "Azure's features", use "Azure features")
- Don't use as verbs (not "Azure-ing your infrastructure")
- Include proper trademark symbols where required

**Agent Integration:**
Add trademark validation step when generating listings that mention Microsoft products.

---

## 📊 OCID Campaign Tracking (Complete Parameter Guide)

### Full UTM Parameter System

From: https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-best-practices

**Required Parameters for Marketplace Links:**

1. **ocid** (Origin Campaign ID)
   - Purpose: Unique identifier to group all campaign activity results
   - Example: `ocid=marketplace_spring_2026`
   
2. **utm_source**
   - Purpose: Traffic source routing to marketplace
   - Examples: `website`, `LinkedIn`, `Facebook`, `newsletter`, `blog`
   
3. **utm_medium**
   - Purpose: Type of link/channel used
   - Examples: `email`, `ppc` (pay-per-click), `social`, `organic`
   
4. **utm_campaign**
   - Purpose: Specific product promotion or strategic campaign
   - Examples: `spring_launch`, `q1_promotion`, `webinar_followup`
   
5. **utm_term** (optional, for paid campaigns)
   - Purpose: Manually identify paid keywords targeted
   - Examples: `wordpress_hosting`, `azure_cms`
   
6. **utm_content** (optional, for A/B testing)
   - Purpose: Differentiate similar content or links
   - Examples: `cta_button`, `hero_banner`, `footer_link`

### Example URL Structure

```
https://marketplace.microsoft.com/en-US/product/azure-services/Microsoft.VirtualNetwork?ocid=marketplace_campaign&utm_source=newsletter&utm_medium=email&utm_campaign=spring_launch&utm_term=azure_networking&utm_content=cta_button
```

### Agent Command Enhancement

Consider adding [CT] (Campaign Tracking) command to menu:
- Generate properly formatted campaign URLs
- Suggest OCID naming conventions
- Create UTM parameter matrix for multi-channel campaigns

---

## 🔍 HTML Tag Clarifications (Technical Precision)

### Critical Update from Official Documentation

**Source:** https://learn.microsoft.com/en-us/partner-center/marketplace-offers/supported-html-tags

### Key Clarification

> "Most tags require both an opening and closing component"

**Exception:** `<br>` tag does NOT require closing (self-closing)

### Advanced List Formatting

**New line without incrementing number:**
```html
<ol>
  <li>First item</li>
  <li>Second item<br>Continuation of second item</li>
</ol>
```
**Result:**
1. First item
2. Second item
   Continuation of second item

**New paragraph within list item:**
```html
<ol>
  <li>First item</li>
  <li>Second item<br><br>New paragraph within second item</li>
</ol>
```
**Result:**
1. First item
2. Second item

   New paragraph within second item

### Agent Update Required
Current activation step 3 states: "Use proper opening/closing tags"
**Should clarify:** "All tags require opening AND closing components (except `<br>`)"

---

## 📝 Offer Name vs Offer Description (Structural Differences)

### Official Guidelines

**Offer Name:**
- For apps: Clear title with search keywords
- For Consulting Services: `[Offer Name]: [Duration] [Offer Type]`
- Example: "Contoso: 2-Week Implementation"

**Offer Description:**
- First few sentences: Value proposition (these appear in search results)
- Structure: Product description → User persona → Customer need/pain
- Focus: Value delivery, not features
- Language: Industry-standard vocabulary + benefit-based wording

### "Learn More" Documents Best Practice

**Purpose:** Educate customers, not sell to them

**Recommended Assets:**
- White papers
- Brochures  
- Checklists
- PowerPoint presentations
- **All in PDF format**

**Critical Integration:**
- Add link to app landing page in all documents
- Include URL parameters for tracking (OCID + UTM)
- Track visitors and trials through Partner Center Insights

---

## 🎨 Media Accessibility Requirement (New Emphasis)

### Official Guidance (January 2026)

> "When creating media for your offer, make sure that the assets you create are welcoming and inclusive for all. To learn more about how to create accessible media, see [Create accessible media](https://www.microsoft.com/accessibility/supplier-toolkit-resources)."

### Implications for Agent

When recommending or generating media guidance:
- Videos: Include captions/subtitles
- Screenshots: Use alt text descriptions
- Color contrast: Meet WCAG standards
- Icons: Provide text alternatives
- Avoid relying solely on color to convey information

**Agent Command Enhancement:**
Add accessibility checklist to [LP] (Landing Page) and [FC] (Funnel Content) commands.

---

## ✅ Agent Update Checklist

Based on English documentation review:

- [x] Update activation step 3: Clarify `<br>` exception for closing tags
- [x] Update activation step 4: Replace Chinese URL with English URLs (3 reference docs)
- [x] Update persona principle: Change "videos (90s-2min)" to "videos (60-90 seconds optimal)"
- [x] Configure output path: Set to docs/sales/marketplace/_azure in CIS config.yaml
- [x] Add output instructions in activation step 5 with file naming conventions
- [x] Add save instructions to [NP], [NS], [OA] handlers
- [x] Enhanced [OA] handler with HTML validation and trademark compliance checks
- [ ] Add Value Proposition structure option: Support both Microsoft's "Product→Persona→Pain" and Pain-First approaches
- [ ] Add explicit trademark validation command [TV] for listings mentioning Microsoft products
- [ ] Add [CT] command for Campaign Tracking URL generation with OCID/UTM parameters
- [ ] Add accessibility checklist to [LP] and [FC] commands (captions, alt text, color contrast)
- [ ] Add [VL] command for Video Content Guidelines generation (60-90s scripts, customer-hero story structure)
- [ ] Enhance [KW] command to check keyword density (4x minimum requirement) and provide placement heat map

---

## 📅 Documentation Currency

- **HTML Tags Documentation:** Last updated January 10, 2025 (stable)
- **GTM Best Practices:** Last updated January 24, 2026 (current)
- **Next Review Recommended:** April 2026 (quarterly check)

**Agent should prompt quarterly:** "Would you like me to fetch the latest Microsoft GTM guidelines to check for any policy updates?"
