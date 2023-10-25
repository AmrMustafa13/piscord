import { GiSoundOn } from 'react-icons/gi'
import { BiHash } from 'react-icons/bi'

interface ChannelProps {
    channel: {
        id: number,
        name: string,
        isVoice: boolean
    }
}

const SingleChannel = ({ channel }
    : ChannelProps
) => {
    return (
        <li className="flex items-center gap-1 cursor-pointer" key={channel.id}>
            {channel.isVoice ? <GiSoundOn className="text-2xl" /> : <BiHash className="text-2xl" />}
            <span>{channel.name} </span>
        </li>
    )
}

export default SingleChannel