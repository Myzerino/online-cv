import Avatar from "@/components/avatar";

export default function Home(): JSX.Element {
  return (
    <main className="font-sans min-h-full p-8 pt-16 flex flex-col items-center justify-center">
      <section className="border-8 border-solid w-200 h-200 border-retro-brown bg-retro-yellow">
        <Avatar />
      </section>
    </main>
  );
}
