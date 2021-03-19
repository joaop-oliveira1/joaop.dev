import PropTypes from "prop-types";
export interface MainProps {
  className?: string;
  children: React.ReactNode;
}

const Main = (props: MainProps): JSX.Element => {
  return <main className="p-4 ">{props.children}</main>;
};

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Main.defaultProps = {
  className: "",
};

export default Main;
