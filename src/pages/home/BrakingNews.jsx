import Marquee from "react-fast-marquee";
const BrakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] mt-3">
      <button className="btn btn-secondary">Braking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BrakingNews;
