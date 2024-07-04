

import { IMG_CDN_URL } from "./constants"; 
import { RestaurentList } from "./constants";

``
const RestaurentCard = ({restaurant}) =>{
  
    const {
      name,
      cuisines,
      cloudinaryImageId,
      lastMileTravelString
    } = restaurant.data
            
   
      return(
          <div className="card">
  
  <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restaurant.data?.cloudinaryImageId
          }
          alt={RestaurentList[1].data?.name}
        />
              <h4>{restaurant.data?.name}</h4>
              <h3>{restaurant.data?.cuisines. join(",")}</h3>
              <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
              <h3>{restaurant.data?.area}</h3>
          </div>
      )
  }
  
  
  export default RestaurentCard