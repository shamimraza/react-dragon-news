import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const {
    title,
    details,
    author,
    img,
    image_url,
    thumbnail_url,
    name,
    published_date,
    total_view,
    _id,
  } = aNews;
  return (
    <div>
      {/* <div className="bg-[#F3F3F3] w-full h-16">
        <div>
          <div className="flex gap-3">
            <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
            <div>
              <p>{author.name}</p>
              <p>{author.published_date}</p>
            </div>
            <div>
              <p>
                <BsFillBookmarkFill></BsFillBookmarkFill>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card w-full bg-base-100 shadow-xl my-3">
        <figure>
          <img className="" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
