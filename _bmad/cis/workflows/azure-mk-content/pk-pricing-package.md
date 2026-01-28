---
name: pk-pricing-package
description: Design pricing packages with conversion optimization psychology
---

# PK Workflow: Design Pricing Packages

**Goal:** Design 3-4 tiered pricing packages optimized for conversion psychology and revenue maximization.

---

## Step 1: Product Context

Ask user for:
- **Product name:** (e.g., WordPress, AI Workflow Suite)
- **Cost structure:** (Fixed VM costs / Variable usage costs / Hybrid)
- **Target market:** (SMB / Mid-market / Enterprise / All)
- **Competitive pricing:** (What are competitors charging?)
- **Value differentiation:** (What justifies premium pricing?)

---

## Step 2: Pricing Psychology Framework

### 3-Tier Pricing Model (RECOMMENDED)

Most effective structure for conversion optimization:

**Tier 1: Entry-Level ("Starter" / "Basic")**
- **Purpose:** Reduce barriers to entry, attract price-sensitive customers
- **Psychology:** Lower friction for first purchase
- **Pricing:** $39-79/month range for VM-based solutions
- **Target:** Individuals, small businesses, dev/test environments

**Tier 2: Mid-Tier ("Business" / "Professional") - RECOMMENDED TAG**
- **Purpose:** Highest margin, most conversions (60-70% choose this)
- **Psychology:** Goldilocks effect - "just right" between cheap and expensive
- **Pricing:** $99-199/month range (2-3x entry-level)
- **Target:** Growing businesses, production workloads, primary use case
- **Visual cue:** Mark as "Recommended" or "Most Popular" in Partner Center

**Tier 3: Premium ("Enterprise" / "Premium")**
- **Purpose:** Anchor pricing to make mid-tier feel like better value
- **Psychology:** High price point enhances perceived value of mid-tier
- **Pricing:** $249-499/month range (2.5-5x entry-level)
- **Target:** High-traffic, mission-critical, enterprises
- **Note:** Even if few customers choose this, it boosts mid-tier conversions

**Price Ratio Guidelines:**
- ❌ **Linear pricing:** $50 → $100 → $150 (poor value perception)
- ✅ **Exponential gaps:** $49 → $149 → $399 (clear value jumps)
- **Optimal ratio:** 2-3x between adjacent tiers

---

## Step 3: Package Differentiation Strategies

### Strategy 1: By Resources (VM Specs)
**Differentiate by:** vCPU, RAM, Storage, Bandwidth

**Example:**
- **Starter:** 2 vCPU, 4GB RAM, 50GB storage → $49/mo
- **Business:** 4 vCPU, 16GB RAM, 200GB storage → $149/mo
- **Enterprise:** 8 vCPU, 32GB RAM, 500GB storage → $399/mo

**Best for:** Infrastructure products where resource consumption correlates with value

---

### Strategy 2: By Features
**Differentiate by:** Available functionality, integrations, advanced capabilities

**Example:**
- **Starter:** Basic features, community support
- **Business:** Advanced features (Redis caching, CDN integration), priority support
- **Enterprise:** All features + premium add-ons (WAF, advanced monitoring), dedicated support

**Best for:** SaaS-like products where features drive value perception

---

### Strategy 3: By Service Level
**Differentiate by:** Support quality, SLA, managed services

**Example:**
- **Starter:** Email support (24h response), 99.5% uptime, self-managed backups
- **Business:** Email + chat support (4h response), 99.9% uptime, automated backups
- **Enterprise:** Phone + email + chat (1h response), 99.99% uptime, fully-managed operations

**Best for:** Products where operational support is major value driver

---

### Strategy 4: Hybrid (RECOMMENDED)
**Differentiate by:** Combination of resources + features + service level

**Example:**
- **Starter:** 2 vCPU + basic features + email support → $49/mo
- **Business:** 4 vCPU + advanced features + priority support (RECOMMENDED) → $149/mo
- **Enterprise:** 8 vCPU + all features + dedicated support → $399/mo

**Best for:** Most self-hosted solutions - creates strongest value perception

---

## Step 4: Billing Models

### Pay-As-You-Go (PAYG)
- **Structure:** Monthly billing, VM runtime charges
- **Customer benefit:** Flexibility, no long-term commitment
- **Revenue model:** Azure Marketplace handles billing (97% publisher / 3% Microsoft)
- **Best for:** Most Azure Marketplace offers

### Bring Your Own License (BYOL)
- **Structure:** Customer owns software license, pays only for VM infrastructure
- **Customer benefit:** Use existing licenses, lower Azure costs
- **Revenue model:** Customer purchases license separately from publisher
- **Best for:** Enterprise software with existing license programs

### Per-User Pricing
- **Structure:** Price per active user account
- **Customer benefit:** Scales with team size
- **Revenue model:** Monthly billing based on user count
- **Best for:** Collaboration tools, multi-user applications

### Usage-Based Pricing
- **Structure:** Charge based on consumption (API calls, storage, bandwidth)
- **Customer benefit:** Pay only for actual usage
- **Revenue model:** Variable monthly billing
- **Best for:** API services, data processing tools

### Hybrid Pricing (RECOMMENDED for Azure)
- **Structure:** Base VM cost + optional usage-based add-ons
- **Customer benefit:** Predictable base cost with flexibility for growth
- **Revenue model:** PAYG for VM + metered billing for add-ons
- **Best for:** Self-hosted solutions with variable usage patterns

**Note:** Azure Marketplace revenue share is 97% publisher / 3% Microsoft for transactable offers.

---

## Step 5: Total Cost of Ownership (TCO) Positioning

Help customers understand full cost picture:

### TCO Components:
1. **Software licensing:** (If applicable, or "included" for open-source)
2. **Azure infrastructure:** VM, storage, network costs
3. **Operational overhead:** Time spent on maintenance, updates, backups
4. **Support costs:** Level of support included vs add-on

### Self-Hosted vs SaaS TCO Comparison:

Present TCO analysis to justify pricing:

**Example:**
```
SaaS Alternative (e.g., WordPress.com Premium):
- Software subscription: $300/month
- Limited customization, vendor lock-in
- Surprise price increases common
**Total:** $300/month + risk factors

Self-Hosted with Websoft9:
- Azure VM: $100/month (predictable)
- Websoft9 management: $49/month
- Full control, unlimited customization, data sovereignty
**Total:** $149/month + autonomy benefits

**TCO Savings:** 40-50% vs SaaS + control benefits
```

**Messaging:**
- "Reduce total software costs by 40-60% vs SaaS subscriptions"
- "Predictable Azure billing with no surprise license increases"
- "Full control and data sovereignty at fraction of SaaS cost"

---

## Step 6: Pricing Page Design Recommendations

### Display Format:
**3-column comparison table:**
```
[Starter]     [Business - RECOMMENDED]     [Enterprise]
  $49/mo           $149/mo                    $399/mo
```

### Visual Cues:
- **Highlight mid-tier:** Different background color, "RECOMMENDED" badge
- **Feature checkmarks:** ✓ included, ✗ not included, "Add-on" for optional
- **CTA buttons:** "Get Started" on all tiers, primary color on mid-tier

### Include for Each Tier:
- **Monthly price:** Clear, large font
- **Top 3-5 differentiating features:** Most important first
- **Resource specs:** vCPU, RAM, Storage
- **Support level:** Response time, channels
- **Use case recommendation:** "Ideal for [target audience]"

### Psychology Tips:
- **Anchor with Enterprise:** High price makes Business feel affordable
- **Mid-tier emphasis:** Visual prominence drives 60-70% to choose Business
- **Annual discount:** Offer 10-20% discount for annual commitment (if applicable)

---

## Step 7: Conversion Optimization Tactics

### Reduce Decision Friction:
- ✅ **Clear differentiation:** Obvious why each tier exists
- ✅ **Guidance:** "Most customers choose Business" label
- ✅ **Calculator tool:** Help users estimate their tier based on workload
- ❌ **Too many options:** Limit to 3-4 tiers max

### Risk Mitigation:
- **Validation language:** "Test in your environment before committing"
- **Flexible plans:** "Upgrade or downgrade anytime"
- **Migration support:** "Free migration assistance available"

### Urgency (Use Sparingly):
- **Limited-time discounts:** Only for launches or special campaigns
- **Trial expiration:** Natural urgency if coming from trial

---

## Step 8: Azure Private Offers & MACC

Educate user on enterprise pricing options:

### Azure Private Offers:
- **What:** Custom pricing negotiated directly with customer
- **When:** Enterprise deals, volume discounts, multi-year commitments
- **How:** Configure in Partner Center after agreement with customer
- **Benefit:** Flexibility for large accounts, competitive differentiation

### Microsoft Azure Consumption Commitment (MACC):
- **What:** Customers pre-commit to Azure spend, need to consume it
- **Benefit:** Your offer counts toward their MACC, making it "free" from their perspective
- **Marketing angle:** "This purchase applies to your Azure commitment"

**Recommendation:** Mention MACC compatibility in listing: "Eligible for Microsoft Azure Consumption Commitment (MACC) benefits"

---

## Step 9: Output Package Design

Present complete pricing structure with:

### Package Overview Table:
| Tier | Price | vCPU/RAM | Key Features | Support | Target Audience |
|------|-------|----------|--------------|---------|-----------------|
| Starter | $49/mo | 2/4GB | Basic features | Email 24h | Small sites |
| Business | $149/mo | 4/16GB | Advanced + caching | Priority 4h | Growing business |
| Enterprise | $399/mo | 8/32GB | All + premium | Dedicated 1h | High-traffic |

### Differentiation Summary:
- **Resources:** [How specs progress across tiers]
- **Features:** [What's added at each level]
- **Support:** [How support improves]

### Pricing Psychology Notes:
- **Conversion target:** 60-70% choose mid-tier (Business)
- **Price anchoring:** Enterprise tier boosts Business appeal
- **TCO positioning:** [Self-hosted vs SaaS comparison]

### Billing Model Recommendation:
- **Primary:** [PAYG / BYOL / Per-User / Usage-Based / Hybrid]
- **Rationale:** [Why this model fits product]

---

## Step 10: Save Output

Save pricing package design to `{project-root}/specs/output/[product-name]-pricing-packages.md`

Confirm file saved location to user.

---

## Output

Complete pricing package structure with 3-4 tier definitions, conversion psychology application, TCO positioning, and Azure-specific billing guidance.
