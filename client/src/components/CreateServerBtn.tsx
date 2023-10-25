import { AiOutlinePlus } from 'react-icons/ai'

const CreateServerBtn = () => {
    return (
        <button className="flex justify-center items-center w-12 h-12 bg-primary rounded-full  text-2xl text-complementary hover:rounded-2xl hover:text-tx-primary hover:bg-complementary transition duration-500">
            <AiOutlinePlus />
        </button>
    )
}

export default CreateServerBtn