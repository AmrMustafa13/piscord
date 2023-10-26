import { Outlet, useParams } from "react-router-dom"
import { useState } from "react"
import ChannelGroup from "./ChannelGroup"
import SoundControls from "./SoundControls"

const channelGroupsMockData = [
    {
        id: 1,
        name: 'General Channele testing the length of the name now hello world',
        channels: [
            {
                id: 1,
                name: 'general-infra',
                isVoice: false,
            },
            {
                id: 2,
                name: 'front-end-resources',
                isVoice: false,
            },
            {
                id: 3,
                name: 'back-end-resources',
                isVoice: true,
            }
        ]
    },
    {
        id: 2,
        name: 'Voice Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: false,
            },
            {
                id: 2,
                name: 'Front-end',
                isVoice: false,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: false,
            }
        ]
    },
    {
        id: 3,
        name: 'Text Channels',
        channels: [
            {
                id: 1,
                name: 'General'
                ,
                isVoice: false,
            },
            {
                id: 2,
                name: 'Front-end'
                ,
                isVoice: false,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: false,
            }
        ]
    },
    {
        id: 4,
        name: 'Voice Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: true,
            },
            {
                id: 2,
                name: 'Front-end',
                isVoice: true,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: true,
            }
        ]
    },
    {
        id: 5,
        name: 'Text Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: false,
            },
            {
                id: 2,
                name: 'Front-end',
                isVoice: false,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: false,
            }
        ]
    }, {
        id: 6,
        name: 'Text Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: false,
            },
            {
                id: 2,
                name: 'Front-end',
                isVoice: false,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: false,
            }
        ]
    }, {
        id: 7,
        name: 'Text Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: false,
            },
            {
                id: 2,
                name: 'Front-end',
                isVoice: false,
            },
            {
                id: 3,
                name: 'Back-end',
                isVoice: false,
            }
        ]
    }, {
        id: 8,
        name: 'Text Channels',
        channels: [
            {
                id: 1,
                name: 'General',
                isVoice: false,
            },
        ]
    }
]

const ChannelsSidebar = () => {

    const [channelGroups, setChannelGroups] = useState(channelGroupsMockData);

    const { serverId } = useParams()

    return (
        <div className="flex">
            <div className="bg-secondary text-tx-secondary min-w-[240px] flex flex-col max-h-screen">
                <header>
                    <h1 className="text-white font-semibold py-3 px-4 border-b-2 border-accent">Graduation Project {serverId}</h1>
                </header>
                <section className="p-2 flex flex-col gap-4 overflow-y-scroll  scrollbar scrollbar-w-[6px] scrollbar-track-secondary scrollbar-thumb-accent scrollbar-thumb-rounded">
                    {
                        channelGroupsMockData.map((channelGroup) => (
                            <ChannelGroup
                                channelGroup={channelGroup}
                            />
                        ))
                    }
                </section>
                <SoundControls />
            </div>
            <Outlet />
        </div>
    )
}

export default ChannelsSidebar;
