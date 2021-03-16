import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <div className="container">
        <header>
          <h3>Joao Paulo</h3>
        </header>
        <main>
          <section className="main-card">
            <h1>......</h1>
            <button className="button-primary">Conteudo</button>
            <button className="button-warning">Contato</button>
            <button className="button-secondary">Repositorio</button>
          </section>
        </main>
      </div>
    </>
  );
}
