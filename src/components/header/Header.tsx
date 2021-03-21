import { useRouter } from "next/router";
import DoubleChevronLeft from "../assets/icons/DoubleChevronLeft";

export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  const router = useRouter();
  const goBack = () => {
    if (router.pathname === "/") return;
    router.back();
  };
  return (
    <header className="m-0 px-4 flex flex-col justify-start md:flex-row md:justify-between">
      <h1 className="m-0 p-0 justify-self-start text-4xl font-normal">
        <strong>{props.title}</strong>
      </h1>
      <button
        className="hidden md:block md:h-12 md:w-12 md:p-3 md:rounded-full md:text-gray-800 md:text-2xl md:bg-white transition ease-in duration-150 shadow-lg md:cursor-pointer hover:bg-gray-50 focus:outline-none focus:shadow-blue-200 focus:ring-2 focus:ring-offset-blue-400"
        onClick={goBack}
      >
        <DoubleChevronLeft />
      </button>
    </header>
  );
};
export default Header;
