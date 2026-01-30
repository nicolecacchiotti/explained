export interface ResourceLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: "lightbulb" | "message" | "chart" | "users";
}
