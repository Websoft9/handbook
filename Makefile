# Makefile for Websoft9 Handbook
# Provides standardized commands for development, build, and validation tasks
# Platform Support: Linux and macOS only (use WSL2 on Windows)

.PHONY: help install start build serve clean validate validate-md validate-build validate-quick check check-versions version

# Default target
.DEFAULT_GOAL := help

# Configuration variables (can be overridden)
PORT ?= 3002
HOST ?= 0.0.0.0
LOCALE ?= zh

# Color codes for output
CYAN := \033[0;36m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
RESET := \033[0m

#
# Help System
#

help: ## Display this help message
	@echo "$(CYAN)Websoft9 Handbook - Available Commands$(RESET)"
	@echo ""
	@echo "$(GREEN)Development:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		grep -E '^(install|start|build|serve|clean):' | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Validation:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		grep -E '^validate' | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Utilities:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		grep -E '^(check|version|help):' | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(YELLOW)Examples:$(RESET)"
	@echo "  make start PORT=3003 LOCALE=en    # Start with custom port and locale"
	@echo "  make validate-quick               # Fast validation before commit"
	@echo "  make build && make serve          # Build and preview production site"
	@echo ""

#
# Development Commands
#

install: ## Install project dependencies
	@echo "$(CYAN)Installing dependencies...$(RESET)"
	@yarn install
	@echo "$(GREEN)✓ Dependencies installed successfully$(RESET)"

start: ## Start development server (use PORT=3003 LOCALE=en to customize)
	@echo "$(CYAN)Starting development server...$(RESET)"
	@echo "  Host: $(HOST)"
	@echo "  Port: $(PORT)"
	@echo "  Locale: $(LOCALE)"
	@yarn start -- --host $(HOST) --port $(PORT) --locale $(LOCALE)

build: ## Build production site
	@echo "$(CYAN)Building production site...$(RESET)"
	@yarn build
	@echo "$(GREEN)✓ Build completed successfully$(RESET)"
	@echo "  Output: $(shell pwd)/build/"

serve: ## Serve built production site locally (requires prior build)
	@if [ ! -d "build" ]; then \
		echo "$(RED)✗ Error: build/ directory not found$(RESET)"; \
		echo "  Run 'make build' first"; \
		exit 1; \
	fi
	@echo "$(CYAN)Serving production site...$(RESET)"
	@yarn serve -- --host $(HOST) --port $(PORT)

clean: ## Clean build artifacts and cache
	@echo "$(CYAN)Cleaning build artifacts...$(RESET)"
	@rm -rf build/
	@rm -rf .docusaurus/
	@rm -rf node_modules/.cache/
	@yarn clear
	@echo "$(GREEN)✓ Clean completed$(RESET)"

#
# Validation Commands
#

validate: ## Run all validation checks (markdown + build)
	@echo "$(CYAN)Running all validations...$(RESET)"
	@yarn validate:all
	@echo "$(GREEN)✓ All validations passed$(RESET)"

validate-md: ## Run markdown linting only
	@echo "$(CYAN)Running markdown validation...$(RESET)"
	@yarn validate:md
	@echo "$(GREEN)✓ Markdown validation passed$(RESET)"

validate-build: ## Run build validation (includes link checking)
	@echo "$(CYAN)Running build validation...$(RESET)"
	@yarn validate:build
	@echo "$(GREEN)✓ Build validation completed$(RESET)"

validate-quick: ## Fast validation (markdown only, quiet mode)
	@echo "$(CYAN)Running quick validation...$(RESET)"
	@yarn validate:quick
	@echo "$(GREEN)✓ Quick validation passed$(RESET)"

#
# Utility Commands
#

check-versions: ## Verify system meets minimum requirements
	@echo "$(CYAN)Checking system requirements...$(RESET)"
	@echo -n "  Platform: "
	@if uname -s | grep -qE 'Linux|Darwin'; then \
		echo "$(GREEN)✓ $(shell uname -s)$(RESET)"; \
	else \
		echo "$(RED)✗ Unsupported (Windows detected)$(RESET)"; \
		echo "$(YELLOW)  Please use WSL2 or a Linux VM$(RESET)"; \
		exit 1; \
	fi
	@echo -n "  Node.js: "
	@if node --version | grep -qE 'v(1[8-9]|[2-9][0-9])'; then \
		echo "$(GREEN)✓ $(shell node --version)$(RESET)"; \
	else \
		echo "$(RED)✗ $(shell node --version) (requires >=18.0)$(RESET)"; \
		exit 1; \
	fi
	@echo -n "  Yarn: "
	@if command -v yarn >/dev/null 2>&1; then \
		echo "$(GREEN)✓ $(shell yarn --version)$(RESET)"; \
	else \
		echo "$(RED)✗ Not installed$(RESET)"; \
		echo "$(YELLOW)  Install: npm install -g yarn$(RESET)"; \
		exit 1; \
	fi
	@echo "$(GREEN)✓ All requirements met$(RESET)"

check: check-versions ## Run comprehensive health check
	@echo ""
	@echo "$(CYAN)Checking dependencies...$(RESET)"
	@if [ ! -d "node_modules" ]; then \
		echo "$(YELLOW)  Dependencies not installed, installing...$(RESET)"; \
		make install; \
	else \
		echo "$(GREEN)✓ Dependencies installed$(RESET)"; \
	fi
	@echo ""
	@echo "$(CYAN)Running validation tests...$(RESET)"
	@make validate-quick
	@echo ""
	@echo "$(GREEN)✓ Health check passed$(RESET)"

version: ## Display project and framework versions
	@echo "$(CYAN)Version Information:$(RESET)"
	@echo "  Project: Websoft9 Handbook"
	@echo "  Node.js: $(shell node --version)"
	@echo "  Yarn: $(shell yarn --version)"
	@if [ -f "package.json" ]; then \
		echo "  Docusaurus: $(shell node -p "require('./package.json').dependencies['@docusaurus/core']")"; \
	fi
	@echo "  Platform: $(shell uname -s) $(shell uname -m)"
