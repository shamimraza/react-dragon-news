import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Swimming from "../../../assets/qZone1.png";
import Class from "../../../assets/qZone2.png";
import Play from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const RightSide = () => {
  const { googleLogin, user, githubLogin } = useContext(AuthContext);

  const handleWithGoogle = (google) => {
    google()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className=" text-3xl">Login with</h2>
        <button
          onClick={() => handleWithGoogle(googleLogin)}
          className="btn btn-outline mt-5 w-full"
        >
          <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>Login With
          Google
        </button>
        <button
          onClick={() => handleWithGoogle(githubLogin)}
          className="btn btn-outline mt-2 w-full"
        >
          <AiOutlineGithub className="text-xl"></AiOutlineGithub>Login With
          Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className=" text-3xl">Find Us On</h2>
        <a className="flex p-4 border rounded-t-lg items-center" href="">
          <BsFacebook className="mr-4"></BsFacebook> FaceBook
        </a>
        <a className="flex p-4 border-x items-center" href="">
          <FaTwitter className="mr-4"></FaTwitter> Twitter
        </a>
        <a className="flex p-4 border rounded-b-lg items-center" href="">
          <FaInstagram className="mr-4 b"></FaInstagram> Instagram
        </a>
      </div>
      <div className="p-4 mb-6 bg-[#F3F3F3]">
        <h2 className=" text-3xl">Q-Zone</h2>
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Play} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
