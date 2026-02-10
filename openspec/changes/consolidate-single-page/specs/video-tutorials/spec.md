## REMOVED Requirements

### Requirement: Video tutorials page
**Reason**: Consolidated into single-page landing. All videos are now displayed on the home page.
**Migration**: All video content is available on the home page.

### Requirement: Videos preview on home page
**Reason**: Replaced by full video display. No longer a "preview" — all videos shown directly.
**Migration**: See modified requirements below.

## MODIFIED Requirements

### Requirement: YouTube video embedding
The system SHALL embed YouTube video thumbnails on the home page for all videos, linking to YouTube.

#### Scenario: Video thumbnail displays correctly
- **WHEN** user views the videos section on home page
- **THEN** YouTube video thumbnails are displayed for all videos

#### Scenario: Video responsive display
- **WHEN** user views videos on different screen sizes
- **THEN** video cards resize appropriately to fit the viewport

### Requirement: Video lazy loading
The system SHALL lazy load video thumbnail images to improve page performance.

#### Scenario: Thumbnails load on scroll
- **WHEN** user scrolls to a video thumbnail that was below the fold
- **THEN** the thumbnail image loads only when it enters the viewport

### Requirement: Video categorization
The system SHALL organize all videos by category (Setup, Tutorials, Tips) on the home page.

#### Scenario: Videos grouped by category on home page
- **WHEN** user views the videos section on home page
- **THEN** all videos are organized into clearly labeled categories

