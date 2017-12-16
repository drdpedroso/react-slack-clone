import React from 'react'
import PropTypes from 'prop-types'
import Channel from '../Channel'

class ChannelList extends React.Component {
    render () {
        const {setChannel} = this.props
        return (
            <ul>
                {
                    this.props.channels.map(channel => {
                        <Channel 
                            {...{
                                channel,
                                setChannel
                            }}
                        />
                    })
                }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList
