import React from 'react'
import PropTypes from 'prop-types'
import User from '../User'

class UserList extends React.Component {
    render () {
        return (
            <ul>
                {
                    this.props.users.map(user => {
                        return (<User 
                            {...{
                                user,
                                key: user.id
                            }}
                        />)
                    })
                }
            </ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList
