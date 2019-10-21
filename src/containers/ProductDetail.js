import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';
import { productGetFetch } from '../redux/reducers/modules/product';

const mapStateToProps = (state) => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = {
  productGetFetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
