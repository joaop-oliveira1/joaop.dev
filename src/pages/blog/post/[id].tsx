import Link from "next/link";
import { Entry } from "contentful";
import contentfulClient from "../../../data/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export interface ContentfulPost {
  title: string;
  lab: boolean;
  content: any;
}

export interface PostProps {
  post: Entry<ContentfulPost>;
}

const Post = (props: PostProps): JSX.Element => {
  return <> {documentToReactComponents(props.post.fields.content)}</>;
};

export async function getStaticPaths(x) {
  const response = await contentfulClient.getEntries();
  const paths = response.items.map((item) => ({
    params: { id: item.sys.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // @ts-ignore
  const post = await contentfulClient.getEntry({ id: context.params.id });
  return {
    props: {
      post: post.toPlainObject(),
    },
  };
}

export default Post;
