import React from 'react'
import PropTypes from 'prop-types'

class UserForm extends React.Component {

    onSubmit (e) {
        e.preventDefault()
        const node = this.refs.user
        const name = node.value
        this.props.addUser(name)
    }

    render () {
        return (
            <form onSubmit={e => {this.onSubmit(e)}}>
                <input type='text' ref='user' />
            </form>
        )
    }
}

UserForm.propTypes = {
    addUser: PropTypes.func.isRequired
}


export default UserForm