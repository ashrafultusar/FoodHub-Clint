import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import './Featured.css'


const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="FROM OUR MENU"
        heading="---Check it out---"
      ></SectionTitle>

      <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <h1>March 20, 2023</h1>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
