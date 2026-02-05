## ADDED Requirements

### Requirement: Multi-language support
The system SHALL support two languages: Vietnamese (vi) and English (en), with Vietnamese as the default language.

#### Scenario: Default language is Vietnamese
- **WHEN** user visits the site without language preference
- **THEN** the site displays in Vietnamese

#### Scenario: All text content is translatable
- **WHEN** user switches language
- **THEN** all UI text, labels, and content are displayed in the selected language

### Requirement: Locale-based routing
The system SHALL use locale-prefixed URLs for all pages (e.g., `/vi/tools`, `/en/tools`).

#### Scenario: Vietnamese locale routing
- **WHEN** user navigates to `/vi/tools`
- **THEN** the tools page is displayed in Vietnamese

#### Scenario: English locale routing
- **WHEN** user navigates to `/en/tools`
- **THEN** the tools page is displayed in English

#### Scenario: Root URL redirect
- **WHEN** user visits the root URL `/`
- **THEN** user is redirected to `/vi/` (default locale)

### Requirement: Language switcher in header
The system SHALL display a language switcher control in the site header.

#### Scenario: Language switcher visibility
- **WHEN** user views any page on the site
- **THEN** a language switcher is visible in the header

#### Scenario: Switch from Vietnamese to English
- **WHEN** user clicks English option in language switcher while on `/vi/tools`
- **THEN** user is navigated to `/en/tools` with English content

#### Scenario: Switch from English to Vietnamese
- **WHEN** user clicks Vietnamese option in language switcher while on `/en/tools`
- **THEN** user is navigated to `/vi/tools` with Vietnamese content

### Requirement: Language preference persistence
The system SHALL remember user's language preference across sessions.

#### Scenario: Language persists across sessions
- **WHEN** user returns to the site after selecting English
- **THEN** the site displays in English

### Requirement: SEO for multiple languages
The system SHALL include proper SEO tags for multi-language support.

#### Scenario: Hreflang tags present
- **WHEN** search engine crawls any page
- **THEN** the page includes hreflang tags for both vi and en versions

#### Scenario: Canonical URLs per locale
- **WHEN** search engine crawls a page
- **THEN** the page has a canonical URL specific to its locale

