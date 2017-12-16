import React from 'react'
import PropTypes from 'prop-types'

class Channel extends React.Component {

    onClick (e) {
        e.preventDefault()
        const {setChannel, channel} = this.props
        setChannel(channel)
    }

    render () {
        const {channel} = this.props
        return (
            <li>
                <a onClick={() => {this.props.onClick()}}>
                    {channel.name}
                </a>    
            </li>

        )
    }

}

Channel.propTypes = {
    channel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default Channel