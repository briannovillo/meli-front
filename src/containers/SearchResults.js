import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps
)(SearchResults);
