'use client';

import logout from '@/actions/login/logout-action';

export function ButtonLogout({ children, className }: any) {
  return (
    <form action={logout}>
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  );
}
