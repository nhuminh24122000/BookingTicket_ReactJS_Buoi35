import React, { Component } from 'react';

import { connect } from 'react-redux'
import Seat from './Seat';

class SeatList extends Component {

    render() {
        const { seatList } = this.props
        return (
            <div className='d-flex flex-column gap-3'>
                {seatList.map(item => {
                    return (
                        <div key={item.hang} className='d-flex justify-content-center align-items-center'>
                            <div className='me-2 fw-bold fs-3' style={{ width: '30px' }}>
                                {item.hang}
                            </div>

                            <div>
                                {item.danhSachGhe.map(ghe => {
                                    return <Seat key={ghe.soGhe} item={ghe} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seatList: state.seat.seatList
    }
};

export default connect(mapStateToProps)(SeatList);
