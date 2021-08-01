import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        <img src="https://cdn.dribbble.com/users/230124/screenshots/15845834/media/23579acd689b449168527eaa5993f970.jpg?compress=1&resize=400x300" width="30" height="30" alt="" />
                    </Link>
                </nav>
            </>
        )
    }
}

export default Header
