import fs from "fs";
import path from "path";
import Container from "../../components/container/Container";

export interface LabsProps {
  labs: string[];
}

const Labs = (props: LabsProps): JSX.Element => {
  return (
    <Container pageTitle="Labs</>">
      <ul>
        {props.labs.map((lab) => (
          <li>{lab}</li>
        ))}
      </ul>
    </Container>
  );
};

export async function getStaticProps() {
  const labsPath = path.join(process.cwd(), "src/pages/labs/");
  const files = fs.readdirSync(labsPath);
  return {
    props: {
      labs: files,
    },
  };
}

export default Labs;
