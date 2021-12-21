import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategorySection } from "../../redux/category/category.selector";
import MenuItem from "../menu-item/menu-item.component";
import { CategoryMenu } from "./category.styles";

const Category = ({ sections }) => (
  <CategoryMenu>
    {sections.map(({ id, ...otherData }) => (
      <MenuItem key={id} {...otherData} />
    ))}
  </CategoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectCategorySection,
});

export default connect(mapStateToProps)(Category);
