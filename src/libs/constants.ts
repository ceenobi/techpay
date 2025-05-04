import {
  ChartLine,
  CircleUserRound,
  FileText,
  LayoutDashboard,
  Users,
} from "lucide-react";

export const dashboardLinks = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: FileText,
    label: "Transactions",
    path: "/dashboard/transactions",
  },
  {
    icon: ChartLine,
    label: "Reports",
    path: "/dashboard/reports",
  },
  {
    icon: Users,
    label: "User Management",
    path: "/dashboard/user-management",
  },
  {
    icon: CircleUserRound,
    label: "Account",
    path: "/dashboard/account",
  },
];
