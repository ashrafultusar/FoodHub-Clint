const FoodCard = ({ item }) => {
    const {name,image,price,recipe } = item;

  
  const handelAddCart = food => {
  console.log(food)
}

  
  
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
              </figure>
              <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p> 
        <div className="card-body">
                  <h2 className="card-title">{name }</h2>
                  <p>{ recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handelAddCart(item)} className="btn bg-slate-100 border-0 border-b-4 border-orange-300 mt-4 btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FoodCard;
