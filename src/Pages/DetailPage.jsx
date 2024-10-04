import { Link, useParams, useSearchParams } from "react-router-dom";
// import { useProductDetails } from "../context/ProductsContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import styles from './DetailsPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { useEffect } from "react";

function DetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productDetails = useSelector((state) => state.product.products.find(i => i.id == id));
  console.log(productDetails);
  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.desc}>{productDetails.description}</p>
        <p className={styles.cat}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price}$
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
