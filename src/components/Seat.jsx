import React, { Component } from 'react';

import { connect } from 'react-redux'
import clxs from 'clsx'

class Seat extends Component {
    render() {
        const { item, seatSelectedList, handleChoose } = this.props
        return (
            <button
                onClick={() => handleChoose(item)}
                disabled={item.daDat}
                className=
                {clxs('seat',
                    {
                        booked: item.daDat,
                        booking: seatSelectedList.find(e => e.soGhe === item.soGhe)
                    }
                )}
            >
                {item.soGhe}
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seatSelectedList: state.seat.seatSelectedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChoose: (item) => {
            dispatch({
                type: 'CHOOSE_SEAT',
                payload: item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seat);