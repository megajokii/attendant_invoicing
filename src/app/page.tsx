'use client';

import Link from "next/link";
import Button from "@/components/button";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="text-black">Attendant</p>
        <Link href="/dashboard">
          <Button label='Enter Dashboard' />
        </Link>
    </div>
  );
}
