import Image from "next/image";
import SimpleLinkCard, { type SimpleLink } from "@/components/SimpleLinkCard";

const dummyProfile = {
  name: "최성규",
  bio: "지구물리학자 | 요즘에는 방위기술 개발에 관심이 많아요",
  photo: "/profile.jpg",
};

const dummyLinks: SimpleLink[] = [
  { title: "🌿 GitHub", url: "https://github.com/choisg-3670" },
  {
    title: "✍️ LinkedIn",
    url: "https://www.linkedin.com/in/%EC%84%B1%EA%B7%9C-%EC%B5%9C-19a3b93aa/",
  },
  { title: "📬 Email", url: "mailto:csg2574@naver.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <main className="flex w-full max-w-[400px] flex-col items-center text-center">
        {/* 원형 프로필 사진: 흰 테두리 + 부드러운 그림자로 살짝 떠 보이게 */}
        <div className="relative mb-7 size-32 overflow-hidden rounded-full ring-4 ring-white/90 shadow-[0_14px_32px_-10px_rgb(160_90_60/0.45),0_2px_6px_rgb(160_90_60/0.12)] sm:size-36">
          <Image
            src={dummyProfile.photo}
            alt={`${dummyProfile.name} 프로필 사진`}
            fill
            sizes="(min-width: 640px) 144px, 128px"
            loading="eager"
            className="object-cover"
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold tracking-[-0.03em]">
          {dummyProfile.name}
        </h1>
        <p className="mb-11 max-w-[300px] text-[15px] leading-relaxed text-muted break-keep">
          {dummyProfile.bio}
        </p>

        <nav aria-label="링크" className="w-full">
          <ul className="flex list-none flex-col gap-4 p-0">
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
