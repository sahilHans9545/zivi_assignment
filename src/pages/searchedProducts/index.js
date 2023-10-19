import React from "react";
import Logo from "../../components/logo";
import SearchBar from "../../components/searchBar/SearchBar";
import "./style.scss";
import ProductCard from "../../components/productCard/ProductCard";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import product7 from "../../assets/images/product7.png";
import product8 from "../../assets/images/product8.png";

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
              <ProductCard
                imgUrl={product1}
                productName="Round neck cotton Tee"
                oldPrice="599"
                CurrentPrice="549"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product2}
                productName="High waist trousers"
                oldPrice="999"
                CurrentPrice="749"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product3}
                productName="High neck pullover"
                oldPrice="899"
                CurrentPrice="849"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product4}
                productName="satin jumpsuit"
                oldPrice="650"
                CurrentPrice="549"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product5}
                productName="High waist trousers"
                oldPrice="999"
                CurrentPrice="749"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product6}
                productName="High waist trousers"
                oldPrice="999"
                CurrentPrice="749"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product7}
                productName="High waist trousers"
                oldPrice="999"
                CurrentPrice="749"
                stars={5}
                starNum={210}
              />
              <ProductCard
                imgUrl={product8}
                productName="High waist trousers"
                oldPrice="999"
                CurrentPrice="749"
                stars={5}
                starNum={210}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
