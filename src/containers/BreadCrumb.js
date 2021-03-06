import { connect } from 'react-redux';
import Breadcrumb from '../components/breadcrumb';

const mapStateToProps = (state) => {
  return {
    paths: state.product.breadcrumb
  };
};

export default connect(
  mapStateToProps,
)(Breadcrumb);
