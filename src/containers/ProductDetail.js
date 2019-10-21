import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';
import { productGetFetch } from '../redux/reducers/modules/product';

const mapStateToProps = (state) => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    productGetFetch
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
