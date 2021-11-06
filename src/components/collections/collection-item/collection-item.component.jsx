import React from "react";
import CustomButton from "../../custom-button/custom-button.component";

import "./collection-item.styles.scss";

export const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton type="button" onClick={() => console.log("click")} inverted>
      TO CART
    </CustomButton>
  </div>
);
