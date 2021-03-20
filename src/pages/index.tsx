import Link from "next/link";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <>
      <Container pageTitle="JoaoP.dev">
        <section className="bg-transparent mt-12 justify-self-center max-w-full place-content-center md:top-12 md:mt-0 md:block md:p-4 md:bg-white md:bg-opacity-50 md:rounded-md md:shadow-lg">
          <h3 className="text-2xl text-center md:text-left">
            web.dev.front.end
          </h3>
          <br />
          <nav className="flex justify-start flex-wrap items-center md:flex-nowrap">
            <Link href="/blog">
              <a href="/blog" className="btn btn-primary w-full">
                Labs{"</>"}
              </a>
            </Link>
            <Link href="/labs">
              <a href="/labs" className="btn btn-secondary w-full">
                Repo;
              </a>
            </Link>
            <Link href="/contact">
              <a href="/contact" className="btn btn-warning w-full">
                pm.me
              </a>
            </Link>
          </nav>
        </section>
      </Container>
    </>
  );
}
