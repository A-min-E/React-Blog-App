import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/15488486/pexels-photo-15488486/free-photo-of-noir-et-blanc-mode-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Maw</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          obcaecati!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad
          quidem nisi facere! Alias totam quis dolores hic nesciunt. Quam
          ratione asperiores qui dicta. Repudiandae facere perferendis et
          doloribus molestias temporibus quam, corrupti ipsam numquam
          dignissimos nobis soluta totam sapiente, esse vero voluptatum quo
          consectetur. Asperiores minima dolorum impedit, dolor vitae ipsa
          numquam quod dolores assumenda quisquam vel architecto? Debitis esse
          unde saepe, doloremque dignissimos at expedita aspernatur quia optio
          eveniet, perspiciatis enim. Debitis nostrum vel voluptatem facilis
          architecto laudantium obcaecati cum odit, quas ex labore, ab numquam
          praesentium commodi, consectetur deserunt vitae. Saepe veniam quisquam
          sapiente aspernatur ipsum nam? Eos corporis voluptas quos, at esse
          minus nulla placeat nemo, earum nihil quaerat veritatis? Nobis fuga
          debitis provident perspiciatis dignissimos, molestias dicta architecto
          inventore, impedit illum eveniet earum. Mollitia vel animi odio
          laboriosam earum iusto, aliquid odit aliquam iure impedit,
          reprehenderit, alias reiciendis unde accusantium quae! Accusantium
          quos perferendis odit recusandae aliquam libero sint expedita nam
          ipsum facilis voluptates aperiam delectus eum ad ullam tempore,
          temporibus iure id ratione? Quibusdam eius veritatis commodi nostrum
          consectetur, in quia ad earum eveniet ut animi, exercitationem esse,
          quis amet qui a porro placeat odit et? Incidunt velit facilis dolor,
          accusantium molestiae magnam quam.
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
