
const Footer = () => {
    return (
        <footer className="flex px-8 md:px-24 py-12 bg-blue-500 text-white flex-col">
            <div className='w-full flex justify-between flex-wrap gap-6'>
                <div className='flex flex-col gap-4 max-w-sm'>
                    <h2 className='text-xl font-bold'>andre dentist</h2>
                    <span>
                        A clínica odontológica André Dentist oferece serviços de qualidade, com uma equipe especializada e atendimento personalizado.
                    </span>
                    <span>
                        Na André Dentist, prezamos pelo conforto e bem-estar dos pacientes, proporcionando tratamentos odontológicos modernos e eficientes.
                    </span>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg font-bold'>Links</h2>
                    <ul>
                        <li><a href="#especialidades" className='hover:underline hover:text-white text-blue-300 text-md font-semibold'>Especialidades</a></li>
                        <li><a href="#quem_somos" className='text-blue-300 text-md font-semibold hover:underline hover:text-white'>Quem somos</a></li>
                        <li><a href="#contato" className='text-blue-300 text-md font-semibold hover:underline hover:text-white'>Contato</a></li>

                    </ul>
                    <div>
                        <h2 className='text-lg font-bold'>Horários</h2>
                        <ul>
                            <li>Seg a Sex: 7h30 ás 17h</li>
                            <li>Sábados: 8h30 ás 12h</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-bold'>Endereço</h2>
                    <span>Av. Francisco Teodoro 123, Jundiaí SP</span>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14672.82848784347!2d-46.92107747469481!3d-23.162639474192954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1685379560521!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-sm  h-[180px] md:h-[200px] w-[250px] md:w-[400px]'></iframe>
                </div>
            </div>
            <div className='w-full border-t my-12' />
            <span className='text-center'>Todos os direitos reservados por <span className='text-blue-300'> André v Lopes</span> &copy;</span>
        </footer>
    )
}

export default Footer