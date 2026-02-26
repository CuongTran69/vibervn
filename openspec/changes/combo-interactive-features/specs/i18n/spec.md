## MODIFIED Requirements

### Requirement: Translation key structure
The i18n system SHALL include translation keys for all user-facing text across the application, including the new interactive features (terminal playground, keyboard shortcuts, konami easter egg).

#### Scenario: Terminal playground keys exist
- **WHEN** the terminal playground component renders
- **THEN** it can access translation keys under the `terminal` namespace for welcome message, command responses, error messages, and section title

#### Scenario: Keyboard shortcuts keys exist
- **WHEN** the keyboard shortcuts help modal renders
- **THEN** it can access translation keys under the `shortcuts` namespace for modal title, shortcut descriptions, and footer hint

#### Scenario: Konami easter egg keys exist
- **WHEN** the konami easter egg triggers
- **THEN** it can access translation keys under the `konami` namespace for the activation message

#### Scenario: All keys available in both locales
- **WHEN** the locale is "vi" or "en"
- **THEN** all terminal, shortcuts, and konami translation keys are available and non-empty

