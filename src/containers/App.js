import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  const { isFetching, items, lastUpdated } = state;
  
  return {
    isFetching,
    items,
    lastUpdated
  };
}

export default connect(mapStateToProps)(App);