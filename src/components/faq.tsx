import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { IFaq } from '../utils/Faqs'


type Props = {
    faq: IFaq
}

const FaqCard
    = ({ faq }: Props) => {
        const [isOpened, setIsOpened] = useState(false)

        return (
            <button
                onClick={() => setIsOpened(!isOpened)}
                className='flex flex-col justify-between '>
                <div className='flex w-full justify-between items-start sm:items-center transition gap-8 border-b-2 border-white p-2 '>
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-700 text-start">{faq.question}</h1>
                    {isOpened ? (
                        <BsChevronUp size={20} color='#021526' />
                    ) : (
                        <BsChevronDown size={20} color='#021526' />
                    )}
                </div>  
                {
                    isOpened && (
                        <h3 className='text-start mt-4'>
                            {faq.respose}
                        </h3>
                    )
                }

            </button>
        )
    }

export default FaqCard
