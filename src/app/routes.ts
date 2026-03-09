import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./components/Dashboard";
import { NewClaim } from "./components/NewClaim";
import { ClaimsHistory } from "./components/ClaimsHistory";
import { Analytics } from "./components/Analytics";
import { AuthLayout } from "./components/AuthLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ManualEntryForm } from "./components/ManualEntryForm";
import { AuthGuard } from "./components/AuthGuard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthGuard,
    children: [
      {
        path: "/",
        Component: DashboardLayout,
        children: [
          { index: true, Component: Dashboard },
          { path: "new-claim", Component: NewClaim },
          { path: "claims", Component: ClaimsHistory },
          { path: "analytics", Component: Analytics },
          { path: "manual-entry", Component: ManualEntryForm },
        ],
      }
    ]
  },
  {
    Component: AuthLayout,
    children: [
      { path: "/login", Component: () => { window.location.href = '/'; return null; } },
      { path: "/signup", Component: () => { window.location.href = '/'; return null; } },
    ],
  },
]);
