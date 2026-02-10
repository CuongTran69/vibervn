## MODIFIED Requirements

### Requirement: Theme switching functionality
The system SHALL provide theme switching functionality with two options: Light and Dark.

#### Scenario: User selects Light theme
- **WHEN** user clicks on Light theme option in theme toggle
- **THEN** the entire site displays with light color scheme
- **AND** the preference is persisted in localStorage

#### Scenario: User selects Dark theme
- **WHEN** user clicks on Dark theme option in theme toggle
- **THEN** the entire site displays with dark color scheme
- **AND** the preference is persisted in localStorage

#### Scenario: Theme persists across sessions
- **WHEN** user returns to the site after closing browser
- **THEN** the previously selected theme is automatically applied

## REMOVED Requirements

### Requirement: System theme option
**Reason**: System/auto theme option removed to simplify toggle. Provider already had `enableSystem={false}`.
**Migration**: Users who had "system" selected will default to "light" theme.

