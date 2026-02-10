## MODIFIED Requirements

### Requirement: Available tools display
The system SHALL prominently display currently available tools: Augment Code, Claude Code, OpenCode, and OpenClaw. Each available tool card SHALL include a small monospace-style homepage icon link to the tool's official website.

#### Scenario: Augment Code displayed
- **WHEN** user views the tools page
- **THEN** Augment Code is displayed with its products (Extension, Auggie CLI) and strengths

#### Scenario: Claude Code displayed
- **WHEN** user views the tools page
- **THEN** Claude Code is displayed with its products (CLI) and strengths

#### Scenario: Homepage link displayed for available tool
- **WHEN** user views an available tool card that has a homepage URL configured
- **THEN** a small `[ ↗ ]` monospace-style link is displayed at the bottom of the card

#### Scenario: Homepage link opens official website
- **WHEN** user clicks the `[ ↗ ]` homepage link on a tool card
- **THEN** the tool's official homepage opens in a new browser tab

#### Scenario: No homepage link for coming-soon tools
- **WHEN** user views a coming-soon tool card
- **THEN** no homepage link icon is displayed

#### Scenario: No homepage link when URL not configured
- **WHEN** user views a tool card where `homepageUrl` is not set
- **THEN** no homepage link icon is displayed

## ADDED Requirements

### Requirement: Tool homepage URL data
Each available tool SHALL have an optional `homepageUrl` field containing the URL to its official homepage.

#### Scenario: Homepage URLs configured
- **WHEN** the tools data is loaded
- **THEN** the following homepage URLs are available:
  - Augment Code: `https://www.augmentcode.com/`
  - Claude Code: `https://claude.com/product/claude-code`
  - OpenCode: `https://opencode.ai/`
  - OpenClaw: `https://openclaw.ai/`

