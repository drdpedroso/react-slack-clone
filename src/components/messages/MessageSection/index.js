import React, {Component} from 'react'
import MessageForm from '../MessageForm'
import MessageList from '../MessageList'
import PropTypes from 'prop-types'

class MessageSection extends Component{
  render(){
    const {activeChannel} = this.props
    return (
      <div className=' panel panel-primary messages-container'>
        <div className='panel-heading'>
            <div className='panel-heading'><strong>{activeChannel ? activeChannel.name : 'Select A Channel'}</strong></div>
        </div>
        <div className='panel-body channels'>
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
      
    )
  }
}

// MessageSection.propTypes = {
//   users: PropTypes.array.isRequired,
//   addChannel: PropTypes.func.isRequired
// }

export default MessageSection