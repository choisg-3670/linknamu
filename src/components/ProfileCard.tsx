import type { CSSProperties } from "react";
import Image from "next/image";
import type { Profile } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <main
      className={`group relative z-10 flex w-full max-w-[420px] flex-col items-center rounded-[20px] border border-white/80 bg-white/65 px-6 pb-8 pt-9 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_40px_-12px_rgba(14,165,233,0.25)] backdrop-blur-xl backdrop-saturate-[1.6] transition duration-400 ${EASE} hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_24px_60px_-16px_rgba(14,165,233,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 min-[481px]:rounded-3xl min-[481px]:px-10 min-[481px]:pb-10 min-[481px]:pt-12`}
    >
      <div className="relative mb-5 grid size-20 place-items-center overflow-hidden rounded-full bg-linear-135 from-sky-400 via-accent to-accent-dark text-[28px] font-bold tracking-tight text-white shadow-[0_0_0_4px_rgba(255,255,255,0.9),0_8px_24px_-6px_rgba(14,165,233,0.5)] min-[481px]:mb-6 min-[481px]:size-24 min-[481px]:text-[34px]">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="96px"
            loading="eager"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true">{profile.initials}</span>
        )}
      </div>

      <h1 className="mb-2.5 text-2xl font-bold tracking-[-0.03em] min-[481px]:text-[28px]">
        {profile.name}
      </h1>

      <p className="mb-7 max-w-[320px] text-sm leading-[1.65] text-muted break-keep min-[481px]:text-[15px]">
        {profile.bio}
      </p>

      <ul
        aria-label="관심 분야"
        className="mb-8 flex list-none flex-wrap justify-center gap-2 p-0"
      >
        {profile.tags.map((tag, i) => (
          <li
            key={tag.label}
            style={{ "--i": i } as CSSProperties}
            className="cursor-default rounded-full border border-accent/20 bg-accent/8 px-3.5 py-1.5 text-[13px] font-medium text-accent-dark transition duration-250 hover:-translate-y-px hover:border-accent hover:bg-accent hover:text-white group-hover:animate-tag-rise group-hover:[animation-delay:calc(var(--i)*90ms)] motion-reduce:transition-none motion-reduce:group-hover:animate-none"
          >
            {tag.emoji} {tag.label}
          </li>
        ))}
      </ul>

      <div
        role="presentation"
        className="mb-7 h-px w-full bg-linear-to-r from-transparent via-accent/25 to-transparent"
      />

      <nav aria-label="링크" className="w-full">
        <ul className="flex list-none flex-col gap-3 p-0">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
