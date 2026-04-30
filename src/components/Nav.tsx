import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Services", href: "https://services.planara.com" },
  { label: "Platform", href: "https://intelligence.planara.com" },
  { label: "Leaders", href: "https://leaders.planara.com" },
];

export function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
        <Link
          href="https://planara.com"
          className="flex items-center gap-2.5 text-base font-medium tracking-tight text-white"
        >
          <Image
            src="/planara-logo.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span>Planara</span>
        </Link>
        <div className="flex items-center gap-7 text-sm text-white/65 sm:gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex h-11 items-center transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
