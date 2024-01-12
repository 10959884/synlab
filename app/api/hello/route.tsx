import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function GET(req: any, res: NextApiResponse) {
  return new Response("hello world");
}
