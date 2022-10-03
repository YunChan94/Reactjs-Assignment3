import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import classes from "./DetailPage.module.css";
const DetailPage = () => {
  // Lấy dữ liệu từ server
  const [product, setProduct] = useState(null);
  const [relateProduct, setRelateProduct] = useState([]);
  //Lấy id sản phẩm
  const params = useParams(); //a ktr xem nó có cập nhật váo state k a?
  const { productId } = params;

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        const productFound = data.find(
          (product) => product._id.$oid === productId
        );
        setProduct(productFound);
        console.log("product", product);

        // Tìm sản phẩm có cùng category
        const relateProductFound = data.filter(
          (item) =>
            item.category === productFound.category &&
            item._id.$oid !== productId
        );
        setRelateProduct(relateProductFound);
      });
  }, []);

  console.log("productId", productId);

  console.log(relateProduct);
  return (
    <div>
      {product && (
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={product.img1} alt="" />
          </div>
          <div className={classes.decs}>
            <h2>{product.name}</h2>
            <p>{`${product.price.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} VND`}</p>
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
            <h3>RELATE PRODUCTS</h3>
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
      )}
    </div>
  );
};
export default DetailPage;
