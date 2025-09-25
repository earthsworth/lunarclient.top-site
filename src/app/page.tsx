import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-3">
        <section>
          <h1 className="text-3xl">Welcome to lunarclient.top</h1>
          <a href="https://t.me/earthsworth" className="text-sky-500 underline">
            Join Our Community
          </a>
        </section>

        <section>
          <h2 className="text-2xl">What is this site for</h2>
          <p>This site is a placeholder right now</p>
          <p>We are creating interesting things.</p>
        </section>

        <section>
          <h2 className="text-2xl">Who We Are</h2>
          <p>
            We believe that creativity are being to developers, we have
            creativity. If you also have creative, feel free to join our club!
          </p>
          <p>BTW, we love open source</p>
        </section>
      </main>
      <footer className="mt-5">
        <b className="text-3xl">FOSS & ❤️️</b>
      </footer>
    </div>
  );
}
