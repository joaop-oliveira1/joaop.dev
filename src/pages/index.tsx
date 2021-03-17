import Link from "next/link";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <>
      <Container pageTitle="JoaoP.dev">
        <section className="main-card">
          <h3>web.dev.front.end</h3>
          <br />
          <nav className="main-links">
            <Link href="/labs">
              <a href="/labs" className="button-primary">
                Labs{"</>"}
              </a>
            </Link>
            <Link href="/labs">
              <a href="/labs" className="button-secondary">
                Repo;
              </a>
            </Link>
            <Link href="/labs">
              <a href="/labs" className="button-warning">
                Contato
              </a>
            </Link>
          </nav>
        </section>
      </Container>
    </>
  );
}
