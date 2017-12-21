import React, {Component} from 'react'
import fecha from 'fecha'
import ChannelSection from './channels/ChannelSection'
import UserSection from './users/UserSection'
import MessageSection from './messages/MessageSection'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      channels: [],
      users: [],
      messages: []
    }

  }

  addChannel (name) {
    let {channels} = this.state
    channels.push({id: channels.length, name})
    this.setState({channels})
    // TODO: Send to server
  }

  addMessage (text) {
    let {messages} = this.state
    const createdAt = fecha.format(new Date(), 'HH:mm:ss DD/MM/YY');
    messages.push({id: messages.length, text, timestamp: createdAt})
    this.setState({messages})
    // TODO: Send to server
  }

  setChannel (activeChannel) {
    this.setState({activeChannel})
    // TODO: Get Channels Messages
  }

  addUser (name) {
    let {users} = this.state
    users.push({id: users.length, name})
    this.setState({users})
    // TODO: Send to server
  }

  render(){
    return (
      <div className='app'>
        <div className='collumn'>
          <div className='nav'>
            <ChannelSection 
              {...this.state}
              addChannel={this.addChannel.bind(this)}
              setChannel={this.setChannel.bind(this)}
            />
          </div>
          <div className='nav'>
            <UserSection 
              {...this.state}
              addUser={this.addUser.bind(this)}  
            />
          </div>
        </div>
        <div className='nav full'>
            <MessageSection 
              {...this.state}
              addMessage={this.addMessage.bind(this)}  
            />
        </div>
      </div>

      
    )
  }
}

export default App