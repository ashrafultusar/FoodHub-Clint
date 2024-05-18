import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({item,title,coverimg}) => {
    return (
        <div className="pt-8">
          {title&&  <Cover
        img={coverimg}
        title={title}
        des="Would you like to try a dish?"
      ></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

        </div>
    );
};

export default MenuCatagory;