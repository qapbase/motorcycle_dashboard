// Order here drives both the sidebar and the mobile tab strip.
export const TABS = [
  {
    id: "live",
    label: "Live Monitoring",
    shortLabel: "Live",
    description: "Real-time motorcycle dynamic inputs are displayed during the ride, while the complete synchronized dataset is recorded locally for post-session analytics."
  },
  {
    id: "analytics",
    label: "Performance Analytics",
    shortLabel: "Analytics",
    description: "Post-session telemetry line graphs, scoring summaries, and learning trends for objective rider evaluation."
  },
  {
    id: "timeline",
    label: "Riding Timeline",
    shortLabel: "Timeline",
    description: "Timestamped machine learning classification results for Straight, Cruising, Curve Entry, Curve, Curve Exit, and Stop."
  },
  {
    id: "feedback",
    label: "Training Feedback",
    shortLabel: "Feedback",
    description: "Actionable recommendations generated from measurable dynamic control and body position patterns."
  },
  {
    id: "sessions",
    label: "Session History",
    shortLabel: "History",
    description: "Multi-session performance records for monitoring rider improvement over time."
  },
  {
    id: "pipeline",
    label: "System Pipeline",
    shortLabel: "Pipeline",
    description: "End-to-end architecture from sensing and local recording to backend classification and feedback generation."
  },
  {
    id: "settings",
    label: "Settings",
    shortLabel: "Settings",
    description: "Configuration options for data acquisition, segmentation, storage, and rider profile management."
  }
];
