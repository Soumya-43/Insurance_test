import { Outlet } from 'react-router';

// Temporarily bypassing Auth for testing the Dashboard UI
export function AuthGuard() {
  return <Outlet />;
}

