---
name: lp-landing-page
description: Generate high-conversion landing page content
---

# LP Workflow: Generate Landing Page Content

**Goal:** Create conversion-optimized landing page content that replaces generic corporate homepage with buyer-focused journey.

---

## Step 1: Product Context

Ask user for:
- **Product name:** (e.g., WordPress, AI Workflow Suite)
- **Target audience:** (e.g., DevOps teams, e-commerce businesses)
- **Primary value proposition:** (e.g., reduce ops time, eliminate tool sprawl)
- **Key differentiators:** (vs competitors or alternative solutions)

---

## Step 2: Landing Page Structure

Generate high-conversion landing page with following structure:

### Hero Section (Above the Fold):
**Components:**
- **Headline:** Value proposition early (3-second clarity test)
- **Subheadline:** Elaboration with quantified benefit (using safe claims)
- **Primary CTA:** Clear action button ("Deploy Now", "Start Evaluation", "See Plans")
- **Hero image/video:** Product screenshot or 60-90 sec demo video

**Example:**
```
[Headline] Deploy WordPress in Minutes with Full Control
[Subheadline] Self-hosted WordPress on Azure with automated backups, 
99.9% uptime, and expert support. Reduce ops time by up to 10 hours/week.
[CTA Button] View Plans →
```

### Pain Points Section:
**Structure:** Present value proposition early, list 1-3 core pain points with solutions

**Format:**
```html
<h2>Are you struggling with [pain context]?</h2>

<div class="pain-solution">
  <div class="pain">
    <h3>❌ Pain Point 1</h3>
    <p>[Specific challenge]</p>
  </div>
  <div class="solution">
    <h3>✅ Solution</h3>
    <p>[How product solves it]</p>
  </div>
</div>
```

Repeat for 2-3 most critical pain points.

### Benefits Section:
**Focus:** Follow Pain → Benefit → Feature structure

**Include:**
- **For IT teams:** Technical benefits (ease of deployment, integration capabilities)
- **For business leaders:** ROI benefits (cost savings, operational efficiency)
- **For procurement:** Compliance benefits (security, SLA, billing transparency)

### Social Proof Section:
**Components:**
- **Customer logos:** 6-8 recognizable brands if available
- **Case studies:** 2-3 one-page customer profiles with quantified outcomes
- **Testimonials:** 3-4 customer quotes with names, titles, companies
- **Metrics:** "Trusted by X companies", "X deployments", "X% customer satisfaction"

**Note:** If actual customer stories unavailable, use industry-anonymized examples: "A Fortune 500 retailer...", "A mid-size SaaS company..."

### Feature Highlights:
**Visual format:** Icons + brief descriptions (4-6 key features)

**Example:**
- ⚡ **One-Click Deployment** - Production-ready in minutes
- 🔒 **Enterprise Security** - SOC 2, GDPR compliant
- 📊 **Unified Management** - Control panel for all operations
- 💾 **Automated Backups** - Daily backups to Azure Storage

### Plans/Pricing Section:
**Structure:** 3-tier comparison table (Starter, Business, Enterprise)

**Include:**
- Plan names with tier positioning
- Key resource specs (vCPU, RAM)
- Differentiating features per tier
- Primary CTA button per plan

**Pricing psychology:**
- Highlight mid-tier as "Recommended" or "Most Popular"
- Use anchor pricing (premium tier makes mid-tier feel valuable)

### Resources Section:
**Embed:**
- **Demo video:** 60-90 second walkthrough
- **Screenshots:** 4-6 key interface views
- **Documentation link:** Getting started guide
- **Blog/case studies:** Related content for deeper research

### FAQ Section:
**Address common objections:**
- "How is this different from [competitor/alternative]?"
- "What if I need to migrate later?"
- "What level of Azure expertise do I need?"
- "How long does deployment take?"
- "What support options are included?"

### Final CTA Section:
**Structure:**
- **Headline:** Action-oriented with benefit reminder
- **Subheadline:** Risk mitigation language
- **Primary CTA button:** "View Plans", "Deploy Now", "Contact Sales"
- **Secondary CTA:** "Watch Demo", "Read Case Studies"

**Example:**
```
[Headline] Ready to Deploy in Minutes?
[Subheadline] Test with your actual workflows before committing to production. 
Migration assistance available.
[Primary CTA] View Plans →
[Secondary CTA] Watch Demo ↗
```

---

## Step 3: Reduce Menu Options

**Landing page principle:** Focus on buyer journey, not company navigation.

**Recommended menu (3-5 items):**
- Solutions/Products
- Plans/Pricing
- Resources
- Contact/Support

**Remove:**
- Generic "About Us", "Company", "Careers" (move to footer)
- Unrelated product lines (focus on specific offer)

---

## Step 4: Multi-Touchpoint Integration

Design for traffic loop: **Marketplace → Landing Page → LinkedIn → YouTube**

### Cross-references:
- **Landing page links to:** Azure Marketplace listing, demo videos, case studies
- **Marketplace links to:** Landing page, documentation, support
- **Social media links to:** Landing page, video content
- **Email campaigns link to:** Landing page specific sections (e.g., #pricing, #case-studies)

### UTM tracking:
- Add UTM parameters to all external links for traffic analysis
- Example: `?utm_source=azure-marketplace&utm_medium=offer-listing&utm_campaign=wordpress-launch`

---

## Step 5: Visual Content Recommendations

### Video Requirements:
- **Length:** 60-90 seconds optimal
- **Format:** 1280x720 resolution minimum
- **Content:** Product walkthrough, deployment demo, customer testimonial
- **Thumbnail:** Include product logo + keyword overlay

### Screenshot Requirements:
- **Count:** 4-6 key screens
- **Quality:** High-resolution, clean UI
- **Annotations:** Highlight key features with callouts
- **Sequence:** Follow user journey (deployment → configuration → management)

### Case Study Format:
- **One-page profile:** Company context, challenge, solution, results
- **Quantified outcomes:** "Reduced deployment time from 2 days to 30 minutes"
- **Industry context:** Anonymized if needed ("A Fortune 500 retailer...")

---

## Step 6: Output Format

Present landing page content in structured markdown with HTML sections ready for web development.

Include:
- All section content
- CTA button copy
- Recommended visual placeholders
- UTM tracking suggestions

---

## Step 7: Save Output

Save generated landing page content to `{project-root}/specs/output/[product-name]-landing-page.md`

Confirm file saved location to user.

---

## Output

Complete landing page content following Pain → Benefit → Feature structure, with conversion-optimized CTAs, social proof, and multi-touchpoint integration strategy.
