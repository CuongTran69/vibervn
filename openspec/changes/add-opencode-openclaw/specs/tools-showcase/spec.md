## MODIFIED Requirements

### Requirement: Available tools display
The system SHALL prominently display currently available tools: Augment Code, Claude Code, OpenCode, and OpenClaw.

#### Scenario: Augment Code displayed
- **WHEN** user views the tools page
- **THEN** Augment Code is displayed with its products (Extension, Auggie CLI) and strengths

#### Scenario: Claude Code displayed
- **WHEN** user views the tools page
- **THEN** Claude Code is displayed with its products (CLI) and strengths

#### Scenario: OpenCode displayed
- **WHEN** user views the tools page
- **THEN** OpenCode is displayed with status "SUPPORTED", its products, strengths, and best use cases

#### Scenario: OpenClaw displayed
- **WHEN** user views the tools page
- **THEN** OpenClaw is displayed with status "SUPPORTED", its products, strengths, and best use cases

### Requirement: Tool detail pages
The system SHALL provide individual detail pages for each available tool at `/[locale]/tools/[slug]`.

#### Scenario: Augment Code detail page
- **WHEN** user navigates to `/vi/tools/augment-code`
- **THEN** detailed information about Augment Code is displayed

#### Scenario: Claude Code detail page
- **WHEN** user navigates to `/vi/tools/claude-code`
- **THEN** detailed information about Claude Code is displayed

#### Scenario: OpenCode detail page
- **WHEN** user navigates to `/vi/tools/opencode`
- **THEN** detailed information about OpenCode is displayed including description, tagline, products, strengths, best use cases, and a CTA linking to the Claude Code gateway

#### Scenario: OpenClaw detail page
- **WHEN** user navigates to `/vi/tools/openclaw`
- **THEN** detailed information about OpenClaw is displayed including description, tagline, products, strengths, best use cases, and a CTA linking to the Claude Code gateway

### Requirement: Coming soon tools placeholder
The system SHALL display placeholder cards for upcoming tools: AmpCode, Antigravity.

#### Scenario: Coming soon tools displayed
- **WHEN** user views the tools page
- **THEN** AmpCode and Antigravity are shown with "Coming Soon" badges

#### Scenario: Coming soon detail pages blocked
- **WHEN** user navigates to `/vi/tools/ampcode` or `/vi/tools/antigravity`
- **THEN** a 404 page is displayed (coming-soon tools have no detail pages)

### Requirement: Tools preview on home page
The system SHALL display a preview section of tools on the home page including all available tools.

#### Scenario: Home page tools preview
- **WHEN** user views the home page
- **THEN** preview cards of all available tools (Augment Code, Claude Code, OpenCode, OpenClaw) are displayed

#### Scenario: Coming soon tools on home page
- **WHEN** user views the home page tools section
- **THEN** AmpCode and Antigravity are shown as coming-soon badges below the available tools

### Requirement: Gateway CTA on tool pages
Each available tool page SHALL include a call-to-action to access the Gateway.

#### Scenario: OpenCode CTA links to Claude gateway
- **WHEN** user views the OpenCode detail page
- **THEN** the CTA button links to `https://viber.vn/#/claude-gateway`

#### Scenario: OpenClaw CTA links to Claude gateway
- **WHEN** user views the OpenClaw detail page
- **THEN** the CTA button links to `https://viber.vn/#/claude-gateway`

## ADDED Requirements

### Requirement: OpenCode tool data
The system SHALL store OpenCode tool data with: slug `opencode`, status `available`, gatewayUrl pointing to Claude Code gateway, bilingual description, tagline, products list, strengths, and bestFor arrays.

#### Scenario: OpenCode data completeness
- **WHEN** the tools data is loaded
- **THEN** OpenCode has all required fields: slug, name, status, gatewayUrl, description (vi/en), tagline (vi/en), products, strengths (vi/en), bestFor (vi/en)

### Requirement: OpenClaw tool data
The system SHALL store OpenClaw tool data with: slug `openclaw`, status `available`, gatewayUrl pointing to Claude Code gateway, bilingual description, tagline, products list, strengths, and bestFor arrays.

#### Scenario: OpenClaw data completeness
- **WHEN** the tools data is loaded
- **THEN** OpenClaw has all required fields: slug, name, status, gatewayUrl, description (vi/en), tagline (vi/en), products, strengths (vi/en), bestFor (vi/en)

### Requirement: Bilingual content for new tools
The system SHALL provide Vietnamese and English translations for all OpenCode and OpenClaw content displayed in the UI.

#### Scenario: OpenCode Vietnamese content
- **WHEN** user views OpenCode in Vietnamese locale
- **THEN** all OpenCode text (description, tagline, strengths, bestFor) is displayed in Vietnamese

#### Scenario: OpenClaw English content
- **WHEN** user views OpenClaw in English locale
- **THEN** all OpenClaw text (description, tagline, strengths, bestFor) is displayed in English

### Requirement: SEO metadata includes new tools
The system SHALL include OpenCode and OpenClaw in the tools page SEO metadata (title and description).

#### Scenario: Tools page SEO in Vietnamese
- **WHEN** search engine crawls `/vi/tools`
- **THEN** the page metadata mentions Augment Code, Claude Code, OpenCode, and OpenClaw

#### Scenario: Tools page SEO in English
- **WHEN** search engine crawls `/en/tools`
- **THEN** the page metadata mentions Augment Code, Claude Code, OpenCode, and OpenClaw

