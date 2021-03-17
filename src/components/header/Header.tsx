export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header>
      <section>
        <h1>
          <strong>{props.title}</strong>
        </h1>
      </section>
    </header>
  );
};
export default Header;
