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
                <a onClick={e => {this.onClick(e)}}>
                    {channel.name}
                </a>    
            </li>

        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default Channel