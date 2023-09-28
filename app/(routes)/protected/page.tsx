import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const Protected = () => {
  return (
    <div>
      <Header />

      <div className="flex  h-96 flex-col items-center justify-end">
        <div className="text-xl">This page can only be visisted by authenticated users</div>
        <Link href="/" className="mt-4 text-white p-2 rounded-lg bg-neutral-950">
          Go To Main Page
        </Link>
      </div>
    </div>
  );
};

export default Protected;
