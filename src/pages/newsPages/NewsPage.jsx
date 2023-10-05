import { useParams } from "react-router-dom";
import Header from "../shaire/header/Header";
import NavBar from "../shaire/navbar/NavBar";
import RightSide from "../shaire/rightSide/RightSide";

const NewsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2>news details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
