import { useLoaderData } from "react-router-dom";
import Header from "../shaire/header/Header";
import LeftSide from "../shaire/leftSide/LeftSide";
import NavBar from "../shaire/navbar/NavBar";
import RightSide from "../shaire/rightSide/RightSide";
import BrakingNews from "./BrakingNews";
import NewsCard from "./newsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className=" md:col-span-2">
          <h2 className="font-medium">Dragon News Home</h2>
          {news.map((aNews) => (
            <NewsCard key={aNews.id} aNews={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
