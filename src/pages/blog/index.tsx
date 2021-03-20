import * as contentful from "contentful";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
      <ul className=" px-5 py-5 md:mx-20 ">
        {props.posts.map((lab) => (
          <>
            <Link href="/blog/post/[id]" as={`/blog/post/${lab.sys.id}`}>
              <a href="/blog/post/[id]">
                <li className=" flex justify-start items-center cursor-pointer bg-white my-5 md:mx-20 transition-all ease-in-out duration-150 hover:shadow-lg hover:bg-gray-100 rounded-lg">
                  <section className="bg-gray-200 p-3 rounded-l-lg text-blue-400 text-4xl mr-5">
                    <ErlernmeyerIcon className="h-16" />
                  </section>
                  /**
                  <span className="mx-2  font-bold italic text-lg text-indigo-600">
                    @title
                  </span>
                  <span className="font-semibold mx-2 text-gray-600">
                    {lab.fields.title}
                  </span>
                  */
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
