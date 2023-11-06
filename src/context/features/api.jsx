import { createContext, useCallback, useState } from "react";

export const ApiContext = createContext();

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const ApiProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(async (start = 0) => {
    setIsLoading(true);

    try {
      const res = await fetch(`${baseUrl}?_start=${start}&_limit=12`, {
        method: "GET",
      });
      const data = await res.json();

      if (data) {
        setIsLoading(false);
        setPosts(data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

  const contextData = {
    posts,
    isLoading,
    fetchPosts,
  };

  return (
    <ApiContext.Provider value={contextData}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
