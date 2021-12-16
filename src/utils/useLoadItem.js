import { useCallback, useEffect, useState } from "react";
import { client } from "../API/requests";

export const useLoadItem = (url) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    posts: [],
    error: false,
    next: url,
  });

  const fetchBlogPosts = useCallback(() => {
    setLoading(true);
    client
      .get(state.next)
      .then((res) => {
        setState({
          posts: res.data.results,
          next: res.data.next,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          error: true,
          next: err.response?.data?.next,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [state]);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  return {
    loading,
    state,
    refetch: fetchBlogPosts,
  };
};
