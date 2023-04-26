import React, { Component } from 'react';

import { connect } from 'react-redux';

class BookingInfo extends Component {
    render() {
        const { seatSelectedList, handleDeleteSeat, handlePayment } = this.props
        return (
            <div>

                <div className='mb-4'>
                    <div className="detail">
                        <div className="box-yellow"></div>
                        <p>Ghế Đã Đặt</p>
                    </div>
                    <div className="detail">
                        <div className="box-green"></div>
                        <p>Ghế Đang Chọn</p>
                    </div>
                    <div className="detail">
                        <div className="box-white"></div>
                        <p>Ghế Chưa Đặt</p>
                    </div>
                </div>

                <table className='table table-hover table-bordered'>
                    <thead className='text-center table-light'>
                        <tr>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody className='text-center table-info'>
                        {seatSelectedList.map(item => {
                            return (
                                <tr key={item.soGhe}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia.toLocaleString()} {' VND'}</td>
                                    <td><i
                                        onClick={() => handleDeleteSeat(item)}
                                        className="fa fa-trash-alt"></i></td>
                                </tr>
                            )
                        })}

                        <tr className='table-danger fw-bold'>
                            <td>Tổng Tiền</td>
                            <td colSpan={2}>
                                {seatSelectedList.reduce((tt, item) => {
                                    return tt += item.gia
                                }, 0).toLocaleString()} {' VNĐ'}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="text-center">
                    <button
                        onClick={handlePayment}
                        className='btn btn-primary fs-5 mt-3'>Thanh Toán</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seatSelectedList: state.seat.seatSelectedList
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        handleDeleteSeat: (seat) => {
            dispatch({
                type: 'CHOOSE_SEAT',
                payload: seat,
            })
        },
        handlePayment: () => {
            dispatch({
                type: 'PAY',
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(BookingInfo);