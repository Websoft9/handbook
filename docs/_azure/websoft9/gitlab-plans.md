# GitLab Azure Marketplace Plans

**Generated:** 2026-02-01  
**Software:** GitLab Community Edition  
**Strategy:** Hybrid (Scale + Features + Service Level)  
**Architecture:** 3+1 (3 product tiers + 1 multi-app suite)

---

## Plan 1: GitLab for Startups

**PLAN NAME:** GitLab for Startups

**PLAN SUMMARY:** For up to 50 users. Community support, weekly backups, 99.5% SLA.

**PLAN DESCRIPTION:**

```html
<h3>For Small Teams & Early-Stage Projects</h3>

<p>Launch your GitLab instance with essential infrastructure and community-driven support—perfect for startups and small development teams building their DevOps foundation.</p>

<h3>What's Included</h3>

<ul>
<li><b>Base OS:</b> Ubuntu 24.04 LTS</li>
<li><b>Users:</b> Up to 50 concurrent users</li>
<li><b>VM Resources:</b> 4 vCPU, 8GB RAM, 120GB SSD Storage (recommended minimum)</li>
<li><b>Support:</b> Community support via forums and knowledge base</li>
<li><b>SLA:</b> 99.5% uptime commitment</li>
<li><b>Backups:</b> Weekly automated backups, 4-week retention</li>
<li><b>Infrastructure:</b> One-click deployment, automated SSL renewal, basic health monitoring</li>
</ul>

<h3>Best For</h3>

<p>Small dev teams (5-10 developers), early-stage startups, and projects with moderate CI/CD workloads seeking cost-effective self-hosted GitLab.</p>
```

---

## Plan 2: GitLab for Growing Teams ⭐

**PLAN NAME:** GitLab for Growing Teams

**PLAN SUMMARY:** For 50-200 users. Email+AM support, daily backups, performance tuning, 99.9% SLA.

**PLAN DESCRIPTION:**

```html
<h3>⭐ Most Popular - For Growing Teams & SMBs</h3>

<p>Recommended tier with performance optimizations, dedicated account management, and enhanced reliability—typically trusted by 60-70% of customers for production GitLab workloads.</p>

<h3>What's Included</h3>

<ul>
<li><b>Base OS:</b> Ubuntu 24.04 LTS</li>
<li><b>Users:</b> 50-200 concurrent users</li>
<li><b>VM Resources:</b> 8 vCPU, 16GB RAM, 240GB SSD Storage (optimized configuration)</li>
<li><b>Support:</b> Email support + Assigned Account Manager with priority response</li>
<li><b>SLA:</b> 99.9% uptime commitment with incident response SLAs</li>
<li><b>Backups:</b> Daily automated backups, 8-week retention</li>
<li><b>Infrastructure:</b> Redis caching for performance, automated security patching, enhanced monitoring, GitLab Runner optimization</li>
<li><b>Integration Support:</b> REST API, Webhooks, SSO (SAML/OIDC) configuration assistance</li>
</ul>

<h3>Best For</h3>

<p>Growing engineering teams (20-50 developers), SMBs running production CI/CD pipelines, and organizations requiring performance optimization with professional support.</p>
```

---

## Plan 3: GitLab for Enterprises

**PLAN NAME:** GitLab for Enterprises

**PLAN SUMMARY:** For 200+ users. 24/7 Priority support, hourly backups, HA architecture, 99.95% SLA.

**PLAN DESCRIPTION:**

```html
<h3>For Mission-Critical DevOps & Large Enterprises</h3>

<p>Enterprise-grade GitLab hosting with high-availability architecture, priority support, and compliance readiness—designed for organizations where downtime is not an option.</p>

<h3>What's Included</h3>

<ul>
<li><b>Base OS:</b> Ubuntu 24.04 LTS</li>
<li><b>Users:</b> 200+ concurrent users (unlimited scaling)</li>
<li><b>VM Resources:</b> 16+ vCPU, 32GB+ RAM, 500GB+ SSD Storage (custom configuration available)</li>
<li><b>Support:</b> 24/7 Priority support with dedicated onboarding and custom runbooks</li>
<li><b>SLA:</b> 99.95% uptime commitment with priority incident handling</li>
<li><b>Backups:</b> Hourly incremental backups, 12-week retention, disaster recovery testing</li>
<li><b>Infrastructure:</b> High-availability architecture, automated failover, advanced monitoring, load balancing, autoscaling GitLab Runners</li>
<li><b>Integration Support:</b> Full API/CLI/Terraform support, SSO integration, custom webhook configurations</li>
<li><b>Compliance:</b> SOC 2, ISO 27001, GDPR compliance artifacts, architecture review support, security audit assistance</li>
</ul>

<h3>Best For</h3>

<p>Large enterprises (100+ developers), regulated industries (finance, healthcare), and organizations requiring compliance certifications with mission-critical DevOps infrastructure.</p>
```

---

## Plan 4: Multi-DevOps Self-Hosted Suite

**PLAN NAME:** Multi-DevOps Self-Hosted Suite

**PLAN SUMMARY:** Deploy multiple DevOps tools (GitLab, Gitea, Docker Registry, Ansible) on unified infrastructure.

**PLAN DESCRIPTION:**

```html
<h3>For Comprehensive DevOps Toolchain Deployments</h3>

<p>A category selection plan for teams wanting to deploy multiple DevOps tools beyond GitLab—unified self-hosted infrastructure with centralized management through Websoft9 Control Panel.</p>

<h3>What's Included</h3>

<p>Deploy any combination of DevOps applications on shared infrastructure:</p>

<ul>
<li><b>Version Control:</b> GitLab CE, Gitea, Gogs, Gitness</li>
<li><b>CI/CD & Automation:</b> GoCD, Semaphore UI, Ansible</li>
<li><b>Development Tools:</b> code-server (VS Code in browser)</li>
<li><b>Container Management:</b> Docker Registry</li>
<li><b>Project Management:</b> Redmine, YouTrack</li>
<li><b>Artifact Repository:</b> Sonatype Nexus</li>
</ul>

<h3>How It Works</h3>

<p>Deploy applications on shared or dedicated Azure VM resources based on your requirements. Start with consolidated deployment and scale independently as needed—all managed from unified Websoft9 dashboard.</p>

<h3>Pricing Model</h3>

<p>Pricing based on combined resource footprint (vCPU, RAM, storage) and selected support level. Recommend starting with 8 vCPU / 16GB RAM configuration for 2-3 apps, scaling as needed.</p>

<h3>Best For</h3>

<p>Organizations building comprehensive DevOps toolchains, teams wanting flexibility to add complementary tools as needs evolve, and enterprises standardizing on self-hosted infrastructure with centralized management.</p>

---

**Status:** ✅ Ready for Partner Center Plan Configuration

**File Location:** `specs/output/gitlab-plans.md`
