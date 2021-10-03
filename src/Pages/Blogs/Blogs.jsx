import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requests from "../../requests";
import "./blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setBlogs(request.data.results);
      return request;
    }
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      {blogs.map((blog) => (
        <div
          class="movie_info emiz"
          style={{
            backgroundImage: `url("${requests.fetchTMDBAssetsPath}${blog.backdrop_path}")`,
          }}
        >
          <div className="blogs_fadebottom"></div>
          <div class="blog_info_container">
            <div class="row">
              <div class="col-lg-offset-7 col-lg-5 col-sm-offset-5 col-sm-7">
                <div class="emiz_blog">
                  <h1>{blog.original_title}</h1>
                  <p>{blog.overview}</p>
                  <Link
                    to={`/blog/${blog.id}}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div class="readmore">Read More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
