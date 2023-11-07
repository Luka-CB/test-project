const ApiCard = ({ post }) => {
  return (
    <main className="card">
      <section className="header">
        <h2
          className="title"
          title={post.title?.length >= 25 ? post.title : undefined}
        >
          {post.title?.length <= 25
            ? post.title
            : `${post.title?.substring(0, 25)}...`}
        </h2>
        <div className="card-id">
          <span>Card ID:</span>
          <h3 id="id">{post.id}</h3>
        </div>
      </section>
      <section className="body">
        <p className="body-text">{post.body}</p>
      </section>
      <section className="footer">
        <div className="user-id">
          <span>User ID:</span>
          <h3 id="id">{post.userId}</h3>
        </div>
      </section>
    </main>
  );
};

export default ApiCard;
