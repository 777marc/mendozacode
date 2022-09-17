import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-slate-800 sm:flex sm:items-center sm:justify-center">
      <div>mendozacode</div>
      <Link to="/posts" className="text-xl text-blue-600 underline">
        Blog Posts
      </Link>
    </main>
  );
}
