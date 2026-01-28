# Single Product Plan Template

For pricing tiers within a single-product offering.

**Strategy:** Each Plan = One Resource Tier (Starter/Business/Enterprise). Focus on resource specs and use case fit.

---

## PLAN NAME (3-4 words)

**Format:** `[Software] [Tier Name] Plan`

**Hierarchy:** Starter < Business < Enterprise

---

## PLAN SUMMARY (60-100 chars)

**Format:** `[Tier description] - [Resource highlight] - Ideal for [target scale]`

---

## PLAN DESCRIPTION

**Note:** Use `html-plan-single-product-tier.html` (for strategies 1-4) or `html-plan-single-product-os-based.html` (for strategy 5).

### Structure (Tier-based):
1. **Target Use Case:** For [specific use case] with [resource spec]
2. **What You Get:** 5 standard features
3. **Resource Specs:** vCPU, RAM, Storage, Bandwidth, Capacity
4. **Ideal For:** 3 use cases with traffic levels
5. **Value Statement:** Tier-specific benefit

### Structure (OS-based):
1. **Base OS:** OS name and version with key benefit
2. **What You Get:** 5 standard features (emphasize Docker portability)
3. **Ideal For:** OS-specific use cases
4. **Note:** Application functionality identical across all OS variants

---

## TIER DIFFERENTIATION

**Starter:** Individuals, small biz, dev/test | Up to 10K visitors | 2 vCPU, 4-8GB RAM | Email support | Daily backup, 7-day retention

**Business:** Growing businesses, e-commerce, agencies | 10K-100K visitors | 4 vCPU, 16GB RAM | Priority email+chat | Daily backup, 30-day retention

**Enterprise:** High-traffic, mission-critical | 100K+ visitors | 8+ vCPU, 32+GB RAM | Phone+email+chat, 1hr SLA | Hourly backup, 90-day retention

---

## REFERENCE

**Actual generation uses:** `html-plan-single-product-tier.html` or `html-plan-single-product-os-based.html` (800/700 char strict templates)
