
import { IDepoiment } from '../utils/Depoimentos'

type Props = {
    depoiment: IDepoiment
}

const DepoimentCard = ({ depoiment }: Props) => {
    return (
        <div className='flex flex-col border-2 rounded-md p-6 bg-white gap-6 mx-2 h-full justify-around'>
            <div className='flex justify-between'>
                <div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold'>{depoiment.username}</h1>
                        <h3 className='text-md'>{depoiment.date}</h3>
                    </div>
                </div>
                <div className='flex gap-2'>
                    {Array.from({ length: depoiment.rate }).map((_,i) => {
                    return (
                        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
                            <path d="M17.0815 1.13274C17.4286 0.326779 18.5714 0.326779 18.9185 1.13274L23.1728 11.0117C23.3175 11.3479 23.6344 11.5781 23.9989 11.6119L34.709 12.6052C35.5827 12.6863 35.9359 13.7731 35.2766 14.3522L27.1958 21.4511C26.9208 21.6926 26.7998 22.0651 26.8803 22.4222L29.2452 32.9151C29.4381 33.7711 28.5136 34.4428 27.7591 33.9948L18.5106 28.5032C18.1958 28.3163 17.8042 28.3163 17.4894 28.5032L8.24093 33.9948C7.4864 34.4428 6.56191 33.7711 6.75484 32.9151L9.11973 22.4222C9.2002 22.0651 9.07917 21.6926 8.80418 21.4511L0.723411 14.3522C0.0641486 13.7731 0.417275 12.6863 1.29105 12.6052L12.0011 11.6119C12.3656 11.5781 12.6825 11.3479 12.8272 11.0117L17.0815 1.13274Z" fill="#F5BF00" />
                        </svg>

                    )
                })} 
                </div>
            </div>
            <h2 className='text-xl italic'>
                {depoiment.depoiment}
            </h2>
        </div>

    )
}

export default DepoimentCard