import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {

    render () {
        const {message, author} = this.props
        return (
            <li>
                <div className='author'>
                    <strong>{author}</strong> 
                </div>
                <span>
                    {message.text}
                </span>
                <span className='timestamp'>
                    {message.timestamp}
                </span>
            </li>

        )
    }

}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message