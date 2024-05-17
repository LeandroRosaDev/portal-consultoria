'use client';
import logout from '@/actions/login/logout-action';

export function ButtonLogout() {
  return (
    <form action={logout}>
      <button type="submit">Sair</button>
    </form>
  );
}
