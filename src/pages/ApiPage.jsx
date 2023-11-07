import { useContext, useEffect } from "react";
import Navigation from "../components/Navigation";
import { ApiContext } from "../context/features/api";
import ApiCard from "../components/ApiCard";
import ApiPagination from "../components/ApiPagination";
import { useSearchParams } from "react-router-dom";
import Head from "../components/Head";

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
    <main className="api-container">
      <Head
        title="api"
        description="repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
      />
      <Navigation />
      <section className="cards-wrapper">
        {isLoading ? (
          <div className="spinner-wrapper">
            <div className="spinner"></div>
          </div>
        ) : null}
        {posts?.map((post) => (
          <ApiCard key={post.id} post={post} />
        ))}
      </section>
      <section className="api-pagination">
        <ApiPagination />
      </section>
    </main>
  );
};

export default ApiPage;
