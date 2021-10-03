import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import requests from "../../requests";
import "./blog.scss";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchBlogDetails() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${parseInt(
          id
        )}?api_key=2d993593c6f4bc11d6feb87b34548c0b&language=en-US`
      );
      setBlog(request.data);
    }
    fetchBlogDetails();
  }, []);

  console.log(blog);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${requests.fetchTMDBAssetsPath}${blog.backdrop_path}")`,
        }}
        className="blogHeader"
      ></div>
      <div className="blog_content">
        <h2>{blog.original_title}</h2>
        <div className="blog_inner">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta fuga rem nam amet, accusantium deleniti unde quidem explicabo
            odio dolores fugit molestiae, aperiam ab est. Consequatur fugit
            facere officia?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            dicta fuga rem nam amet, accusantium deleniti unde quidem explicabo
            odio dolores fugit molestiae, aperiam ab est. Consequatur fugit
            facere officia?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
