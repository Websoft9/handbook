# Single Product Plan Template

This template is for pricing tiers within a single-product offering.

## Structure Guidelines

**Each Plan = One Resource Tier** (Starter, Business, Enterprise)

**Focus:** Resource specs, use case fit, value tier positioning

---

## PLAN NAME

**Format:** `[Software] [Tier Name] Plan`

**Examples:**
- `WordPress Starter Plan`
- `WordPress Business Plan`
- `WordPress Enterprise Plan`

**Best Practices:**
- Software name + tier level
- Clear hierarchy (Starter < Business < Enterprise)
- 3-4 words

---

## PLAN SUMMARY

**Format:** `[Tier-appropriate description] - [Resource highlight] - Ideal for [target scale]`

**Examples:**
- `Essential self-hosted WordPress - 2 vCPU, 4GB RAM - Ideal for blogs and small sites (up to 10K monthly visitors)`
- `High-performance WordPress - 4 vCPU, 16GB RAM - Ideal for growing businesses (up to 100K monthly visitors)`
- `Enterprise-grade WordPress - 8 vCPU, 32GB RAM - Ideal for high-traffic e-commerce (100K+ monthly visitors)`

**Best Practices:**
- Start with tier positioning
- Include key resource specs
- Define ideal use case with traffic estimate
- 60-100 characters

---

## PLAN DESCRIPTION

### Section 1: Target Use Case

```html
<p><b>For [specific use case]</b> - [Tier Name] plan provides [key capability] 
with [resource spec] to support [traffic/scale level].</p>
```

**Example (Starter):**
```html
<p><b>For personal blogs and small business sites</b> - Starter plan provides 
reliable WordPress hosting with 2 vCPU and 4GB RAM to support up to 10,000 
monthly visitors.</p>
```

**Example (Business):**
```html
<p><b>For growing e-commerce and content-heavy sites</b> - Business plan provides 
high-performance WordPress hosting with 4 vCPU and 16GB RAM to support up to 
100,000 monthly visitors.</p>
```

**Example (Enterprise):**
```html
<p><b>For high-traffic e-commerce and enterprise applications</b> - Enterprise 
plan provides mission-critical WordPress hosting with 8 vCPU and 32GB RAM to 
support 100,000+ monthly visitors with guaranteed performance.</p>
```

### Section 2: What You Get (Standard Features)

```html
<h3>What You Get</h3>
<ul>
<li>Pre-configured [Software] installation with optimized settings</li>
<li>Websoft9 unified control panel for easy management</li>
<li>Automated daily backups to Azure Storage ([retention period])</li>
<li>Security updates and [monitoring level]</li>
<li>24/7 technical support via [support channels]</li>
</ul>
```

### Section 3: Resource Specifications

```html
<h3>Resource Specifications</h3>
<ul>
<li><b>Compute:</b> [X] vCPU</li>
<li><b>Memory:</b> [X] GB RAM</li>
<li><b>Storage:</b> [X] GB SSD</li>
<li><b>Bandwidth:</b> [X] TB/month (or Unlimited)</li>
<li><b>Estimated capacity:</b> [X] monthly visitors / [X] concurrent users</li>
</ul>
```

### Section 4: Ideal For (Use Cases)

```html
<h3>Ideal For</h3>
<ul>
<li>[Use case 1 with traffic level]</li>
<li>[Use case 2 with traffic level]</li>
<li>[Use case 3 with traffic level]</li>
</ul>
```

### Section 5: Value Statement

```html
<p><b>[Tier-specific value]:</b> [Key benefit statement with quantification if possible].</p>
```

**Examples:**
- **Starter:** `<p><b>Best value for starting out:</b> Launch your WordPress site for less than the cost of managed WordPress hosting, with full control and expert support.</p>`
- **Business:** `<p><b>Scalability meets performance:</b> Handle traffic spikes and growing content needs without sacrificing page load times (avg. 1.5s load time).</p>`
- **Enterprise:** `<p><b>Mission-critical reliability:</b> 99.99% uptime SLA with dedicated support and advanced performance tuning for business-critical applications.</p>`

---

## COMPLETE EXAMPLES

### Example 1: WordPress Starter Plan

**Plan ID:** `wordpress-starter`

**Plan Name:** `WordPress Starter Plan`

**Plan Summary:** `Essential self-hosted WordPress - 2 vCPU, 4GB RAM - Ideal for blogs and small sites (up to 10K monthly visitors)`

**Plan Description:**
```html
<p><b>For personal blogs and small business sites</b> - Starter plan provides reliable 
WordPress hosting with 2 vCPU and 4GB RAM to support up to 10,000 monthly visitors.</p>

<h3>What You Get</h3>
<ul>
<li>Pre-configured WordPress installation with optimized settings</li>
<li>Websoft9 unified control panel for easy management</li>
<li>Automated daily backups to Azure Storage (7-day retention)</li>
<li>Security updates and basic monitoring</li>
<li>24/7 technical support via email</li>
</ul>

<h3>Resource Specifications</h3>
<ul>
<li><b>Compute:</b> 2 vCPU</li>
<li><b>Memory:</b> 4 GB RAM</li>
<li><b>Storage:</b> 50 GB SSD</li>
<li><b>Bandwidth:</b> 1 TB/month</li>
<li><b>Estimated capacity:</b> Up to 10,000 monthly visitors</li>
</ul>

<h3>Ideal For</h3>
<ul>
<li>Personal blogs and portfolio sites</li>
<li>Small business websites with moderate traffic</li>
<li>Development and staging environments</li>
</ul>

<p><b>Best value for starting out:</b> Launch your WordPress site for less than the cost 
of managed WordPress hosting, with full control and expert support.</p>
```

---

### Example 2: WordPress Business Plan

**Plan ID:** `wordpress-business`

**Plan Name:** `WordPress Business Plan`

**Plan Summary:** `High-performance WordPress - 4 vCPU, 16GB RAM - Ideal for growing businesses (up to 100K monthly visitors)`

**Plan Description:**
```html
<p><b>For growing e-commerce and content-heavy sites</b> - Business plan provides 
high-performance WordPress hosting with 4 vCPU and 16GB RAM to support up to 100,000 
monthly visitors.</p>

<h3>What You Get</h3>
<ul>
<li>Pre-configured WordPress with advanced caching and CDN integration</li>
<li>Websoft9 unified control panel with performance insights</li>
<li>Automated daily backups to Azure Storage (30-day retention)</li>
<li>Security updates, proactive monitoring, and performance tuning</li>
<li>24/7 priority technical support via email and chat</li>
</ul>

<h3>Resource Specifications</h3>
<ul>
<li><b>Compute:</b> 4 vCPU</li>
<li><b>Memory:</b> 16 GB RAM</li>
<li><b>Storage:</b> 200 GB SSD</li>
<li><b>Bandwidth:</b> 5 TB/month</li>
<li><b>Estimated capacity:</b> Up to 100,000 monthly visitors</li>
</ul>

<h3>Ideal For</h3>
<ul>
<li>E-commerce sites with growing product catalogs</li>
<li>Media-rich content sites and news portals</li>
<li>Marketing agencies managing multiple client sites</li>
</ul>

<p><b>Scalability meets performance:</b> Handle traffic spikes and growing content needs 
without sacrificing page load times (avg. 1.5s load time with optimizations).</p>
```

---

### Example 3: WordPress Enterprise Plan

**Plan ID:** `wordpress-enterprise`

**Plan Name:** `WordPress Enterprise Plan`

**Plan Summary:** `Enterprise-grade WordPress - 8 vCPU, 32GB RAM - Ideal for high-traffic e-commerce (100K+ monthly visitors)`

**Plan Description:**
```html
<p><b>For high-traffic e-commerce and enterprise applications</b> - Enterprise plan 
provides mission-critical WordPress hosting with 8 vCPU and 32GB RAM to support 100,000+ 
monthly visitors with guaranteed performance.</p>

<h3>What You Get</h3>
<ul>
<li>Pre-configured WordPress with enterprise caching, CDN, and WAF</li>
<li>Websoft9 control panel with advanced analytics and alerting</li>
<li>Automated hourly backups to Azure Storage (90-day retention + archive)</li>
<li>24/7 proactive monitoring, security hardening, and dedicated support</li>
<li>Priority support via phone, email, and chat with 1-hour response SLA</li>
</ul>

<h3>Resource Specifications</h3>
<ul>
<li><b>Compute:</b> 8 vCPU</li>
<li><b>Memory:</b> 32 GB RAM</li>
<li><b>Storage:</b> 500 GB SSD (expandable)</li>
<li><b>Bandwidth:</b> Unlimited</li>
<li><b>Estimated capacity:</b> 100,000+ monthly visitors (tested up to 500K)</li>
</ul>

<h3>Ideal For</h3>
<ul>
<li>High-traffic e-commerce platforms with complex catalogs</li>
<li>Enterprise marketing sites with global traffic</li>
<li>SaaS companies using WordPress as frontend</li>
</ul>

<p><b>Mission-critical reliability:</b> 99.99% uptime SLA with dedicated support team 
and advanced performance tuning for business-critical WordPress applications.</p>
```

---

## TIER DIFFERENTIATION GUIDELINES

### Starter Tier
- **Target:** Individuals, small businesses, dev/test
- **Traffic:** Up to 10K monthly visitors
- **Resources:** 2 vCPU, 4-8 GB RAM
- **Support:** Email, standard response time
- **Backup:** Daily, 7-day retention
- **Value:** Low cost, full control, expert support

### Business Tier
- **Target:** Growing businesses, e-commerce, agencies
- **Traffic:** 10K-100K monthly visitors
- **Resources:** 4 vCPU, 16 GB RAM
- **Support:** Priority email + chat
- **Backup:** Daily, 30-day retention
- **Value:** Performance, scalability, advanced features

### Enterprise Tier
- **Target:** High-traffic, mission-critical, enterprises
- **Traffic:** 100K+ monthly visitors
- **Resources:** 8+ vCPU, 32+ GB RAM
- **Support:** Phone + email + chat, 1-hour SLA
- **Backup:** Hourly, 90-day retention
- **Value:** Reliability, SLA, dedicated support

---

## VARIABLE FIELDS TO FILL

When generating plans, ask for:

1. **Software Name** (e.g., WordPress, Magento, Joomla)
2. **Tier Levels** (typically 3: Starter, Business, Enterprise)
3. **Traffic Estimates** (per tier)
4. **Resource Specs** (vCPU, RAM, Storage per tier)
5. **Key Differentiators** (per tier)
6. **Support Levels** (per tier)

Generate plan content by filling these into the template structure above.
