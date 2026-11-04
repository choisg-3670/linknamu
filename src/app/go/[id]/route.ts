import type { NextRequest } from "next/server";
import { profile } from "@/data/profile";
import { recordClick } from "@/lib/clicks";

// 링크 카드는 /go/{id}로 연결된다. 클릭 수를 기록한 뒤 실제 주소로 보낸다.
export async function GET(_req: NextRequest, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const link = profile.links.find((l) => l.id === id);

  if (!link) {
    return new Response("링크를 찾을 수 없습니다.", { status: 404 });
  }

  await recordClick(link.id);

  return new Response(null, {
    status: 302,
    headers: { Location: link.url, "Cache-Control": "no-store" },
  });
}
