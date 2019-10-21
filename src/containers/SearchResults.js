import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';
import { productSearchFetch } from '../redux/reducers/modules/product';

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    productSearchFetch
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
