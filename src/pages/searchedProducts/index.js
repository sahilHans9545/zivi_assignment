import React, { useEffect, useState } from "react";
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
import star1 from "../../assets/images/star1.svg";
import star2 from "../../assets/images/star2.svg";
import star3 from "../../assets/images/star3.svg";
import star4 from "../../assets/images/star4.svg";
import star5 from "../../assets/images/star5.svg";
import filterIcon from "../../assets/images/filter.png";
import FilterHeading from "../../components/FilterHeading";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../utils/fetchProducts";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const { query } = useParams();
  useEffect(() => {
    console.log("new");
    const options = {
      method: "GET",
      url: "https://real-time-product-search.p.rapidapi.com/search",
      params: {
        q: query,
        country: "in",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "e52cc67da7msha25fd9764644777p174987jsn6ececba144f1",
        "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
      },
    };

    // getProducts(options);
  }, [query]);

  const getProducts = async (options) => {
    // const searchedProducts = await fetchProducts(options);
    // setProducts(searchedProducts);
    console.log("..");
  };
  return (
    <div
      id="productsPage"
      className=" relative w-full min-h-[100vh]  pb-14 gap-5"
    >
      <div>{query}</div>
      <Logo />
      <div className="md:mt-0 mt-14 px-5 md:px-0">
        <SearchBar />
      </div>

      <div className="px-5 md:px-10 mt-8 sm:mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-[26px] lg:text-[40px]">Search Results</h2>
          <img
            src={filterIcon}
            alt=""
            className="md:hidden w-6 h-7 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>
        <div className="flex mt-8 sm:mt-10 gap-16">
          <div
            className={`w-[270px] md:sticky fixed top-0 left-0 h-screen bg-white overflow-auto  px-5 py-10 md:py-0 md:px-0 z-10 md:h-fit md:top-8  md:block md:translate-x-0 ${
              showFilter ? "translate-x-0" : "translate-x-[-100%]"
            } shadow-lg md:shadow-none `}
          >
            <div>
              <FilterHeading heading="brand" />
              <div className="flex flex-col gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">Mango</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">H&M</label>
                </div>
              </div>
            </div>
            <hr className="mt-7 mb-5" />

            <div>
              <FilterHeading heading="price range" />
              <div className="flex flex-col gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">under 500</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">1000 to 3000</label>
                </div>
              </div>
            </div>
            <hr className="mt-7 mb-5" />

            <div>
              <FilterHeading heading="ratings" />
              <div className="flex flex-col gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">
                    <img src={star5} alt="" className="relative right-[30px]" />
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">
                    <img src={star4} alt="" className="relative right-[30px]" />
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">
                    <img src={star3} alt="" className="relative right-[30px]" />
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">
                    <img src={star2} alt="" className="relative right-[30px]" />
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                  <label htmlFor="">
                    <img src={star1} alt="" className="relative right-[30px]" />
                  </label>
                </div>
              </div>
            </div>
          </div>
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
