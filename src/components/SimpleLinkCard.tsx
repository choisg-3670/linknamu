export type SimpleLink = {
  title: string;
  url: string;
};

/** 와이어프레임의 둥근 사각형 링크 버튼 */
export default function SimpleLinkCard({ link }: { link: SimpleLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-ink/80 bg-white/70 px-5 py-3.5 text-center text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-white hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent motion-reduce:transition-none"
    >
      {link.title}
    </a>
  );
}
