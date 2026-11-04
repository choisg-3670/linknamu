import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "최성규 | 링크나무",
  description:
    "지구물리, 그 중에서도 지자기와 코딩에 관심 많은 Research Specialist 최성규입니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
