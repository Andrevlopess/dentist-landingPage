
const InputField = ({ type, label }: { type: string, label: string }) => {
    return (
        <div>
            <label htmlFor={label} className='text-white font-semibold text-lg'>{label}</label>
            {
                type !== 'textarea' ? (
                    <input className="appearance-none  w-full bg-gray-200 text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id={label} type={type} placeholder={`Insira seu ${label}`} />
                ) : (
                    <textarea className="appearance-none  w-full bg-gray-200 text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white min-h-[150px]" id={label} placeholder={`${label} ...`} />
                )
            }

        </div>
    )

}
const Form = () => {
    return (
        <form
            className='flex bg-blue-500 rounded-lg px-10 py-6 lg:w-1/2 flex-col relative'
            onSubmit={(e) => e.preventDefault()}>
            <div className='w-2/3 h-2/3 bg-blue-400 absolute -top-4 md:-top-10 -left-4 md:-left-10 -z-10 rounded-lg' />

            <div className='w-2/3 h-2/3 bg-blue-400 absolute -bottom-4 md:-bottom-10 -right-4 md:-right-10 -z-10 rounded-lg' />

            <div className="flex flex-col gap-4 text-center text-white mb-6">
                <h1 className="text-4xl font-bold">Agende sua consulta</h1>
                <h3 >Entre em contato com a gente para agendar sua consulta </h3>
            </div>

            <div className='flex flex-col gap-2'>
                <InputField type='text' label='Nome' />
                <InputField type='tel' label='Telefone' />
                <InputField type='email' label='Email' />
                <InputField type='textarea' label='Deixe sua mensagem' />
                <input type='submit' className="bg-gray-200 text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white col-span-2 font-semi-bold" />
            </div>

        </form>
    )
}

export default Form