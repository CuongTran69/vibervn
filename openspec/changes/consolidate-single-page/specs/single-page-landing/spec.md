## ADDED Requirements

### Requirement: Single-page layout with all content sections
The system SHALL render all site content on a single home page at `/[locale]/` with sections in order: Hero, Gateway Info, Quick Start, Tools, Videos, Articles, Community, CTA.

#### Scenario: Home page displays all sections
- **WHEN** user navigates to `/vi/` or `/en/`
- **THEN** all content sections are visible on a single scrollable page

#### Scenario: No sub-page routes exist
- **WHEN** user navigates to `/vi/tools`, `/vi/videos`, `/vi/articles`, `/vi/community`, `/vi/docs`, `/vi/pricing`, or `/vi/products`
- **THEN** a 404 page is returned

### Requirement: Quick Start section on home page
The system SHALL display a Quick Start guide section between Gateway Info and Tools sections, showing 4 numbered steps to get started.

#### Scenario: Quick Start steps displayed
- **WHEN** user views the home page
- **THEN** 4 numbered steps are shown: (1) visit viber.vn and create account, (2) get API key, (3) install extension and enter API key, (4) start using

### Requirement: Community section on home page
The system SHALL display a community section with Telegram group CTA between Articles and final CTA sections.

#### Scenario: Telegram CTA displayed
- **WHEN** user views the community section on home page
- **THEN** a Telegram join link/button pointing to `https://t.me/augmentsupporter` is displayed

### Requirement: No navigation links to removed pages
The system SHALL NOT contain any internal links to `/tools`, `/videos`, `/articles`, `/community`, `/docs`, `/pricing`, or `/products`.

#### Scenario: Header has no sub-page links
- **WHEN** user views the header navigation
- **THEN** no links to removed sub-pages are present

#### Scenario: No "view all" links on home page
- **WHEN** user views any content section on home page
- **THEN** no "Xem tất cả →" or "View all →" links to sub-pages are present

