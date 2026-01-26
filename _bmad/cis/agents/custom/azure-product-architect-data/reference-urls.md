# Azure Marketplace Reference URLs

Official Microsoft documentation for runtime query during agent operation.

---

## Critical Reference Documents

### 1. HTML Tags Support (Technical Compliance)
**URL:** https://learn.microsoft.com/en-us/partner-center/marketplace-offers/supported-html-tags

**Last Updated:** January 10, 2025

**Use Cases:**
- Validating HTML compliance in offer descriptions
- Checking supported formatting tags
- Troubleshooting rejected listings due to HTML violations

**Key Info:**
- Supported tags: `<b>`, `<i>`, `<br>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<h1>`-`<h6>`
- All tags require opening AND closing components (except `<br>`)
- No CSS, JavaScript, or other HTML elements allowed

---

### 2. Go-to-Market Best Practices (Marketing Strategy)
**URL:** https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-best-practices

**Last Updated:** January 24, 2026

**Use Cases:**
- Generating offer descriptions with optimal value proposition structure
- Designing video content recommendations
- Creating campaign tracking URLs with proper OCID/UTM parameters
- Trademark compliance verification

**Key Info:**
- **Value Proposition Structure:**
  1. Describe the product/solution
  2. Identify user persona who benefits
  3. Address customer need/pain
- **Video Best Practices:**
  - Length: 60-90 seconds optimal
  - Include search keywords in video file names
  - "Make customer the hero, not your company"
- **Campaign Tracking Parameters:**
  - `ocid`: Unique campaign identifier
  - `utm_source`: Traffic source (website, LinkedIn, Facebook)
  - `utm_medium`: Link type (email, PPC)
  - `utm_campaign`: Specific product promotion
  - `utm_term`: Paid keywords
  - `utm_content`: Content source

---

### 3. Microsoft Trademark Guidelines (Legal Compliance)
**URL:** https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general.aspx

**Use Cases:**
- Verifying proper usage of Microsoft trademarks
- Checking brand name compliance before submission
- Understanding restrictions when mentioning Azure, Microsoft 365, Windows, etc.

**Critical Rule:**
> "Make sure your offer name and offer description adhere to Microsoft Trademark and Brand Guidelines and other relevant, product-specific guidelines when referring to Microsoft trademarks and the names of Microsoft software, products, and services."

---

### 4. Microsoft Marketplace Best Practices Guide (Comprehensive PDF)
**URL:** https://aka.ms/marketplacebestpracticesguide

**Use Cases:**
- Deep-dive research on specific optimization topics
- Complete marketing strategy planning
- Trial conversion optimization tactics
- Funnel-aware content design

**Key Topics:**
- Trial conversion strategies (Free Trial vs Freemium)
- Pricing psychology (3-tier package design)
- Content funnel mapping (Visitor → Trial → Paid)
- Email nurture sequences (7-step, 14-day cycle)

---

## Runtime Query Strategy

### When to Fetch Online vs Use Local Memory

**Fetch Online (Real-time Query):**
- ✅ User explicitly requests "latest" or "most recent" guidance
- ✅ Checking for policy changes or updated compliance requirements
- ✅ Validating specific HTML tag support edge cases
- ✅ Confirming trademark usage rules for specific Microsoft products

**Use Local Memory (Faster, Offline):**
- ✅ Generating standard offer/plan content (templates available)
- ✅ Applying established best practices (Pain → Benefit → Feature)
- ✅ HTML tag validation for common tags
- ✅ Structured content generation (Title, Summary, Description)

---

## Agent Integration

### Critical Actions Update (Recommended)

Current Step 4 in activation:
> "NOTE: During conversation, user can request me to fetch latest Microsoft GTM best practices from https://learn.microsoft.com/zh-cn/partner-center/marketplace-offers/gtm-best-practices for real-time guidance on specific topics."

**Recommended Update:**
```xml
<step n="4">RUNTIME QUERY CAPABILITY: User can request real-time fetches from official Microsoft documentation:
  - GTM Best Practices: https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-best-practices
  - HTML Tags Support: https://learn.microsoft.com/en-us/partner-center/marketplace-offers/supported-html-tags
  - Trademark Guidelines: https://www.microsoft.com/legal/intellectualproperty/trademarks/usage/general.aspx
  Use when user explicitly asks for "latest guidelines" or to verify recent policy changes.</step>
```

---

## Update Frequency

Based on "Last Updated" timestamps:
- **HTML Tags:** January 10, 2025 (stable, rarely changes)
- **GTM Best Practices:** January 24, 2026 (updated frequently, check quarterly)
- **Trademark Guidelines:** Updated as needed (check before major submissions)

**Recommendation:** Agent should check these URLs once per quarter or when user mentions policy concerns.
