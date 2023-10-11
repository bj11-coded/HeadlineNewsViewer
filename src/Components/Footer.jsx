import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className=" footer text-center text-light p-2 ">
                    <div className="footer-body p-2">
                        <h5 className="card-title mb-2">News Rainer </h5>
                        <p className="card-text">the perfect place to know the world in the better way </p> 
                    </div>
                </div>
            </>

        )
    }
}
