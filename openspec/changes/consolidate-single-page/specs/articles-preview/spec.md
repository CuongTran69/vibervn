## REMOVED Requirements

### Requirement: Articles preview page
**Reason**: Consolidated into single-page landing. All articles are now displayed on the home page.
**Migration**: All article content is available on the home page.

### Requirement: Articles preview on home page
**Reason**: Replaced by full articles display. No longer a "preview" — all articles shown directly.
**Migration**: See modified requirements below.

## MODIFIED Requirements

### Requirement: Article preview cards
The system SHALL display all articles as cards on the home page with title, excerpt, category badge, and external link.

#### Scenario: Card displays article info
- **WHEN** user views an article card on the home page
- **THEN** the card shows article title, brief excerpt, and category badge

#### Scenario: Cards are visually consistent
- **WHEN** user views multiple article cards on the home page
- **THEN** all cards have consistent styling and layout

### Requirement: Redirect to Gateway
The system SHALL open external article URLs when users click on article cards.

#### Scenario: Click article card
- **WHEN** user clicks on an article card on the home page
- **THEN** the full article opens in a new tab at its external URL

### Requirement: Static article data
The system SHALL use static data for all article cards (no API fetching required).

#### Scenario: Articles load without API
- **WHEN** user views the articles section on home page
- **THEN** article data is loaded from static data files without external API calls

