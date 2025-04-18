import axios from "axios";
import { useEffect, useState } from "react";
import { setProduct } from "../../store/productCardView/productCardSlice";
import { useDispatch } from "react-redux";

interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    // Add more fields based on your API response
  }

const useWomenData = () => {
    const dispatch = useDispatch()
    const [womenData, setWomenData] = useState<Product[]>([]);
    useEffect(()=>{
        axios
          .get(`http://localhost:5000/product/show-product`)
          .then((res) => {
            const femailCloth = res.data.products.filter(item => item.type === "female")
            setWomenData(femailCloth);
            dispatch(setProduct(femailCloth));
          })
          .catch((err) => {
            console.log("something went wrong while getting the womens data" + err);
          });

    },[])
  return {womenData}
}

export default useWomenData