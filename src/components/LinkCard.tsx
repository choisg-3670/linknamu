import type { LinkItem } from "@/data/profile";
import LinkIcon from "@/components/LinkIcon";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${encodeURIComponent(link.id)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link flex w-full items-center gap-3.5 rounded-2xl border border-white/80 bg-white/70 px-4 py-3.5 text-left shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-250 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:shadow-[0_8px_20px_-8px_rgba(14,165,233,0.45)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent motion-reduce:transition-none"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-white transition duration-250 group-hover/link:bg-accent">
        <LinkIcon name={link.icon} className="size-[18px]" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-[15px] font-semibold">{link.title}</span>
        {link.description && (
          <span className="truncate text-[13px] text-muted">
            {link.description}
          </span>
        )}
      </span>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-4 shrink-0 text-muted transition duration-250 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  );
}
