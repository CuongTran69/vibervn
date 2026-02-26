## ADDED Requirements

### Requirement: Global keyboard shortcuts are active
The system SHALL listen for keyboard events globally and trigger navigation or actions based on predefined shortcut keys.

#### Scenario: Shortcuts work on page load
- **WHEN** user loads the homepage and presses "?"
- **THEN** the keyboard shortcuts help modal appears

### Requirement: Two-key navigation shortcuts
The system SHALL support two-key navigation shortcuts where pressing `g` followed by a second key within 1 second scrolls to the corresponding section.

#### Scenario: g then h scrolls to hero
- **WHEN** user presses "g" then "h" within 1 second
- **THEN** the page scrolls smoothly to the hero section

#### Scenario: g then t scrolls to tools
- **WHEN** user presses "g" then "t" within 1 second
- **THEN** the page scrolls smoothly to the tools section

#### Scenario: g then v scrolls to videos
- **WHEN** user presses "g" then "v" within 1 second
- **THEN** the page scrolls smoothly to the videos section

#### Scenario: g then a scrolls to articles
- **WHEN** user presses "g" then "a" within 1 second
- **THEN** the page scrolls smoothly to the articles section

#### Scenario: g then c scrolls to community
- **WHEN** user presses "g" then "c" within 1 second
- **THEN** the page scrolls smoothly to the community section

#### Scenario: g timeout resets
- **WHEN** user presses "g" and waits more than 1 second
- **THEN** the navigation mode resets and the next key is treated normally

### Requirement: Single-key action shortcuts
The system SHALL support single-key shortcuts for common actions.

#### Scenario: ? shows help modal
- **WHEN** user presses "?"
- **THEN** the shortcuts help modal overlay appears

#### Scenario: d toggles dark mode
- **WHEN** user presses "d"
- **THEN** the theme toggles between light and dark

#### Scenario: l switches language
- **WHEN** user presses "l"
- **THEN** the locale switches between vi and en

#### Scenario: / focuses terminal
- **WHEN** user presses "/"
- **THEN** the terminal playground input receives focus and the page scrolls to it

#### Scenario: Escape closes modal
- **WHEN** the help modal is open and user presses Escape
- **THEN** the modal closes

### Requirement: Shortcuts disabled during text input
The system SHALL NOT trigger shortcuts when the user is typing in an input field, textarea, select, or contentEditable element.

#### Scenario: Typing in terminal does not trigger shortcuts
- **WHEN** user is focused on the terminal input and presses "d"
- **THEN** the character "d" is typed in the input, theme does NOT toggle

#### Scenario: Shortcuts resume after blur
- **WHEN** user clicks outside the terminal input and presses "d"
- **THEN** the theme toggles

### Requirement: Help modal displays all shortcuts
The help modal SHALL display all available shortcuts grouped by category (Navigation, Actions) with their key combinations and descriptions.

#### Scenario: Modal content is complete
- **WHEN** user opens the help modal
- **THEN** all navigation shortcuts (g+h, g+t, g+v, g+a, g+c) and action shortcuts (?, d, l, /, Esc) are listed

### Requirement: Help modal is accessible
The help modal SHALL have proper ARIA attributes and support keyboard dismissal.

#### Scenario: Modal has aria attributes
- **WHEN** the help modal is open
- **THEN** it has `role="dialog"`, `aria-modal="true"`, and `aria-label`

#### Scenario: Modal closes on Escape
- **WHEN** the help modal is open and user presses Escape
- **THEN** the modal closes and focus returns to the previously focused element

### Requirement: Footer shows shortcut hint
The footer SHALL display a subtle indicator that keyboard shortcuts are available.

#### Scenario: Hint visible in footer
- **WHEN** user views the footer
- **THEN** a small text like "Press ? for shortcuts" is visible

### Requirement: Shortcuts support bilingual labels
The help modal labels and descriptions SHALL be displayed in the current locale.

#### Scenario: Modal in Vietnamese
- **WHEN** locale is "vi" and user opens help modal
- **THEN** shortcut descriptions are in Vietnamese

#### Scenario: Modal in English
- **WHEN** locale is "en" and user opens help modal
- **THEN** shortcut descriptions are in English

