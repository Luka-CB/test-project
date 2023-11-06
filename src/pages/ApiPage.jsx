import { useContext, useEffect } from "react";
import Navigation from "../components/Navigation";
import { ApiContext } from "../context/features/api";
import ApiCard from "../components/ApiCard";
import ApiPagination from "../components/ApiPagination";
import { useSearchParams } from "react-router-dom";

const ApiPage = () => {
  const { fetchPosts, posts, isLoading } = useContext(ApiContext);

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (page) {
      const start = (page - 1) * 12;
      fetchPosts(start);
    } else {
      fetchPosts();
    }
  }, [fetchPosts, page]);

  return (
    <div className="api-container">
      <Navigation />
      <div className="cards-wrapper">
        {isLoading ? <div className="spinner"></div> : null}
        {posts?.map((post) => (
          <ApiCard key={post.id} post={post} />
        ))}
      </div>
      <div className="api-pagination">
        <ApiPagination />
      </div>
    </div>
  );
};

export default ApiPage;
