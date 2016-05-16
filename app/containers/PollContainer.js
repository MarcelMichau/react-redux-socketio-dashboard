import { connect } from 'react-redux';
import Poll from '../components/Poll';
import { addLogEntry, addErrorFlag, removeErrorFlag, clearLogEntries } from '../actions/actions';

const PollContainer = connect(
    function mapStateToProps (state) {
        return { logLines: state.logs };
    },
    function mapDispatchToProps (dispatch) {
        return {
          addLogEntry: (log) => dispatch(addLogEntry(log)),
          addErrorFlag: () => dispatch(addErrorFlag()),
          removeErrorFlag: () => dispatch(removeErrorFlag()),
          clearLogEntries: () => dispatch(clearLogEntries())
        };
    }
)(Poll);

export default PollContainer;