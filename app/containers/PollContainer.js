import { connect } from 'react-redux';
import Poll from '../components/Poll';
import { addLogEntry } from '../actions/actions';

const PollContainer = connect(
    function mapStateToProps (state) {
        return { logLines: state.logs };
    },
    function mapDispatchToProps (dispatch) {
        return {
          addLogEntry: (log) => dispatch(addLogEntry(log)) 
        };
    }
)(Poll);

export default PollContainer;