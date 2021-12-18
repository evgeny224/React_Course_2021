import React from "react";
import ProductCount from "./ProductCount";

type ProductCounterPropsType = {
  productName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const { productName, count, setCount } = props;

  const addHandler = () => {
    setCount((prev) => prev + 1);
  };
  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="productCounter">
      <h1>{productName}</h1>
      <button onClick={deleteHandler} type="button">
        Убавить
      </button>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        Добавить
      </button>
    </div>
  );
};

export default ProductCounter;
