import Header from "../header/Header";
import Main from "../main/Main";

export interface ContainerProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div className="container">
      <Header title={props.pageTitle} />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Container;
