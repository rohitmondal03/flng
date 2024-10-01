import { routes } from "@/config/routes";
import type { TDashboardNavLinks } from "../@types/data.types";


export const DASHBOARD_NAV_LINKS: TDashboardNavLinks[] = [
  {
    label: "Your Files",
    href: routes.yourfiles(),
  },
  {
    label: "Received Files",
    href: routes.receivedfiles(),
  },
  {
    label: "Storage Details",
    href: "#storage-details",
  }
]