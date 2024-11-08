import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/Images/HeroImage.jpg";
import CategorySection from "../components/CategorySection";
import { setProducts } from '../redux/ProductSlice'
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop By Category
          </div>
          <ul className="space-y-4 bg-gray-100 p-3  border ">
            {Categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative ">
          <img src={HeroImage} alt="Hero" className="w-full h-full" />
          <div className="absolute top-2 left-4">
            <h2 className="text-3xl font-bold text-gray-600">
              Welcome to E-commerce
            </h2>
          </div>
        </div>
      </div>
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold m b-6 text-center pb-8">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.products.map((product, index) => (
           <ProductCard key={index} product={product} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
