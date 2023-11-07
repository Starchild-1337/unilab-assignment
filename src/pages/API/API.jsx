import React, { useEffect, useState } from "react";
import "./API.css";
import Pagination from "../../components/Pagination/Pagination";

const API = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const perPage = 10;
  const pageCount = Math.ceil(posts.length / perPage);
  const list = posts.slice(perPage * page - perPage, perPage * page);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="blog__container">
        <h1 style={{ textAlign: "center", color: "#000", marginTop: "2rem" }}>
          Loading...
        </h1>
        ;
      </section>
    );
  }

  return (
    <section className="blog__container">
      {error ? (
        <h3 style={{ textAlign: "center", color: "#000", marginTop: "2rem" }}>
          {error}
        </h3>
      ) : (
        <>
          <div className="blog">
            {list.map((post) => {
              return (
                <article className="post" key={post.id}>
                  <h2 className="post__title">{post.title}</h2>
                  <p className="post__body">{post.body}</p>
                </article>
              );
            })}
          </div>
          <Pagination
            pageCount={pageCount}
            page={page}
            setPage={setPage}
            list={list}
            color="dark"
          />
        </>
      )}
    </section>
  );
};

export default API;
