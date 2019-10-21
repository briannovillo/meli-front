import { connect } from 'react-redux';
import SearchBox from '../components/searchBox';
import { productSearchFetch } from '../redux/reducers/modules/product';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  productSearchFetch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
