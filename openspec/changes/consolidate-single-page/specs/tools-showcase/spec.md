## REMOVED Requirements

### Requirement: Tools overview page
**Reason**: Consolidated into single-page landing. Tools are now displayed in full on the home page.
**Migration**: All tool content is available on the home page.

### Requirement: Tool detail pages
**Reason**: Consolidated into single-page landing. Full tool details (strengths, bestFor, products) are now shown inline on the home page.
**Migration**: All tool detail content is available on the home page.

### Requirement: Coming soon detail pages
**Reason**: No separate pages exist. Coming soon tools shown as badges on home page.
**Migration**: Coming soon tools displayed on home page.

### Requirement: Tools preview on home page
**Reason**: Replaced by full tool display. No longer a "preview" — all tool details are shown directly.
**Migration**: See modified requirement "Full tool display on home page".

### Requirement: Gateway CTA on tool pages
**Reason**: Tool pages removed. Gateway CTA is now inline with each tool card on home page.
**Migration**: Each tool card on home page includes gateway CTA.

## MODIFIED Requirements

### Requirement: Available tools display
The system SHALL display all available tools (Augment Code, Claude Code, OpenCode, OpenClaw) with full details on the home page, including: name, status badge, tagline, description, strengths list, bestFor list, products tags, gateway CTA button, and homepage link `[ ↗ ]`.

#### Scenario: Augment Code displayed with full details
- **WHEN** user views the tools section on home page
- **THEN** Augment Code is displayed with name, tagline, description, 4 strengths, 4 bestFor items, products (VS Code Extension, JetBrains Plugin, Neovim Plugin, Auggie CLI), gateway CTA, and `[ ↗ ]` link to augmentcode.com

#### Scenario: Claude Code displayed with full details
- **WHEN** user views the tools section on home page
- **THEN** Claude Code is displayed with name, tagline, description, 4 strengths, 4 bestFor items, products (CLI), gateway CTA, and `[ ↗ ]` link to claude.com

#### Scenario: OpenCode displayed with full details
- **WHEN** user views the tools section on home page
- **THEN** OpenCode is displayed with name, tagline, description, 4 strengths, 4 bestFor items, products (CLI, Terminal UI), gateway CTA, and `[ ↗ ]` link to opencode.ai

#### Scenario: OpenClaw displayed with full details
- **WHEN** user views the tools section on home page
- **THEN** OpenClaw is displayed with name, tagline, description, 4 strengths, 4 bestFor items, products (CLI, WebChat, macOS App, iOS/Android Node), gateway CTA, and `[ ↗ ]` link to openclaw.ai

### Requirement: Coming soon tools placeholder
The system SHALL display coming soon tools (AmpCode, Antigravity) with "COMING SOON" badges on the home page.

#### Scenario: Coming soon tools displayed on home page
- **WHEN** user views the tools section on home page
- **THEN** AmpCode and Antigravity are shown with "COMING SOON" badges

### Requirement: Tool information structure
Each available tool card on the home page SHALL display: name, status badge, tagline, description, strengths (bullet list), bestFor (bullet list), products (inline tags), gateway CTA button, and `[ ↗ ]` homepage link.

#### Scenario: Available tool full card
- **WHEN** user views an available tool on the home page
- **THEN** the card shows all fields: name, status, tagline, description, strengths, bestFor, products, gateway CTA, homepage link

#### Scenario: Coming soon tool minimal card
- **WHEN** user views a coming soon tool on the home page
- **THEN** only name and "COMING SOON" badge are shown

