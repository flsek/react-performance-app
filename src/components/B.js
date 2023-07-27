import React from "react";
const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  console.log("ListItem Component is rendering");
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </ul>
  );
});

const B = ({ message, posts }) => {
  return (
    <div>
      <h1>Component B</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};
export default B;
