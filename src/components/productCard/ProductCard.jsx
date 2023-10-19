import React from "react";
import goldStar from "../../assets/images/goldStar.svg";

const ProductCard = ({
  imgUrl,
  productName,
  oldPrice,
  CurrentPrice,
  stars,
  starNum,
}) => {
  return (
    <div className="productCard rounded overflow-hidden">
      <img src={imgUrl} alt="" />
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
