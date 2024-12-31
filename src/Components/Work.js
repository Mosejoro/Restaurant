import React from "react";
import PickMeals from "../Assets/icons8-find.svg";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Browse Our Menu",
      text: "Discover a variety of dishes for every craving.",
    },
    {
      image: ChooseMeals,
      title: "Place Your Order",
      text: "Select your favorite meals and add them to your cart.",
    },
    {
      image: DeliveryMeals,
      title: "Sit Back and enjoy your meal",
      text: "Our team ensures your order is prepared fresh and delivered swiftly, so you can savor delicious food right at your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
