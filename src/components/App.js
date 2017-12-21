import React, {Component} from 'react'
import fecha from 'fecha'
import ChannelSection from './channels/ChannelSection'
import UserSection from './users/UserSection'
import MessageSection from './messages/MessageSection'
import Socket from '../socket'

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      channels: [],
      users: [],
      messages: [],
      connected: false
    }

  }

  componentDidMount () {
    const ws = this.ws = new WebSocket('ws://echo.websocket.org')
    const socket = this.socket = new Socket(ws)
    socket.on('connect', this.onConnect.bind(this))
    socket.on('disconnect', this.onDisConnect.bind(this))
    socket.on('channel add', this.onAddChannel.bind(this))
    socket.on('user add', this.onAddUser.bind(this))
    socket.on('user edit', this.onEditUser.bind(this))
    socket.on('user remove', this.onRemoveUser.bind(this))
    socket.on('message add', this.onAddMessage.bind(this))
  }

  onAddChannel (channel) {
    let {channels} = this.state
    channels.push(channel)
    this.setState({channels})
  }

  onAddMessage (message) {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
  }

  onRemoveUser (removeUser) {
    let {users} = this.state
    users = users.filter(user => {
      return user.id !== removeUser.id
    })
    this.setState({users})
  }

  onEditUser (editUser) {
    let {users} = this.state
    users = users.map(user => {
      if (editUser.id === user.id) {
        return editUser
      } else {
        return user
      }
    })
    this.setState({users})
  }

  onAddUser (user) {
    let {users} = this.state
    users.push(user)
    this.setState({users})
  }

  onConnect () {
    this.setState({connected: true})
    this.socket.emit('channel subscribe')
    this.socket.emit('user subscribe')
  }

  onDisConnect () {
    this.setState({connected: false})
  }

  addChannel (name) {
    this.socket.emit('channel add', {name})
  }

  addMessage (text) {
    const {activeChannel} = this.state
    this.socket.emit('message add', {channelId: activeChannel.id, text})
  }

  setChannel (activeChannel) {
    this.setState({activeChannel})
    this.socket.emit('message unsubscribe')
    this.setState({messages: []})
  }

  addUser (name) {
    this.socket.emit('user edit', {name})
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