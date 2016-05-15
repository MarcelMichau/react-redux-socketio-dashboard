import { connect } from 'react-redux';
import DashboardPanel from '../components/DashboardPanel';

const mapStateToProps = (state) => {
    return {
        hasError: state.hasError
    }
} 

const DashboardPanelContainer = connect(
    mapStateToProps,
    null
)(DashboardPanel);

export default DashboardPanelContainer;