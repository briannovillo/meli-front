import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductDetail from '../components/productDetail';
import { search } from '../redux/actions/searchResults';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.product
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getData: search
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
