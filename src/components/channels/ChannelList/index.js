import React from 'react'
import PropTypes from 'prop-types'
import Channel from '../Channel'

class ChannelList extends React.Component {
    render () {
        const {setChannel} = this.props
        console.log(setChannel)
        return (
            <ul>
                {
                    this.props.channels.map(channel => {
                        return (<Channel 
                            {...{
                                channel,
                                key: channel.id,
                                setChannel
                            }}
                        />)
                    })
                }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default ChannelList
