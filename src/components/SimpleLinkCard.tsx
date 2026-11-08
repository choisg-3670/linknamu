export type SimpleLink = {
  title: string;
  url: string;
};

/** 글래스모피즘 링크 카드 — 호버는 살짝 떠오르고 조금 더 불투명해지는 정도만 */
export default function SimpleLinkCard({ link }: { link: SimpleLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-[20px] border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-semibold tracking-[-0.01em] shadow-[0_8px_24px_-12px_rgb(160_90_60/0.35),inset_0_1px_0_rgb(255_255_255/0.6)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_12px_28px_-12px_rgb(160_90_60/0.45),inset_0_1px_0_rgb(255_255_255/0.7)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {link.title}
    </a>
  );
}
