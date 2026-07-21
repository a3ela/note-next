import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold">notes app</h2>
        an example app for{" "}
        <a href="https://nextjs.org" className="hover:underline">
          full stack open Next.js
        </a>
      </div>

      <div>
        see{" "}
        <a href="/notes" className="hover:underline">
          your notes
        </a>
      </div>
    </div>
  );
}
