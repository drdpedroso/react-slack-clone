import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'

class MessageList extends React.Component {
    render () {
        console.log(1, this.props)
        return (
            <ul>
                {
                    this.props.messages.map(message => {
                        return (<Message 
                            {...{
                                message,
                                key: message.id,
                                author: this.props.users[0] ? this.props.users[0].name : null
                            }}
                        />)
                    })
                }
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList
