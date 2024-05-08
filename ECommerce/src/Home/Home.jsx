import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import './Home.scss'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



function Home() {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/product.json");
        if (!response.status === 200) {
          throw new Error("Failed to fetch data");
        }
        setCategories(response.data.productData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    }

    fetchData();
  }, []);

  return (
    
    <section className="home">
        <Navbar/>
      <div className="homeMainContainer">
        <div className="categorySlider">
        <Marquee>
            {
                categories.map(({id,image,cat_name}) => (
                    <div key={id} className="categorySliderItems">
                        <img src={image} alt="" />
                        <h3>{cat_name}</h3>
                    </div>
                ))
            }
     </Marquee>
        </div>

        <div className="categoriesContainer">
          <h2>Categories</h2>
          <div className="categories">
            {categories.map(({ image, cat_name }) => (
              <div key={cat_name} className="category">
                <img src={image} alt="" />
                <Link to={`/category/${cat_name}`}>{cat_name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;




















