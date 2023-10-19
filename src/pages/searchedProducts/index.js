import React from "react";
import Logo from "../../components/logo";
import SearchBar from "../../components/searchBar/SearchBar";
import "./style.scss";
import ProductCard from "../../components/productCard/ProductCard";

const Products = () => {
  return (
    <div
      id="productsPage"
      className=" relative w-full min-h-[100vh]  pb-14 gap-5"
    >
      <Logo />
      <SearchBar />
      <div className="px-10 mt-12">
        <h2 className="text-[26px] lg:text-[40px]">Search Results</h2>
        <div className="flex mt-10">
          <div className="w-[350px]"></div>
          <div className=" flex-1">
            <div className="productsGrid">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
