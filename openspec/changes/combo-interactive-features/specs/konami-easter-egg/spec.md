## ADDED Requirements

### Requirement: Konami Code sequence detection
The system SHALL detect the Konami Code key sequence (ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, KeyB, KeyA) and trigger the easter egg effect.

#### Scenario: Correct sequence triggers effect
- **WHEN** user types the complete Konami Code sequence ↑↑↓↓←→←→BA
- **THEN** the matrix rain animation effect is triggered

#### Scenario: Partial sequence resets on wrong key
- **WHEN** user types ↑↑↓↓← then presses "X"
- **THEN** the sequence resets and no effect is triggered

#### Scenario: Sequence works regardless of other key presses
- **WHEN** user types random keys then the complete Konami Code sequence
- **THEN** the effect is triggered (sequence detection resets on wrong key, not on unrelated keys between attempts)

### Requirement: Matrix rain animation effect
The system SHALL display a matrix rain animation (green characters falling down the screen) when the Konami Code is triggered.

#### Scenario: Animation covers full viewport
- **WHEN** the Konami Code is triggered
- **THEN** a full-screen overlay with falling green characters appears over the page content

#### Scenario: Animation auto-dismisses
- **WHEN** the matrix rain animation is active
- **THEN** it automatically dismisses after 5 seconds

#### Scenario: User can dismiss early
- **WHEN** the matrix rain animation is active and user clicks anywhere or presses any key
- **THEN** the animation dismisses immediately

### Requirement: Developer mode message
The system SHALL display a "DEVELOPER MODE ACTIVATED" message during the matrix rain effect.

#### Scenario: Message appears during animation
- **WHEN** the Konami Code triggers the matrix rain
- **THEN** a centered text "DEVELOPER MODE ACTIVATED" appears over the rain effect

#### Scenario: Message is bilingual
- **WHEN** locale is "vi" and Konami Code is triggered
- **THEN** the message is displayed in Vietnamese

### Requirement: Reduced motion support
The system SHALL respect the `prefers-reduced-motion` user preference.

#### Scenario: Reduced motion enabled
- **WHEN** user has `prefers-reduced-motion: reduce` set and triggers Konami Code
- **THEN** instead of matrix rain, a simple text flash "DEVELOPER MODE ACTIVATED" appears briefly without animation

### Requirement: Easter egg does not interfere with page
The easter egg effect SHALL not break page layout or functionality.

#### Scenario: Page functional after animation
- **WHEN** the matrix rain animation completes or is dismissed
- **THEN** the page returns to its normal state with all functionality intact

#### Scenario: Easter egg does not block keyboard shortcuts
- **WHEN** the matrix rain is NOT active
- **THEN** the Konami Code detector does not interfere with keyboard shortcuts or terminal input

