import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/1.png";
import image1 from "../../../assets/2.png";
import image2 from "../../../assets/3.png";
import { AiOutlineCalendar } from "react-icons/ai";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="font-medium mb-4">All Caterogy</h2>
        <div className="bg-[#E7E7E7] h-16 rounded ">
          <h2 className="ml-10 flex  p-4">National News</h2>
        </div>
        {categories.map((category) => (
          <Link
            className="block pl-5 mt-4 text-[#9F9F9F]"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-3">
        <img src={image} alt="" />
        <p className="mt-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </p>
        <p className="flex items-center gap-3 mt-6 ">
          Sports
          <span>
            <AiOutlineCalendar></AiOutlineCalendar>
          </span>
          <span>Jan 4, 2022</span>
        </p>
      </div>
      <div className="mt-3">
        <img src={image1} alt="" />
        <p className="mt-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </p>
        <p className="flex items-center gap-3 mt-6">
          Sports
          <span>
            <AiOutlineCalendar></AiOutlineCalendar>
          </span>
          <span>Jan 4, 2022</span>
        </p>
      </div>
      <div className="mt-3">
        <img src={image2} alt="" />
        <p className="mt-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </p>
        <p className="flex items-center gap-3 mt-6">
          Sports
          <span>
            <AiOutlineCalendar></AiOutlineCalendar>
          </span>
          <span>Jan 4, 2022</span>
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
