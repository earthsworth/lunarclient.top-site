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
            creativity. If you also have creativity, feel free to join our club!
          </p>
          <p>BTW, we love open source</p>
        </section>

        <section>
          <h2 className="text-2xl">Why Clientside Telemetry is bad</h2>
          <p>
            Adding telemetry to software without clear consent shows a lack of
            respect for users. It collects data about their behavior and
            environment without explicit permission, undermining privacy and
            trust. Instead of empowering users to control what information they
            share, it assumes they are willing participants in data collection.
            Respectful software design requires transparency and opt-in choices,
            ensuring that people know what's being collected and can decide for
            themselves.
          </p>
          <p>We never add telemetry to the user-end software.</p>
          <p>Users' privacy matter</p>
        </section>

        <section>
          <h2 className="text-2-xl">Why Selling Users' Data is Bad</h2>
          <p>
            Selling users’ data violates their trust and privacy. It treats
            personal information as a commodity without the individual’s genuine
            consent, exposing them to risks such as profiling, discrimination,
            or identity theft. This practice undermines transparency and
            control, stripping people of the ability to decide how their data is
            used. Ethical software should prioritize protecting users’
            information rather than monetizing it behind their backs.
          </p>
        </section>
      </main>
      <footer className="mt-5">
        <b className="text-3xl">FOSS & ❤️️</b>
      </footer>
    </div>
  );
}
