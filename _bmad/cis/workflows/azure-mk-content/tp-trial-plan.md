---
name: tp-trial-plan
description: Design trial program strategy (Free Trial vs Freemium)
---

# TP Workflow: Design Trial Program Strategy

**Goal:** Design optimal trial program strategy comparing Free Trial vs Freemium models based on solution characteristics.

---

## Step 1: Product Context

Ask user for:
- **Product name:** (e.g., WordPress, AI Workflow Suite)
- **Product complexity:** (Simple config / Moderate setup / Complex implementation)
- **Time-to-value:** (Minutes / Hours / Days / Weeks)
- **Target audience:** (Technical users / Business users / Mixed)
- **Current offering:** (Paid only / Trial available / Freemium available)

---

## Step 2: Trial Model Comparison

### Free Trial Model

**Characteristics:**
- **Duration:** Fixed time limit (7, 14, or 30 days)
- **Access:** Full feature access during trial period
- **Conversion:** Time-based urgency drives decision
- **Best for:** Products with quick time-to-value, clear value demonstration

**Advantages:**
- **Higher conversion rate:** Typically 32% trial→paid (industry benchmark)
- **Faster decision cycle:** Time pressure accelerates evaluation
- **Simple config products:** Users can validate fully within trial period
- **Clear ROI demonstration:** Users see full value before purchasing

**Disadvantages:**
- **Requires quick setup:** If config takes >50% of trial duration, users may not see value
- **Pressure may backfire:** Some users need longer evaluation
- **No long-term relationship:** Non-converters leave completely

**Recommended for:**
- Simple WordPress deployments (quick value realization)
- Pre-configured solutions (minimal setup required)
- Products with clear, immediate benefits

---

### Freemium Model

**Characteristics:**
- **Duration:** Unlimited time with feature/resource restrictions
- **Access:** Limited features, partial functionality
- **Conversion:** Value realization over time drives upgrades
- **Best for:** Products where users need time to realize value

**Advantages:**
- **Extended engagement:** Users stay in ecosystem indefinitely
- **Network effects:** Larger free user base increases awareness
- **Lower pressure:** Users upgrade when ready
- **Long-term relationship:** Even non-paying users provide value (feedback, referrals)

**Disadvantages:**
- **Lower conversion rate:** Typically 16% freemium→paid (industry benchmark)
- **Complex tiering:** Requires careful feature split (what's free vs paid?)
- **Resource cost:** Supporting non-paying users indefinitely
- **Delayed revenue:** Longer time to monetization

**Recommended for:**
- Complex solutions requiring configuration
- Products with network effects (collaboration tools)
- Services where value compounds over time (data analytics)

---

## Step 3: Decision Framework

Help user choose optimal model based on these factors:

### Choose FREE TRIAL if:
- ✅ Time-to-value < 25% of trial duration (e.g., <3 days for 14-day trial)
- ✅ Product has simple configuration/setup
- ✅ Value is immediately obvious (UI/UX, performance improvement)
- ✅ Target users are decision-makers with urgency
- ✅ Conversion rate optimization is priority

### Choose FREEMIUM if:
- ✅ Time-to-value > 50% of reasonable trial duration
- ✅ Product requires learning curve or gradual adoption
- ✅ Value compounds over time (data accumulation, integrations)
- ✅ Network effects benefit from large user base
- ✅ Long-term customer lifetime value justifies free tier support cost

### Hybrid Approach:
- Offer **14-day Free Trial** of premium features
- After trial, **downgrade to Freemium** tier instead of losing access completely
- **Best of both worlds:** Urgency + long-term engagement

---

## Step 4: Trial Duration Recommendations

If user chooses Free Trial model, recommend duration:

### 7-Day Trial:
- **Best for:** Very simple products, quick time-to-value (<1 day)
- **Example:** Pre-configured WordPress with templates
- **Risk:** May be too short for busy users

### 14-Day Trial (RECOMMENDED):
- **Best for:** Most self-hosted solutions on Azure
- **Rationale:** 2 weeks allows users to:
  * Week 1: Deploy, configure, test basic features
  * Week 2: Validate with real workloads, evaluate performance
- **Conversion rate:** Typically 30-35% (optimal balance)

### 30-Day Trial:
- **Best for:** Enterprise solutions, complex implementations
- **Example:** Multi-app DevOps suite requiring integration setup
- **Risk:** Users may postpone evaluation, forget about product

**Recommendation:** Default to **14-day trial** unless product requires longer evaluation.

---

## Step 5: Trial Program Design

### For FREE TRIAL Model:

**Trial Structure:**
- **Duration:** [7 / 14 / 30] days
- **Access level:** Full feature access, all plans available
- **Resource limits:** (if applicable) VM size restrictions, storage caps
- **Credit card requirement:** [Required / Not required]
  * Required: Higher intent users, reduces abuse, smoother conversion
  * Not required: Lower barrier, higher signup volume, more drop-off

**Trial Success Metrics:**
- **Primary goal:** User validates [specific value proposition]
- **Success indicators:** 
  * User completes [key action 1]: e.g., deploys application
  * User completes [key action 2]: e.g., configures custom settings
  * User completes [key action 3]: e.g., validates performance/load

**Conversion Strategy:**
- **Email nurture:** 7-email sequence (use EA workflow)
- **In-app prompts:** Days remaining countdown, upgrade CTAs
- **Personalized outreach:** For high-value trials (enterprise tier testing)

---

### For FREEMIUM Model:

**Free Tier Structure:**
- **Feature limits:** [List restricted features]
  * Example: Basic deployments only, no automated backups, community support
- **Resource limits:** [List resource restrictions]
  * Example: 1 VM, 2 vCPU, 4GB RAM, 50GB storage
- **Usage limits:** [List usage caps]
  * Example: 10 deployments/month, 100GB bandwidth

**Paid Tier Benefits:**
- **Feature upgrades:** [List premium features]
  * Example: Automated backups, priority support, advanced integrations
- **Resource upgrades:** [List resource increases]
  * Example: Unlimited VMs, custom VM sizing, 1TB storage
- **Support upgrades:** [List support improvements]
  * Example: 24/7 phone support, dedicated account manager

**Upgrade Triggers:**
- **Usage-based prompts:** When user hits free tier limits
- **Time-based offers:** Quarterly upgrade campaigns
- **Feature teases:** "Unlock [premium feature] with Business plan"

---

## Step 6: Customer-Led Evaluation Principles

Regardless of model chosen, emphasize:

### No Pre-Purchase Barriers:
- ❌ Don't require: Sales call, demo scheduling, lengthy registration
- ✅ Allow: Immediate self-service signup, instant access

### Validation-Focused Messaging:
- ❌ Avoid: "Start your free trial", "Try before you buy"
- ✅ Use: "Deploy in minutes and verify [value] in your environment"
- ✅ Use: "Test with your actual workflows to ensure fit before production commitment"

### Risk Mitigation Language:
- Emphasize: "No upfront commitment", "Migration assistance available"
- Highlight: "Standard Docker containers ensure data portability"

---

## Step 7: Conversion Rate Benchmarks

Set realistic expectations:

### Free Trial Benchmarks:
- **Overall average:** 25-35% trial→paid conversion
- **High performers:** 40-50% (excellent onboarding + nurture)
- **Low performers:** <20% (poor onboarding, mismatch audience)

**Factors affecting conversion:**
- Onboarding quality (user guides, video tutorials)
- Email nurture effectiveness (7-8 email sequence)
- Product-market fit (right audience, clear value prop)
- Pricing perception (affordable, competitive)

### Freemium Benchmarks:
- **Overall average:** 10-20% freemium→paid conversion
- **High performers:** 25-30% (strong upgrade triggers, clear value delta)
- **Low performers:** <5% (weak differentiation, free tier too generous)

**Factors affecting conversion:**
- Free tier restrictions (too generous = low conversion, too restrictive = high churn)
- Upgrade triggers (proactive prompts when users hit limits)
- Value demonstration (premium features clearly superior)

---

## Step 8: Output Recommendations

Present trial program design with:

### Model Recommendation:
- **Chosen model:** [Free Trial / Freemium / Hybrid]
- **Rationale:** [Why this model fits product characteristics]

### Program Structure:
- **Duration / Tier definition:** [Specific details]
- **Access level:** [Feature/resource limits]
- **Success metrics:** [What users should validate]

### Conversion Strategy:
- **Nurture approach:** [Email sequence, in-app prompts]
- **Messaging guidelines:** [Validation-focused language]
- **Support model:** [How to assist trial users]

### Expected Outcomes:
- **Conversion rate target:** [Based on benchmarks]
- **Optimization opportunities:** [A/B tests to run]

---

## Step 9: Save Output

Save trial program strategy to `{project-root}/specs/output/[product-name]-trial-strategy.md`

Confirm file saved location to user.

---

## Output

Complete trial program strategy with model selection rationale, program structure, conversion tactics, and benchmark expectations.
