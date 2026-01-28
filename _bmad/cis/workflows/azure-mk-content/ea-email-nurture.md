---
name: ea-email-nurture
description: Generate trial nurture email sequence (8-step, 14-day + post-conversion)
---

# EA Workflow: Generate Email Nurture Sequence

**Goal:** Create 8-step trial nurture email sequence optimized for conversion (7 emails during 14-day trial + 1 post-conversion review request).

---

## Step 1: Product Context

Ask user for:
- **Product name:** (e.g., WordPress, AI Workflow Suite)
- **Trial duration:** (typically 14 days, confirm with user)
- **Key features to highlight:** (3-5 primary features/benefits)
- **Target success metrics:** (What should users validate during trial?)
- **Documentation URLs:** (Getting started guide, full docs, video tutorials)

---

## Step 2: Email Sequence Structure

Generate 8-step sequence:

### TRIAL PHASE (Days 1-14):

#### Email 1: Welcome (Day 1)
**Subject:** "Welcome to [Product] - Your [Trial Duration] Evaluation Starts Now"

**Goal:** 60% open rate target

**Content:**
- Thank user for starting evaluation
- **Explain value proposition** clearly
- **Provide testing guide** with specific success metrics to validate
- Link to Getting Started documentation
- **Set expectations:** What to try first, what success looks like

**Example structure:**
```
Hi [Name],

Welcome to [Product]! Your [14-day] evaluation is now active.

Here's what to try first to validate [core value proposition]:

✓ [Success metric 1]: [How to test it]
✓ [Success metric 2]: [How to test it]
✓ [Success metric 3]: [How to test it]

[CTA] Get Started Guide →

Need help? Reply to this email or visit [support link].

Best,
[Your Team]
```

#### Email 2: Education (Day 3)
**Subject:** "3 Things to Try in Your First Week with [Product]"

**Goal:** Practical tips, video tutorial introduction

**Content:**
- **Practical tips:** 3 specific actions to take
- **Video tutorial link:** 60-90 second walkthrough
- **Quick wins:** Easy features to show immediate value
- **Support offer:** "Questions? We're here to help"

#### Email 3: Aspiration (Day 5)
**Subject:** "How [Customer Type] Uses [Product] to [Achieve Outcome]"

**Goal:** Success stories aligned with recipient's industry/use case

**Content:**
- **Customer success story:** Company context, challenge, solution, results
- **Quantified outcomes:** "Reduced deployment time from 2 days to 30 minutes"
- **Industry relevance:** Match to recipient's profile if known
- **Social proof:** "Join X companies using [Product]"

#### Email 4: Trust (Day 8)
**Subject:** "[Product] Trust & Security: What You Need to Know"

**Goal:** Build confidence through company expertise and compliance

**Content:**
- **Company expertise:** Team background, years in business, specialization
- **Security certifications:** SOC 2, GDPR, ISO 27001, HIPAA (as applicable)
- **Customer testimonials:** 2-3 quotes from satisfied customers
- **Awards/recognition:** Industry accolades if available
- **Support commitment:** 24/7 availability, response times, expertise

#### Email 5: Urgency (Day 11)
**Subject:** "[X] Days Left in Your [Product] Evaluation"

**Goal:** Remaining trial days reminder, recap progress

**Content:**
- **Countdown:** "You have [3] days remaining"
- **Recap features tested:** "You've already tried [features user has used]"
- **Remaining opportunities:** "Don't miss testing [features not yet used]"
- **Support offer:** "Have questions before deciding? Let's talk"
- **Link to plans:** "Review pricing and plan options"

#### Email 6: Offer (Day 13)
**Subject:** "Your Personalized [Product] Plan + Special Offer"

**Goal:** Personalized pricing, limited-time incentive

**Content:**
- **Plan recommendation:** Based on user's usage pattern during trial (if tracked)
- **Pricing details:** Clear breakdown of selected plan
- **Limited-time incentive:** (if applicable) "Save [X]% if you upgrade in next 48 hours"
- **Recap benefits validated:** "During your trial, you [outcomes achieved]"
- **Easy upgrade path:** Clear CTA button

#### Email 7: Take Away (Day 14)
**Subject:** "Your [Product] Trial Ends Today - What's Next?"

**Goal:** Trial conclusion, options to extend/purchase, join nurture program

**Content:**
- **Trial conclusion:** "Your evaluation period ends today"
- **Options available:**
  * **Upgrade now:** Link to purchase/upgrade
  * **Need more time?** Offer 7-day extension (if applicable)
  * **Not ready?** Join nurture program for updates
- **Data preservation:** Explain what happens to trial data
- **Stay in touch:** Newsletter signup, resource access

---

### POST-CONVERSION (Day 30 after purchase):

#### Email 8: Review Request
**Subject:** "How's [Product] Working for You? Share Your Experience"

**Goal:** Request Azure Marketplace review, boost listing visibility

**Content:**
- **Thank customer** for choosing the product
- **Ask for Azure Marketplace review:** Direct link to review page
- **Provide simple review template:**
  * "What problem did it solve?"
  * "How was the setup experience?"
  * "Would you recommend it?"
- **Explain impact:** "Reviews help other teams discover solutions like yours"
- **Incentive (if appropriate):** "Leave a review and get [X] free support hours / extended trial for another product"

**Note:** Azure Marketplace rankings are influenced by review quantity and quality — proactive review requests can significantly boost visibility.

---

## Step 3: Email Best Practices

### Sender Information:
- **From address:** Use personalized corporate sender emails (not noreply@)
- **From name:** Include sender name and company (e.g., "John Smith from Websoft9")
- **Include phone number:** For enterprise prospects, provide direct contact option

### Subject Line Optimization:
- **Length:** 40-50 characters optimal (mobile-friendly)
- **Personalization:** Include product name, day count, or customer name
- **A/B testing:** Test 2-3 subject line variations per email to optimize open rates

### Content Guidelines:
- **Clear CTA:** One primary call-to-action per email
- **Mobile-optimized:** Short paragraphs, bullet points, readable on mobile devices
- **Avoid cross-selling:** Don't promote unrelated products during trial phase
- **Track engagement:** Use UTM parameters to measure email→landing page→conversion flow

### Timing:
- **Send time:** 10 AM recipient's local timezone (optimal for business emails)
- **Frequency:** Balance between engagement and fatigue (every 2-3 days during trial)

---

## Step 4: Customization Questions

For each email, ask user:
- **Custom success stories:** Do you have specific customer testimonials to include?
- **Incentive details:** Any special offers or discounts available?
- **Extension policy:** Can users extend trial? Under what conditions?
- **Review incentives:** Offering anything for Azure Marketplace reviews?

---

## Step 5: Output Format

Present complete 8-email sequence with:
- Email number and day schedule
- Subject line for each email
- Full email body content
- CTA buttons/links
- Notes on personalization variables

---

## Step 6: Save Output

Save generated email sequence to `{project-root}/specs/output/[product-name]-email-nurture-sequence.md`

Confirm file saved location to user.

---

## Output

Complete 8-step email nurture sequence optimized for 14-day trial conversion with post-purchase review request strategy.
