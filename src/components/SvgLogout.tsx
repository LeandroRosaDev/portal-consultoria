'use client';

import logout from '@/actions/login/logout-action';
import Image from 'next/image';

export function SvgLogout() {
  return (
    <form action={logout}>
      <button type="submit">
        <Image
          src="/assets/icon/exit.svg"
          width={80}
          height={80}
          alt="Logout"
          className="absolute top-7 right-7"
        />
      </button>
    </form>
  );
}
