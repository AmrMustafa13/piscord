import { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import { IoPersonAddSharp } from 'react-icons/io5'
import SingleChannel from './SingleChannel'

interface ChannelGroupProps {
    channelGroup: {
        id: number,
        name: string,
        channels: Channel[]
    }
}

export interface Channel {
    id: number,
    name: string,
    isVoice: boolean
}

const ChannelGroup = ({ channelGroup }
    : ChannelGroupProps
) => {

    const [isOpened, setIsOpened] = useState(true);

    const toggleIsOpened = () => {
        setIsOpened(
            (prevState) => !prevState
        );
    }

    return (
        <div className="flex flex-col gap-2"
            key={
                channelGroup.id
            }
        >
            <div className="flex items-center gap-1 text-xs font-semibold hover:text-tx-primary cursor-pointer uppercase"
                onClick={
                    toggleIsOpened
                }
            >
                {isOpened ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
                <span>
                    {channelGroup.name.length > 25 ? channelGroup.name.substring(0, 25) + "..." : channelGroup.name}
                </span>
            </div>
            {
                isOpened && (<ul className="text-lg lowercase flex flex-col gap-2 pl-4">
                    {
                        channelGroup.channels.map((channel) => (
                            <SingleChannel
                                key={channel.id}
                                channel={channel}
                            />
                        ))
                    }
                </ul>)
            }
        </div>
    )
}

export default ChannelGroup