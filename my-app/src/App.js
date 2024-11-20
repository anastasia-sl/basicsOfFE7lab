import React from "react";
import Header from "./components/Header";
import Content from "./components/content";
import Image from "./components/Image";
import './App.css';
import GoodsCard from "./components/GoodsCard";

function App() {
    const goods = [
        {
            id: 1,
            image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Apple",
            name: "Apple",
            price: 15,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Pear",
            name: "Pear",
            price: 20,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150/900C3F/FFFFFF?text=Grape",
            name: "Grape",
            price: 25,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150/C70039/FFFFFF?text=Peach",
            name: "Peach",
            price: 18,
        },
        {
            id: 5,
            image: "https://via.placeholder.com/150/581845/FFFFFF?text=Banana",
            name: "Banana",
            price: 10,
        },
        {
            id: 6,
            image: "https://via.placeholder.com/150/28B463/FFFFFF?text=Cherry",
            name: "Cherry",
            price: 30,
        },
    ];
  return (
      <div>
          <div>
              <Header />
              <Content />
              <Image />
          </div>
          <div className="gallery">
              {goods.map((item) => (
                  <GoodsCard
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                  />
              ))}
          </div>
      </div>
  );
}

export default App;
