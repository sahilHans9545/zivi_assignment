import React from "react";
import goldStar from "../../assets/images/goldStar.svg";
import EmptyHeart from "../../assets/images/emptyHeart.svg";
import "./style.scss";

const ProductCard = ({
  imgUrl,
  productName,
  oldPrice,
  CurrentPrice,
  stars,
  starNum,
}) => {
  return (
    <div className="productCard relative rounded overflow-hidden cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="absolute top-4 right-4 z-[1]"
        onClick={(e) => {
          console.log(e.target.getAttribute("fill"));
          if (e.target.getAttribute("fill") === "none") {
            e.target.setAttribute("fill", "#d32424");
            console.log(e.target.firstElementChild);
            e.target.firstElementChild.style.stroke = "none";
          } else {
            e.target.setAttribute("fill", "none");
            e.target.firstElementChild.style.stroke = "white";
          }
        }}
      >
        <path
          d="M10.0938 5.01172C5.86581 5.01172 3.02734 8.43396 3.02734 12.6602C3.02734 17.4558 9.72721 23.1855 15.4688 27.0117C21.2103 23.1855 27.8327 17.3634 27.9102 12.6602C27.9798 8.43456 25.2436 5.01172 21.0156 5.01172C19.2119 5.01172 17.3826 5.96591 15.4688 7.87891C13.5549 5.96591 11.8975 5.01172 10.0938 5.01172Z"
          stroke="white"
          className="pointer-events-none"
        />
      </svg>
      <div className="relative">
        <img src={imgUrl} alt="" />
        <button
          className="viewBtn opacity-0 bg-[#6D84FFB5] text-white text-xl font-medium absolute bottom-0 w-full py-3 px-4"
          style={{ textShadow: "0px 4px 32px rgba(0, 0, 0, 0.25)" }}
        >
          View Product
        </button>
      </div>

      <h3 className="text-xl mt-6">{productName}</h3>
      <p className="mt-3">
        <span className="text-xl text-[#0006] line-through">
          Rs. {oldPrice}
        </span>
        &nbsp;
        <span className="text-xl text-[#6D84FF]">Rs.{CurrentPrice}</span>
      </p>
      <div className="mt-3 flex gap-1 items-center">
        <div className="flex gap-[2px]">
          {[1, 2, 3, 4, 5].map(() => {
            return <img src={goldStar} alt="" />;
          })}
        </div>
        <span className="relative bottom-[2px]">({starNum})</span>
      </div>
    </div>
  );
};

export default ProductCard;
