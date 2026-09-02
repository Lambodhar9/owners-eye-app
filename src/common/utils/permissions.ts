import { UserRole } from "../types";

export type Permission =
  | "DASHBOARD_VIEW"
  | "COLLECTION_VIEW"
  | "COLLECTION_EDIT"
  | "SHOW_VIEW"
  | "SHOW_EDIT"
  | "THEATRE_VIEW"
  | "USER_VIEW"
  | "USER_CREATE"
  | "USER_EDIT"
  | "USER_DELETE"
  | "ROLE_VIEW"
  | "ROLE_EDIT"
  | "REPORT_VIEW"
  | "REPORT_DOWNLOAD"
  | "AI_VIEW"
  | "ALERT_VIEW"
  | "SETTINGS_EDIT";

const permissions: Record<
  UserRole,
  Permission[]
> = {
  OWNER: [
    "DASHBOARD_VIEW",
    "COLLECTION_VIEW",
    "COLLECTION_EDIT",
    "SHOW_VIEW",
    "SHOW_EDIT",
    "THEATRE_VIEW",
    "USER_VIEW",
    "USER_CREATE",
    "USER_EDIT",
    "USER_DELETE",
    "ROLE_VIEW",
    "ROLE_EDIT",
    "REPORT_VIEW",
    "REPORT_DOWNLOAD",
    "AI_VIEW",
    "ALERT_VIEW",
    "SETTINGS_EDIT"
  ],

  MANAGER: [
    "DASHBOARD_VIEW",
    "COLLECTION_VIEW",
    "SHOW_VIEW",
    "SHOW_EDIT",
    "THEATRE_VIEW",
    "USER_VIEW",
    "REPORT_VIEW",
    "REPORT_DOWNLOAD",
    "AI_VIEW",
    "ALERT_VIEW"
  ],

  ACCOUNTANT: [
    "DASHBOARD_VIEW",
    "COLLECTION_VIEW",
    "REPORT_VIEW",
    "REPORT_DOWNLOAD",
    "ALERT_VIEW"
  ],

  OPERATOR: [
    "DASHBOARD_VIEW",
    "COLLECTION_VIEW",
    "SHOW_VIEW"
  ]
};

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return permissions[role].includes(permission);
}