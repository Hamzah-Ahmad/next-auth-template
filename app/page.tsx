import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import Header from "./components/Header";
import ApiCallButton from "./components/ApiCallButton";

export default async function Home() {
  return (
    <main className="h-screen w-full">
      <Header />
      <div className="h-2/3 flex items-center justify-center gap-24">
        <Link href="/protected" className="text-xl underline">
          Go To Protected Page
        </Link>
        <ApiCallButton />
      </div>
    </main>
  );
}
