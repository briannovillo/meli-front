import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from '../components/searchBox';

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
