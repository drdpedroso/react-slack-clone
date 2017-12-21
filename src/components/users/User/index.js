import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {

    render () {
        const {user} = this.props
        return (
            <li>
                <span>
                    {user.name}
                </span>    
            </li>

        )
    }

}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User