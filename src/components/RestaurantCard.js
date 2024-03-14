import { restoUrl } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
  } = restData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restro-logo"
        src={restoUrl + cloudinaryImageId}
        alt="food app logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Star</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
