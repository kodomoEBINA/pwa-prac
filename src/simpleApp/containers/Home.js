import { connect } from 'react-redux';

import * as action from '../modules/home';
import Top from '../components/Top.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadHome: () => {
    dispatch(action.loadHome());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Top);
