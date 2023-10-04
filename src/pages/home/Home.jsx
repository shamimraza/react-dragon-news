import Header from "../shaire/header/Header";
import LeftSide from "../shaire/leftSide/LeftSide";
import NavBar from "../shaire/navbar/NavBar";
import RightSide from "../shaire/rightSide/RightSide";
import BrakingNews from "./BrakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="border md:col-span-2">
          <h2 className="font-medium">Dragon News Home</h2>
        </div>
        <div className="border">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
