import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
        <div className="flex flex-1 z-100">
            <div key={alert.id} className={`flex bg-color-${alert.alertType} text-color-white p-3 text-center content-center justify-center relative w-full z-50`}>
                <b>{alert.msg}</b>
            </div>

        </div>
    ))

Alert.propTypes = {
    alerts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
