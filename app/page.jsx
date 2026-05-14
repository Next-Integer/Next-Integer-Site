import Image from "next/image";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Integer home">
          <Image
            src="/IntegerLogo.png"
            width={1000}
            height={300}
            priority
            alt="Integer"
          />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">Integer</h1>
      </section>

      <footer className="footer" aria-hidden="true" />
    </main>
  );
}
