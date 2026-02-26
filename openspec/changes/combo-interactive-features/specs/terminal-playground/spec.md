## ADDED Requirements

### Requirement: Terminal section renders on homepage
The system SHALL render an interactive terminal playground section between the QuickStart and Tools sections on the homepage. The section SHALL have `id="terminal"` for anchor navigation.

#### Scenario: Terminal section visible on page load
- **WHEN** user loads the homepage
- **THEN** the terminal playground section is visible between QuickStart and Tools sections
- **THEN** the terminal displays a welcome message and blinking cursor prompt

### Requirement: Terminal accepts and processes commands
The system SHALL provide an input field that accepts text commands. When the user presses Enter, the system SHALL parse the command and display the appropriate response.

#### Scenario: User types a valid command
- **WHEN** user types "help" in the terminal input and presses Enter
- **THEN** the terminal displays a list of available commands with descriptions

#### Scenario: User types an unknown command
- **WHEN** user types "foo" in the terminal input and presses Enter
- **THEN** the terminal displays an error message like "Command not found: foo. Type 'help' for available commands."

#### Scenario: Empty input
- **WHEN** user presses Enter with empty input
- **THEN** a new prompt line appears with no output

### Requirement: Terminal supports specific commands
The system SHALL support the following commands: `help`, `list-tools`, `compare <a> <b>`, `connect <tool>`, `clear`, `cat`, `sudo rm -rf /`.

#### Scenario: help command
- **WHEN** user types "help"
- **THEN** terminal displays all available commands with brief descriptions

#### Scenario: list-tools command
- **WHEN** user types "list-tools"
- **THEN** terminal displays all available AI tools with their status (available/coming-soon)

#### Scenario: compare command with two tools
- **WHEN** user types "compare augment claude"
- **THEN** terminal displays a side-by-side comparison of the two tools' strengths and best-for info

#### Scenario: compare command with invalid tool
- **WHEN** user types "compare augment nonexistent"
- **THEN** terminal displays an error that the tool was not found

#### Scenario: connect command with valid tool
- **WHEN** user types "connect augment"
- **THEN** terminal displays the gateway URL for that tool

#### Scenario: connect command with coming-soon tool
- **WHEN** user types "connect ampcode"
- **THEN** terminal displays a message that the tool is coming soon

#### Scenario: clear command
- **WHEN** user types "clear"
- **THEN** all previous terminal output is cleared, only the prompt remains

#### Scenario: cat easter egg
- **WHEN** user types "cat"
- **THEN** terminal displays a fun cat-related ASCII art or message

#### Scenario: sudo rm -rf / easter egg
- **WHEN** user types "sudo rm -rf /"
- **THEN** terminal displays a humorous denial message

### Requirement: Terminal displays command history
The system SHALL maintain a visible history of commands and their outputs in the terminal display area. The display SHALL auto-scroll to the latest output.

#### Scenario: Multiple commands show history
- **WHEN** user types "help" then "list-tools"
- **THEN** both commands and their outputs are visible in order, with the latest at the bottom

### Requirement: Terminal supports dark mode
The terminal component SHALL render correctly in both light and dark themes with appropriate contrast.

#### Scenario: Terminal in dark mode
- **WHEN** the site theme is set to dark
- **THEN** the terminal uses dark background with green/light text

#### Scenario: Terminal in light mode
- **WHEN** the site theme is set to light
- **THEN** the terminal uses dark background with green text (terminal always has dark bg)

### Requirement: Terminal responses are bilingual
All terminal command responses SHALL be displayed in the current locale (vi or en).

#### Scenario: Terminal in Vietnamese locale
- **WHEN** locale is "vi" and user types "help"
- **THEN** command descriptions are displayed in Vietnamese

#### Scenario: Terminal in English locale
- **WHEN** locale is "en" and user types "help"
- **THEN** command descriptions are displayed in English

