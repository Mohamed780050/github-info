export interface dataInterface {
  id: string;
  type:
    | "PushEvent"
    | "CreateEvent"
    | "DeleteEvent"
    | "ForkEvent"
    | "PublicEvent"
    | "WatchEvent";
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
