import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import Header from "./components/Header";

export default async function Home() {
  return (
    <main className="h-screen w-full">
      <Header />
      <div className="h-2/3 flex items-center justify-center gap-24">
        <Link href="/protected" className="text-xl">
          Go To Protected Page
        </Link>
        <button className="text-white p-3 rounded-lg bg-neutral-950">
          Make an auth protected API call
        </button>
      </div>
    </main>
  );
}
