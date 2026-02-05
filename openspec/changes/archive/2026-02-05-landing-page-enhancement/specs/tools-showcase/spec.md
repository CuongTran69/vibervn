## ADDED Requirements

### Requirement: Tools overview page
The system SHALL provide a tools overview page at `/[locale]/tools` displaying all AI coding tools.

#### Scenario: Access tools page
- **WHEN** user navigates to `/vi/tools` or `/en/tools`
- **THEN** a page displaying all AI coding tools is shown

#### Scenario: Tools displayed in grid
- **WHEN** user views the tools page
- **THEN** tools are displayed in a responsive grid layout

### Requirement: Available tools display
The system SHALL prominently display currently available tools: Augment Code and Claude Code.

#### Scenario: Augment Code displayed
- **WHEN** user views the tools page
- **THEN** Augment Code is displayed with its products (Extension, Auggie CLI) and strengths

#### Scenario: Claude Code displayed
- **WHEN** user views the tools page
- **THEN** Claude Code is displayed with its products (CLI) and strengths

### Requirement: Tool detail pages
The system SHALL provide individual detail pages for each tool at `/[locale]/tools/[slug]`.

#### Scenario: Augment Code detail page
- **WHEN** user navigates to `/vi/tools/augment-code`
- **THEN** detailed information about Augment Code is displayed

#### Scenario: Claude Code detail page
- **WHEN** user navigates to `/vi/tools/claude-code`
- **THEN** detailed information about Claude Code is displayed

### Requirement: Coming soon tools placeholder
The system SHALL display placeholder cards for upcoming tools: OpenCode, AmpCode, Antigravity.

#### Scenario: Coming soon tools displayed
- **WHEN** user views the tools page
- **THEN** OpenCode, AmpCode, and Antigravity are shown with "Coming Soon" badges

#### Scenario: Coming soon detail pages
- **WHEN** user navigates to `/vi/tools/opencode`
- **THEN** a "Coming Soon" placeholder page is displayed

### Requirement: Tool information structure
Each tool SHALL display: name, status (available/coming soon), products, strengths, and best use cases.

#### Scenario: Available tool information
- **WHEN** user views an available tool card
- **THEN** the card shows name, products list, strengths, and best use cases

#### Scenario: Coming soon tool information
- **WHEN** user views a coming soon tool card
- **THEN** the card shows name and "Coming Soon" status with minimal placeholder info

### Requirement: Tools preview on home page
The system SHALL display a preview section of tools on the home page.

#### Scenario: Home page tools preview
- **WHEN** user views the home page
- **THEN** quick preview cards of available tools are displayed

#### Scenario: Link to full tools page
- **WHEN** user views the tools preview section on home page
- **THEN** a link to view all tools is available

### Requirement: Gateway CTA on tool pages
Each tool page SHALL include a call-to-action to access the Gateway for purchasing/setup.

#### Scenario: CTA button present
- **WHEN** user views a tool detail page
- **THEN** a prominent CTA button linking to viber.vn is displayed

