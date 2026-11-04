import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number; lastClickedAt: Date };

/** 링크 클릭 1회를 기록한다. MONGODB_URI가 없거나 DB 오류가 나도 링크 이동은 막지 않는다. */
export async function recordClick(linkId: string): Promise<void> {
  const clientPromise = getMongoClient();
  if (!clientPromise) {
    console.warn("[clicks] MONGODB_URI가 설정되지 않아 클릭 수를 기록하지 않습니다.");
    return;
  }

  try {
    const client = await clientPromise;
    await client
      .db(process.env.MONGODB_DB ?? "linknamu")
      .collection<ClickDoc>("clicks")
      .updateOne(
        { _id: linkId },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true },
      );
  } catch (error) {
    console.error("[clicks] 클릭 수 기록 실패:", error);
  }
}
