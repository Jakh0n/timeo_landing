import Link from "next/link";

import { siteConfig } from "@/lib/config";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MarketingLayoutProps) {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <Link href="/" className="font-bold text-xl">
        {siteConfig.name}
      </Link>
      {children}
    </main>
  );
}
