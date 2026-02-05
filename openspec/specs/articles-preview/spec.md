## ADDED Requirements

### Requirement: Articles preview page
The system SHALL provide a dedicated page for articles preview at `/[locale]/articles`.

#### Scenario: Access articles page
- **WHEN** user navigates to `/vi/articles` or `/en/articles`
- **THEN** a page displaying article preview cards is shown

### Requirement: Article preview cards
The system SHALL display articles as preview cards with title, excerpt, and thumbnail.

#### Scenario: Card displays article info
- **WHEN** user views an article card
- **THEN** the card shows article title, brief excerpt, and thumbnail image

#### Scenario: Cards are visually consistent
- **WHEN** user views multiple article cards
- **THEN** all cards have consistent styling and layout

### Requirement: Redirect to Gateway
The system SHALL redirect users to the Gateway (viber.vn) when they click on an article card.

#### Scenario: Click article card
- **WHEN** user clicks on an article preview card
- **THEN** user is redirected to the full article on viber.vn in a new tab

#### Scenario: External link indication
- **WHEN** user views an article card
- **THEN** there is a visual indicator that the link goes to an external site

### Requirement: Articles preview on home page
The system SHALL display a preview section of articles on the home page.

#### Scenario: Home page articles preview
- **WHEN** user views the home page
- **THEN** 3-4 featured article cards are displayed

#### Scenario: Link to full articles page
- **WHEN** user views the articles preview section on home page
- **THEN** a link to view all articles is available

### Requirement: Static article data
The system SHALL use static data for article previews (no API fetching required).

#### Scenario: Articles load without API
- **WHEN** user views the articles page
- **THEN** article data is loaded from static data files without external API calls

