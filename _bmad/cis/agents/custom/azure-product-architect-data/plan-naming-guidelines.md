# Plan Naming Guidelines (Simplified)

**Purpose:** Quick reference for Azure Marketplace Plan technical constraints. Full specification in **Agent Principle 8**.

---

## Azure Technical Constraints

### Plan Name
- **Limit:** 200 characters (plain text)
- **Visibility:** Marketplace listing title for this plan

### Plan Summary
- **Limit:** 100 characters (plain text)
- **Purpose:** Short plan differentiator

### Plan Description
- **Limit:** 3,000 characters
- **Format:** HTML allowed (`<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<b>`, `<i>`, `<br>`)

---

## 3+1 Plan Architecture (Principle 8)

### Plans 1-3: Product Configurations

**Naming Format:** `[App Name] for [Scenario]`

**Examples:**
- Odoo for Startups
- Odoo for Growing Teams ⭐
- Odoo for Enterprises

**Summary Format (50-80 chars):**
```
For [X users]. [modules] + [support level] + [SLA].
```

**Differentiation Dimensions:**
- User Capacity: 10-50 / 50-200 / 200+
- Support: Community / Email+AM / 24/7 Priority
- SLA: 99.5% / 99.9% / 99.95%

### Plan 4: Category Selection

**Naming Format:** `[Category] Selection Suite`

**Example:** `ERP Selection Suite`

**Summary Format (50-80 chars):**
```
Not sure which [category] fits? Deploy [options] for evaluation.
```

---

## Validation Checklist

**Before submission:**
- [ ] Plan Name ≤200 chars, follows `[App] for [Scenario]` pattern (Plans 1-3) or `[Category] Selection Suite` (Plan 4)
- [ ] Plan Summary ≤100 chars, includes user capacity + support + SLA (Plans 1-3)
- [ ] Plan Description ≤3,000 chars, uses allowed HTML tags only
- [ ] Plan 2 marked as ⭐ Recommended

---

## Reference

**Full Specification:** See Agent Principle 8 (Plan Structure Compliance)  
**HTML Template:** `html-plan-single-product-tier.html`
