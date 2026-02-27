# Movies Explorer

Aplikasi web untuk menjelajahi dan mencari film menggunakan data dari TMDB API. Dibangun dengan Next.js, Prisma, Better Auth, dan DaisyUI.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org)
- **Database ORM**: [Prisma 7](https://prisma.io) + PostgreSQL
- **Authentication**: [Better Auth](https://better-auth.com)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [DaisyUI v5](https://daisyui.com)
- **Movie Data**: [TMDB API](https://developer.themoviedb.org)

## Fitur

- Pencarian film secara real-time
- Halaman detail film
- Autentikasi (Sign Up / Sign In) dengan Better Auth
- Hero section dengan film populer

## Struktur Proyek

```
app/
├── components/       # Komponen reusable (Navbar, Hero, MoviesCard, dll)
├── movies/
│   └── [id]/         # Halaman detail film
├── signup/           # Halaman registrasi
├── actions/          # Server Actions (auth)
├── layout.tsx
└── page.tsx
prisma/
└── schema.prisma     # Schema database
generated/
└── prisma/           # Prisma Client (auto-generated)
```

## Cara Menjalankan

### 1. Clone & Install Dependencies

```bash
git clone <repo-url>
cd movies-explorer
npm install
```

### 2. Konfigurasi Environment Variables

Buat file `.env` di root project:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/movies_explorer"
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

### 3. Setup Database

```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Scripts

| Command                  | Keterangan                        |
| ------------------------ | --------------------------------- |
| `npm run dev`            | Jalankan development server       |
| `npm run build`          | Build untuk production            |
| `npm run start`          | Jalankan production server        |
| `npx prisma generate`    | Generate Prisma Client            |
| `npx prisma migrate dev` | Jalankan migrasi database         |
| `npx prisma studio`      | Buka Prisma Studio (GUI database) |
