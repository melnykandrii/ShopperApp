import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategorySection } from "../../redux/category/category.selector";
import MenuItem from "../menu-item/menu-item.component";
import "./category.style.scss";

const Category = ({ sections }) => (
  <div className="category-menu">
    {sections.map(({ id, ...otherData }) => (
      <MenuItem key={id} {...otherData} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectCategorySection,
});

export default connect(mapStateToProps)(Category);
