import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionForPriview } from "../../../redux/shop/shop.selector";
import { CollectionPreview } from "../collection-preview/collectionpreview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPriview,
});

export default connect(mapStateToProps)(CollectionsOverview);
