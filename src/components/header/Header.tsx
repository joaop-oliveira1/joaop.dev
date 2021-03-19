export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="m-0 px-2 justify-self-start flex flex-col justify-start md:flex-row">
      <h1 className="m-0 p-0 justify-self-start text-4xl font-normal">
        <strong>{props.title}</strong>
      </h1>
    </header>
  );
};
export default Header;
