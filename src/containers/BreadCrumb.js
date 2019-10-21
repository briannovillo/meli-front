import { connect } from 'react-redux';
import Breadcrumb from '../components/breadcrumb';

const mapStateToProps = (state) => {
  return {
    paths: ['Algo']
  };
};

export default connect(
  mapStateToProps,
)(Breadcrumb);
