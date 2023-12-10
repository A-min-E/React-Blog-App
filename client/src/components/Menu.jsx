import { Link } from "react-router-dom";
const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      img: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      img: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ea?",
      img: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
