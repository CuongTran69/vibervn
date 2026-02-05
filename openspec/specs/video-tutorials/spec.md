## ADDED Requirements

### Requirement: Video tutorials page
The system SHALL provide a dedicated page for video tutorials at `/[locale]/videos`.

#### Scenario: Access videos page
- **WHEN** user navigates to `/vi/videos` or `/en/videos`
- **THEN** a page displaying video tutorials is shown

### Requirement: YouTube video embedding
The system SHALL embed YouTube videos for setup guides and tutorials.

#### Scenario: Video displays correctly
- **WHEN** user views the videos page
- **THEN** YouTube videos are embedded and playable directly on the page

#### Scenario: Video responsive display
- **WHEN** user views videos on different screen sizes
- **THEN** video embeds resize appropriately to fit the viewport

### Requirement: Video lazy loading
The system SHALL lazy load video embeds to improve page performance.

#### Scenario: Videos load on scroll
- **WHEN** user scrolls to a video that was below the fold
- **THEN** the video iframe loads only when it enters the viewport

#### Scenario: Initial page load performance
- **WHEN** user loads the videos page
- **THEN** only videos in the initial viewport are loaded immediately

### Requirement: Video categorization
The system SHALL organize videos by category (e.g., Setup Guides, Tool Tutorials, Tips & Tricks).

#### Scenario: Videos grouped by category
- **WHEN** user views the videos page
- **THEN** videos are organized into clearly labeled categories

### Requirement: Videos preview on home page
The system SHALL display a preview section of videos on the home page.

#### Scenario: Home page video preview
- **WHEN** user views the home page
- **THEN** 2-3 featured video tutorials are displayed

#### Scenario: Link to full videos page
- **WHEN** user views the video preview section on home page
- **THEN** a link to view all videos is available

