export interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps): JSX.Element => {
  return <main>{props.children}</main>;
};

export default Main;
