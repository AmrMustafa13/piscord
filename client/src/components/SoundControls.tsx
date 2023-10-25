import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'
import { MdHeadset, MdSettings } from 'react-icons/md'

const SoundControls = () => {
    return (
        <div className="bg-accent py-3 px-2">
            <div className="flex items-center justify-between gap-2">
                <div className="w-8 h-8 relative">
                    <img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="avatar" className="w-full h-full rounded-full object-cover" />
                    <div className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-complementary"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-tx-primary text-sm font-semibold">Amr Mustafa</span>
                    <span className="text-xs">Online</span>
                </div>
                <div className='text-icons-primary flex items-center gap-2 text-xl'>
                    {/* <BsFillMicFill /> */}
                    <BsFillMicMuteFill className="cursor-pointer" />
                    <MdHeadset className="cursor-pointer" />
                    <MdSettings className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default SoundControls