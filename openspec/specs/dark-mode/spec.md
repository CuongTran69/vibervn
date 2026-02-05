## ADDED Requirements

### Requirement: Theme switching functionality
The system SHALL provide theme switching functionality with three options: Light, Dark, and System (follows OS preference).

#### Scenario: User selects Light theme
- **WHEN** user clicks on Light theme option in theme toggle
- **THEN** the entire site displays with light color scheme
- **AND** the preference is persisted in localStorage

#### Scenario: User selects Dark theme
- **WHEN** user clicks on Dark theme option in theme toggle
- **THEN** the entire site displays with dark color scheme
- **AND** the preference is persisted in localStorage

#### Scenario: User selects System theme
- **WHEN** user clicks on System theme option in theme toggle
- **THEN** the site follows the operating system's color scheme preference
- **AND** the preference is persisted in localStorage

#### Scenario: Theme persists across sessions
- **WHEN** user returns to the site after closing browser
- **THEN** the previously selected theme is automatically applied

### Requirement: Theme toggle in header
The system SHALL display a theme toggle control in the site header that allows users to switch between themes.

#### Scenario: Theme toggle visibility
- **WHEN** user views any page on the site
- **THEN** a theme toggle control is visible in the header

#### Scenario: Theme toggle shows current state
- **WHEN** user views the theme toggle
- **THEN** the toggle indicates the currently active theme option

### Requirement: No flash on page load
The system SHALL prevent flash of incorrect theme when page loads.

#### Scenario: Page load with saved preference
- **WHEN** user loads a page with a saved theme preference
- **THEN** the correct theme is applied immediately without visible flash of wrong theme

#### Scenario: Page load with system preference
- **WHEN** user loads a page with System theme selected
- **THEN** the OS-preferred theme is applied immediately without visible flash

