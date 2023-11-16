import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const BackButton = ({ href }) => (
  <Link className="text-gray-300 hover:text-white" href={href}>
    <IoMdArrowBack size={25} />
  </Link>
);

export default BackButton;
