import PropTypes from "prop-types";
import Header from "../header/Header";
import Main from "../main/Main";

export interface ContainerProps {
  pageTitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div className="container">
      <Header title={props.pageTitle} />
      <Main className={props.className}>{props.children}</Main>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Container.defaultProps = {
  pageTitle: "",
  className: "",
};

export default Container;
