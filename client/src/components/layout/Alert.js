import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
        <div key={alert.id} className={`bg-color-${alert.alertType} text-color-white p-3 text-center content-center justify-center z-80 absolute w-full z-10`}>
            <b>{alert.msg}</b>
        </div>
    ))

Alert.propTypes = {
    alerts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
