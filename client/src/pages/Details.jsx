
import React, { useEffect, useState } from 'react';
import { ProductDetails } from "./../components/ProductDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState([]);
  let params = useParams();

  useEffect(() => {
    details();
  }, [])
  
  const details = async () => {
    await axios.get('http://localhost:3001/details', {
      withCredentials: false,
      params: {
        id: params.id,
      }
    }).then(res => {
      setProduct(res.data)
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <>
      {Object.values(product).length > 0 &&
        <ProductDetails product={product} />
      }
    </>
  );
};

export default Details;