import fs from "fs";
import path from "path";
import Container from "../../components/container/Container";
import ErlernmeyerIcon from "../../components/assets/icons/ErlenmeyerIcon";

export interface LabsProps {
  labs: { titles: string[] };
}

const Labs = (props: LabsProps): JSX.Element => {
  return (
    <Container pageTitle="Labs</>">
      <ul className=" px-5 py-5 md:mx-20 ">
        {props.labs.titles.map((lab) => (
          <li className=" flex justify-start items-center cursor-pointer bg-white my-5 md:mx-20 transition-all ease-in-out duration-150 hover:shadow-lg hover:bg-gray-100 rounded-lg">
            <section className="bg-gray-200 p-3 rounded-l-lg text-blue-400 text-4xl mr-5">
              <ErlernmeyerIcon className="h-16" />
            </section>
            {lab}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export async function getStaticProps() {
  const regex = new RegExp("/(.*)", "gi");
  const labsPath = path.join(process.cwd(), "src/pages/labs/");
  const files = fs.readdirSync(labsPath);
  const fileTitles = files
    .map((file) =>
      file === "index.tsx"
        ? undefined
        : fs.readFileSync(path.join(labsPath, file))
    )
    .filter((buffer) => buffer !== undefined)
    .map((buffer) => buffer.toString().match(regex));
  return {
    props: {
      labs: {
        titles: fileTitles,
      },
    },
  };
}

export default Labs;
