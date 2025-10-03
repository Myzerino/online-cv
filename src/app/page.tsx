import Avatar from "@/components/avatar";
import Experience from "@/components/experience";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main className="font-sans min-h-full p-8 pt-16 flex flex-col items-center justify-center">
      <section className="border-8 border-solid w-200 h-200 border-retro-brown bg-retro-yellow">
        <div className="font-sans p-8 flex flex-row items-start text-2xl font-semibold text-retro-brown text-center">
          <Avatar />
          <Experience />
        </div>
      </section>

    </main>
  );
}
