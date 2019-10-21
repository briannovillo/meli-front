import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';

const mapStateToProps = (state) => {
  return {
    product: state.product.product
  };
};

export default connect(
  mapStateToProps
)(ProductDetail);
