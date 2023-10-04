import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-4">
      <img className="mx-auto" src={logo} alt="" />
      <p className="mt-3 text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="mt-3">{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
