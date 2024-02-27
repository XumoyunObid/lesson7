import React from "react";
import data from "../../data/data";
import HomeCard from "../../Components/Cards/HomeCard";

const HomePage = () => {
  return (
    <div className="container">
      <ul className="grid grid-cols-4 gap-5 pt-[50px] pb-[150px]">
        {data.map((product) => (
          <li key={product.id}>
            <HomeCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
