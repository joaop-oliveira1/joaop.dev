import * as contentful from "contentful";
import * as uuid from "uuid";
import Link from "next/link";
import Container from "../../components/container/Container";
import ErlernmeyerIcon from "../../components/assets/icons/ErlenmeyerIcon";

export interface ContentfulPost {
  title: string;
  lab: boolean;
  content: any;
}

export interface LabsProps {
  posts: contentful.Entry<ContentfulPost>[];
}

const Labs = (props: LabsProps): JSX.Element => {
  return (
    <Container pageTitle="Labs</>">
      <ul className="">
        {props.posts.map((lab) => (
          <>
            <Link
              href="/blog/post/[id]"
              as={`/blog/post/${lab.sys.id}`}
              key={uuid.v4()}
            >
              <a href="/blog/post/[id]">
                <li className=" flex justify-start items-center cursor-pointer bg-white my-5 md:mx-20 transition-all ease-in-out duration-150 shadow-lg hover:bg-gray-100 rounded-lg">
                  <section className="bg-gray-200 p-3 rounded-l-lg text-blue-400 text-4xl mr-5">
                    <ErlernmeyerIcon className="h-16" />
                  </section>
                  <section className="flex justify-start items-center flex-wrap">
                    <span className="mx-2  font-bold italic text-lg text-indigo-600">
                      @title
                    </span>
                    <span className="font-semibold mx-2 text-gray-600">
                      {lab.fields.title}
                    </span>
                  </section>
                </li>
              </a>
            </Link>
          </>
        ))}
      </ul>
    </Container>
  );
};

export async function getStaticProps() {
  const client = contentful.createClient({
    space: "y6852t08qdww",
    accessToken: "yBEEsQU-rMML9g7KnP0pAjK1W2YR6T-DJvXV1RnKoXo",
  });
  const response = await client.getEntries();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(response.items)),
    },
  };
}

export default Labs;
