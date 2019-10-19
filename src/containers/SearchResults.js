import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';
import { search } from '../redux/actions/searchResults';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.search
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
)(SearchResults);
