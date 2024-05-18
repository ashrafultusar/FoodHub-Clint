
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
  const [menu] = UseMenu()
  const popular=menu.filter(item=> item.category==='popular')
 

  return (
    <div className="mb-14"> 
      <div>
        <SectionTitle
          heading="FROM OUR MENU"
          subHeading="---Check it out---"
        ></SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-6">
      <button className="btn">View Full  Menu</button>
   </div>
    </div>
  );
};

export default PopularMenu;
