# Azure Marketplace Plan Naming Guidelines

Official requirements and best practices for Plan listing configuration.

---

## Official Requirements from Azure Documentation

### Plan Name

**Character Limit:** 200 characters maximum

**Purpose:** Appears on Microsoft Marketplace as the title of this plan

**Rules:**
- Automatically filled when creating the plan initially
- Can be edited in Partner Center
- Should be descriptive and clear
- Visible to customers in marketplace listings

**Best Practices:**
- Use 3-6 words for readability
- Include software/tool name for recognition
- Add tier level for Single Product plans (e.g., "WordPress Business Plan")
- Add category context for Category Suite plans (e.g., "Jenkins DevOps Suite")
- Be specific and value-oriented
- Avoid generic terms like "Plan 1", "Option A"

**Examples:**
✅ Good:
- "WordPress Business Plan"
- "Jenkins DevOps Suite"
- "n8n Workflow Automation Suite"
- "Magento Enterprise Plan"

❌ Avoid:
- "Plan 1"
- "Basic Option"
- "Standard"
- "Solution A"

---

### Plan Summary

**Character Limit:** 100 characters maximum

**Purpose:** Provide a short summary of the plan (not the offer)

**Rules:**
- Must be concise due to strict character limit
- Describe THIS PLAN specifically, not the overall offer
- Appears in plan selection interfaces
- Should differentiate this plan from other plans

**Best Practices:**
- Lead with key differentiator or benefit
- Include resource highlights for Single Product (e.g., "4 vCPU, 16GB RAM")
- Include primary use case or app name for Category Suite
- Use quantifiable descriptors when possible
- Front-load important information (first 50 chars most visible)

**Structure Guidelines:**

**For Category Suite Plans:**
```
Self-hosted [App] for [primary use case] with [key service feature]
```
Examples:
- "Self-hosted Jenkins for CI/CD automation with one-click deployment and managed support" (90 chars)
- "Self-hosted n8n for workflow automation with unified management and automated backups" (92 chars)

**For Single Product Plans:**
```
[Tier description] - [resources] - Ideal for [use case + scale]
```
Examples:
- "Essential WordPress - 2 vCPU, 4GB RAM - Ideal for blogs and small sites (up to 10K visitors)" (97 chars)
- "High-performance WordPress - 4 vCPU, 16GB RAM - For growing businesses (up to 100K visitors)" (97 chars)

**Character Count Tips:**
- "Self-hosted" = 11 chars (consider "Managed" = 7 chars as alternative)
- "with one-click deployment" = 26 chars
- "Ideal for" = 9 chars
- Use abbreviations carefully (vCPU, RAM, GB, K for thousand)

---

### Plan Description

**Character Limit:** 3,000 characters maximum

**Purpose:** Describe what makes this plan unique and differences between plans within the offer

**Rules:**
- Describe the PLAN only, not the offer
- Focus on what differentiates this plan from other plans
- Can use HTML formatting (limited tags: `<b>`, `<i>`, `<ul>`, `<ol>`, `<li>`, `<p>`, `<h3>`, `<br>`)
- Should answer: "Why choose THIS plan over others?"

**Best Practices:**

**Structure (Pain → Benefit → Features):**

1. **Target Audience (1 sentence)**
   - Who is this plan for?
   - What specific need does it address?

2. **What You Get (Bullet list)**
   - 5-7 specific features/services included
   - Use `<ul>` and `<li>` for formatting

3. **Ideal For (Use cases/personas)**
   - 3-5 specific use cases or customer types
   - Be concrete and relatable

4. **Differentiation/Value Statement (1-2 sentences)**
   - What makes THIS plan special?
   - Quantified benefit or guarantee if applicable

**For Category Suite Plans:**
```html
<p><b>For [specific persona] building [specific outcome]</b> - Deploy [App] 
[primary function] with pre-configured setup and Websoft9's managed hosting.</p>

<h3>What You Get</h3>
<ul>
<li>Pre-configured [App] installation with optimized settings</li>
<li>Websoft9 unified control panel for easy management</li>
<li>Automated daily backups to Azure Storage</li>
<li>Security updates and proactive monitoring</li>
<li>24/7 technical support via email and chat</li>
</ul>

<h3>Ideal For</h3>
<ul>
<li>[Use case 1 with persona]</li>
<li>[Use case 2 with persona]</li>
<li>[Use case 3 with persona]</li>
</ul>

<p><b>Time to value:</b> Deploy in 5 minutes, start [primary action] immediately.</p>
```

**For Single Product Plans:**
```html
<p><b>For [specific use case]</b> - [Tier Name] plan provides [key capability] 
with [resource spec] to support [traffic/scale level].</p>

<h3>What You Get</h3>
<ul>
<li>Pre-configured [Software] installation with optimized settings</li>
<li>Websoft9 unified control panel for easy management</li>
<li>Automated [frequency] backups to Azure Storage ([retention period])</li>
<li>Security updates and [monitoring level]</li>
<li>24/7 technical support via [support channels]</li>
</ul>

<h3>Resource Specifications</h3>
<ul>
<li><b>Compute:</b> [X] vCPU</li>
<li><b>Memory:</b> [X] GB RAM</li>
<li><b>Storage:</b> [X] GB SSD</li>
<li><b>Bandwidth:</b> [X] TB/month</li>
<li><b>Estimated capacity:</b> [X] monthly visitors</li>
</ul>

<h3>Ideal For</h3>
<ul>
<li>[Use case 1 with scale]</li>
<li>[Use case 2 with scale]</li>
<li>[Use case 3 with scale]</li>
</ul>

<p><b>[Tier-specific value]:</b> [Benefit statement with quantification].</p>
```

**Character Budget Management:**
- Typical well-structured plan description: 800-1,500 characters
- Maximum available: 3,000 characters
- Leave room for future updates
- Use HTML lists (`<ul>`, `<ol>`) to improve scannability

**Differentiation Focus:**

When writing plan descriptions, explicitly highlight differences:

**For Category Suite Plans:**
- Which app/tool this plan deploys
- Specific use cases for this app
- Why someone would choose this app over others in the suite

**For Single Product Plans:**
- Resource tier and capacity
- Who this tier is designed for (individuals vs teams vs enterprises)
- Traffic/usage level this tier supports
- Support level and SLA differences

---

## Common Mistakes to Avoid

### ❌ Plan Name Mistakes
- Using generic names ("Plan A", "Option 1")
- Exceeding 200 characters
- Forgetting to include key identifier (app name or tier)

### ❌ Plan Summary Mistakes
- Exceeding 100 characters
- Describing the offer instead of the plan
- Being too vague ("Great solution for businesses")
- Not including any differentiating information

### ❌ Plan Description Mistakes
- Describing the overall offer instead of this specific plan
- Forgetting to explain what makes this plan unique
- Using unsupported HTML tags
- Exceeding 3,000 characters
- Missing target audience
- No clear differentiation from other plans
- Emotionless feature list without context

---

## Validation Checklist

Before submitting plan listings, verify:

**Plan Name:**
- [ ] Under 200 characters
- [ ] Descriptive and specific
- [ ] Includes software/tool name or tier level
- [ ] Not generic ("Plan 1", "Basic")

**Plan Summary:**
- [ ] Under 100 characters
- [ ] Describes THIS plan, not the offer
- [ ] Highlights key differentiator
- [ ] Includes critical information (app name or resources)

**Plan Description:**
- [ ] Under 3,000 characters
- [ ] Uses only allowed HTML tags
- [ ] Describes THIS plan specifically
- [ ] Explains differentiation from other plans
- [ ] Includes target audience
- [ ] Lists specific features ("What You Get")
- [ ] Provides use cases ("Ideal For")
- [ ] Quantifies value when possible

---

## Integration with Agent

This guideline should be referenced when:
- Executing [NS] command (Generate SKU/Plans)
- User asks about plan naming conventions
- Generating plan content that will be submitted to Partner Center
- Validating existing plan listings

The agent should automatically apply these constraints and best practices when generating plan content.
