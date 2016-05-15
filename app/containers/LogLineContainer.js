import { connect } from 'react-redux';
import LogLine from '../components/LogLine';
import { addErrorFlag, removeErrorFlag } from '../actions/actions';

const LogLineContainer = connect(
    null,
    function mapDispatchToProps (dispatch) {
        return {
          addErrorFlag: () => dispatch(addErrorFlag()),
          removeErrorFlag: () => dispatch(removeErrorFlag())  
        };
    }
)(LogLine);

export default LogLineContainer;