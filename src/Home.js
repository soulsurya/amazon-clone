import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon_home"
      />
      <div className="home__row">
        <Product
          id="1"
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={1009}
          rating={4}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <Product
          id="2"
          title="Solid Gold Petite Micropave"
          price={899}
          rating={5}
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Mens Cotton Jacket"
          price={499}
          rating={5}
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        />
        <Product
          id="4"
          title="Mens Casual Slim Fit"
          price={699}
          rating={3}
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        />
        <Product
          id="5"
          title="Mens Casual Premium Slim Fit T-Shirts"
          price={500}
          rating={5}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          price={49000}
          rating={4}
          image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price={5999}
          rating={3}
          image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        />
        <Product
          id="8"
          title="D 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
          price={4999}
          rating={5}
          image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9"
          title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker JacketMens Cotton Jacket"
          price={1499}
          rating={5}
          image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
        />
        <Product
          id="10"
          title="MBJ Women's Solid Short Sleeve Boat Neck V "
          price={1699}
          rating={4}
          image="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        />
        <Product
          id="11"
          title="DANVOUY Womens T Shirt Casual Cotton Short"
          price={999}
          rating={5}
          image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12"
          title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
          price={5999}
          rating={3}
          image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13"
          title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price={9000}
          rating={4}
          image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        />
        <Product
          id="14"
          title="D 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
          price={4999}
          rating={5}
          image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
