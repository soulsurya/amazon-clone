import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const notify = (statement) => {
    toast.success("Item added to Cart !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    notify();
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="title">{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
