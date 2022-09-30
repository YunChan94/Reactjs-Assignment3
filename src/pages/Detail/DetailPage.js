import React from "react";
import { useParams, Route } from "react-router-dom";

import classes from "./DetailPage.module.css";
const DetailPage = (props) => {
  // Lấy dữ liệu từ server
  // const [data, setData] = useState([]);

  //Lấy id sản phẩm
  const params = useParams();
  const { productId } = params;

  // useEffect(() => {
  //   fetch(
  //     "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  // Lấy dữ liệu của sản phẩm cần hiển thị detail
  const product = props.data.find((product) => product._id.$oid === productId);
  console.log(product);

  // Tìm sản phẩm có cùng category
  const relateProduct = props.data.filter(
    (item) => item.category === product.category && item._id.$oid !== productId
  );
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={product.img1} alt="" />
        </div>
        <div className={classes.decs}>
          <h2>{product.name}</h2>
          <p>{`${product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</p>
          <p>{product.short_desc}</p>
          <p style={{ color: "black", fontWeight: "bolder" }}>CATEGORY:</p>
          <p>{product.category}</p>
          <div className={classes.inputForm}>
            <form>
              <input type="number" placeholder="QUANTITY" step="1" min="1" />
              <button className={classes.addBtn}>Add to Cart</button>
            </form>
          </div>
        </div>
        <div className={classes.description}>
          <button>DESCRIPTION</button>
          <h3>PRODUCT DESCRIPTION</h3>
          <p>{product.long_desc}</p>
        </div>
        <div>
          <h3>RELATE PRODUCT</h3>
          {relateProduct && (
            <div className={classes.productsList}>
              {relateProduct.map((item) => (
                <div className={classes.productItem} id={item._id.$oid}>
                  <img src={item.img1} alt="" id={item._id.$oid} />
                  <h5>{item.name}</h5>
                  <p>{`${item.price.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )} VND`}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
