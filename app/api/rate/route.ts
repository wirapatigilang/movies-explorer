import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: "Kamu harus login dulu" }, { status: 401 });
  }

  const { tmdbId, value } = await req.json();
  if (!tmdbId || !value) {
    return NextResponse.json({ error: "tmdbId dan value wajib diisi" }, { status: 400 });
  }

  const rating = await prisma.rating.upsert({
    where: { userId_tmdbId: { userId: session.user.id, tmdbId } },
    update: { value },
    create: { userId: session.user.id, tmdbId, value },
  });

  return NextResponse.json(rating);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tmdbId = searchParams.get("tmdbId");

  if (!tmdbId) {
    return NextResponse.json({ error: "Movies tidak boleh kosong" }, { status: 400 });
  }

  const rating = await prisma.rating.aggregate({
    where: {
      tmdbId: Number(tmdbId),
    },
    _avg : {value : true},
    _count : {value : true}
  });

  if (!rating) {
    return NextResponse.json({
      error: "Rating tidak ditemukan",
      status: 404,
    });
  }

  return NextResponse.json( {
    tmdbId : Number(tmdbId),
    avg : rating._avg.value ?? 0,
    total : rating._count.value ?? 0
  }
    , { status: 200 });
}
