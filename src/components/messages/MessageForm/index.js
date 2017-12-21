import React from 'react'
import PropTypes from 'prop-types'

class MessageForm extends React.Component {

    onSubmit (e) {
        e.preventDefault()
        const node = this.refs.message
        const name = node.value
        this.props.addMessage(name)
    }

    render () {
        return (
            <form onSubmit={e => {this.onSubmit(e)}}>
                <input type='text' ref='message' />
            </form>
        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}


export default MessageForm