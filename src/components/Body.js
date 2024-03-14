import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/Constants";
import { useState } from "react";

const Body = () => {
  const [resto, setResto] = useState(restaurants);

  function topRatedResto(resto) {
    const newList = resto.filter(
      (res) => res.info.avgRating >= 4.2
    );
    setResto(newList);
  }
  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search here...."
        />
        <button title="search" type="button">
          Search
        </button>
      </div>
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => topRatedResto(resto)}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="restro-container">
        {resto.map((restro) => (
          <RestaurantCard
            key={restro.info.id}
            restData={restro}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
