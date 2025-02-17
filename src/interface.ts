export type types =
  | "PushEvent"
  | "CreateEvent"
  | "DeleteEvent"
  | "ForkEvent"
  | "PublicEvent"
  | "WatchEvent"
  | "PullRequestEvent"
  | "PullRequestReviewEvent"
  | "PullRequestReviewCommentEvent"
  | "IssuesEvent"
  | "IssueCommentEvent"
  | "MemberEvent"
  | "TeamAddEvent"
  | "OrgBlockEvent"
  | "WorkflowRunEvent"
  | "CheckRunEvent"
  | "CheckSuiteEvent"
  | "GollumEvent"
  | "SecurityAdvisoryEvent"
  | "DependabotAlertEvent"
  | "RepositoryVulnerabilityAlertEvent"
  | "MarketplacePurchaseEvent"
  | "SponsorshipEvent";

export interface dataInterface {
  id: string;
  type: types;
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: "";
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    ref: null | string;
    ref_type: string;
    master_branch: string;
    description: null | string;
    pusher_type: string;
  };
  public: true;
  created_at: string;
}
