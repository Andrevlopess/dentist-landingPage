
import { IDepoiment } from '../utils/Depoimentos'

type Props = {
    depoiment: IDepoiment
}

const DepoimentCard = ({ depoiment }: Props) => {
    return (
        <div className='flex flex-col border-2 rounded-md p-6 bg-white gap-6 mx-2 h-full justify-around active:shadow-2xl'>
            <div className='flex justify-between flex-wrap'>
                <div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold'>{depoiment.username}</h1>
                        <h3 className='text-md'>{depoiment.date}</h3>
                    </div>
                </div>
                <div className='flex gap-2'>
                    {Array.from({ length: depoiment.rate }).map((_,i) => {
                    return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
                        <path d="M11.0815 1.13274C11.4286 0.32678 12.5714 0.326779 12.9185 1.13274L15.5505 7.24457C15.6953 7.58074 16.0121 7.81096 16.3766 7.84477L23.0026 8.45931C23.8764 8.54035 24.2295 9.62716 23.5703 10.2063L18.5709 14.5982C18.2959 14.8398 18.1749 15.2123 18.2554 15.5693L19.7184 22.061C19.9114 22.917 18.9869 23.5887 18.2324 23.1407L12.5106 19.7432C12.1958 19.5563 11.8042 19.5563 11.4894 19.7432L5.76765 23.1407C5.01312 23.5887 4.08862 22.917 4.28156 22.061L5.74464 15.5693C5.82512 15.2123 5.70409 14.8398 5.4291 14.5982L0.42975 10.2063C-0.229512 9.62716 0.123613 8.54035 0.997385 8.45931L7.62342 7.84477C7.98788 7.81096 8.30475 7.58074 8.44952 7.24457L11.0815 1.13274Z" fill="#F5BF00"/>
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