import Image from "next/image";
import SimpleLinkCard, { type SimpleLink } from "@/components/SimpleLinkCard";

// TODO: 보여 주기용 더미 값입니다. 나중에 진짜 내용으로 바꿔 주세요.
const dummyProfile = {
  name: "홍길동",
  bio: "한 줄 소개가 여기에 들어갑니다.",
  photo: "/dummy-avatar.svg",
};

const dummyLinks: SimpleLink[] = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center p-4 min-[481px]:p-6">
      <main className="flex w-full max-w-[380px] flex-col items-center rounded-[28px] border-2 border-ink/80 bg-white/60 px-6 pb-12 pt-10 text-center shadow-[0_12px_40px_-12px_rgba(14,165,233,0.25)] backdrop-blur-xl">
        {/* 원형 프로필 사진 */}
        <div className="relative mb-8 size-44 overflow-hidden rounded-full border-2 border-ink/80">
          <Image
            src={dummyProfile.photo}
            alt={`${dummyProfile.name} 프로필 사진`}
            fill
            sizes="176px"
            loading="eager"
            className="object-cover"
          />
        </div>

        <h1 className="mb-3 text-xl font-bold tracking-tight">
          {dummyProfile.name}
        </h1>
        <p className="mb-8 text-[15px] text-muted break-keep">
          {dummyProfile.bio}
        </p>

        <nav aria-label="링크" className="w-full">
          <ul className="flex list-none flex-col gap-6 p-0">
            {dummyLinks.map((link) => (
              <li key={link.title}>
                <SimpleLinkCard link={link} />
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
