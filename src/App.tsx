import Doctor from './assets/doctor.png'
import { especialidades } from "./utils/especialidades"
import EspecCard from "./components/EspecCard"
import WhyChooseUsImage from './assets/whychooseus.png'
import person1 from './assets/Dentista/person1.svg'
import person2 from './assets/Dentista/person2.svg'
import person3 from './assets/Dentista/person3.svg'
import person4 from './assets/Dentista/person4.svg'
import person5 from './assets/Dentista/person5.svg'
import person6 from './assets/Dentista/person6.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { depoiments } from "./utils/Depoimentos"
import DepoimentCard from "./components/DepoimentCard"
import dentistWoman from './assets/dentistWoman.jpg'
import Form from "./components/Form"
import { faqs } from "./utils/Faqs"
import FaqCard from './components/faq'
import FaqImage from './assets/faqImage.png'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react'




const Qualidadades = ({ quality }: { quality: string }) => {
  return (
    <div className="flex items-center gap-4">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_18_148)">
          <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#0360D9" />
        </g>
        <defs>
          <clipPath id="clip0_18_148">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 className="text-lg hover:text-blue-900 text-blue-text">{quality}</h2>
    </div>
  )
}
function Number({ y }: { y: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: y,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((y) => y.toFixed(0))}</animated.div>
}

function App() {

  const [isOpen, setIsOpen] = useState(false)



  return (
    <div className='flex flex-col w-full min-h-screen font-ibm'>
      <div className="w-full flex flex-col bg-gradient-to-r from-cyan-100 to-blue-300">

        <header className="w-full py-6 px-8 md:px-24 flex justify-between items-center lg:hidden ">
          <h1 className="text-gray-600 text-3xl font-black">andre <span className="text-blue-500">dentist</span></h1>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-center items-center bg-blue-500 p-4 rounded-full">
            <FiMenu color="#fff" size={25} />
          </button>


          <aside
            className={`${isOpen ? 'flex' : 'hidden'} transition bg-blue-500 h-screen fixed w-full z-50 inset-y-0 right-0 p-6 flex-col gap-16`}>
            <div className='flex justify-between items-center'>
              <h1 className="text-white text-3xl font-black">andre <span className="text-blue-200">dentist</span></h1>
              <button
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoMdClose color="#fff" size={35} />
              </button>
            </div>

            <ol
              onClick={() => setIsOpen(!isOpen)}
              className='flex  justify-center gap-6 flex-col'>
              <li><a href="#especialidades" className='hover:underline hover:text-white text-blue-300 text-3xl font-semibold'>Especialidades</a></li>
              <li><a href="#quem_somos" className='text-blue-300 text-3xl font-semibold hover:underline hover:text-white'>Quem somos</a></li>
              <li><a href="#contato" className='text-blue-300 text-3xl font-semibold hover:underline hover:text-white'>Contato</a></li>

            </ol>

          </aside>



        </header>

        <header className="w-full py-6 px-8 md:px-24 justify-between items-center hidden lg:flex">
          <h1 className="text-gray-600 text-3xl font-black">andre <span className="text-blue-500">dentist</span></h1>

          <div className="flex gap-4 justify-between">
            <a href="#especialidades" className="hover:text-blue-text hover:underline text-lg text-gray-600 font-semibold">Especialidades</a>
            <a href="#quem_somos" className="hover:text-blue-text hover:underline text-lg font-semibold text-gray-600">Quem somos</a>
            <a href="#contato" className="hover:text-blue-text hover:underline text-lg font-semibold text-gray-600">Contato</a>
          </div>

          <button className="py-4 px-6 bg-blue-500 rounded-full shadow-md w-fit hover:shadow-xl transition hover:bg-blue-600 hover:shadow-blue-400">
            <h2 className="font-semibold text-white">+55 11 95412 2342</h2>
          </button>
        </header>

        <main className="flex py-0  px-8 md:px-24 justify-center sm:justify-between items-center flex-wrap ">
          <div className="flex flex-col gap-10 lg:w-1/2 items-center sm:items-start py-12">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-6xl text-blue-text font-black text-center sm:text-left leading-tight">Seu
                <span className="text-blue-500 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block ml-3">
                  <span className="relative text-white"> sorriso</span>
                </span> é a nossa marca</h1>
              <h3 className="text-xl text-blue-text font-semibold text-center sm:text-left">Tenha um sorriso saudável e radiante!<br /> Agende sua consulta hoje mesmo.</h3>
            </div>


            <button className="py-4 px-6 bg-blue-500 rounded-full shadow-md w-fit hover:shadow-xl transition hover:bg-blue-600 hover:shadow-blue-400">
              <h2 className="text-xl font-bold text-white">Agende sua consulta</h2>
            </button>
          </div>
          <img  alt='Doctor Image' src={Doctor} className="max-h-[500px]" />

        </main>


        <div className="bg-blue-500 flex gap-10 items-center justify-center px-8 md:px-24 py-6 flex-wrap ">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-6xl text-white font-bold flex">
              <Number y={10} /> +
            </h1>
            <span className="text-xl text-white">anos no mercado</span>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-6xl text-white font-bold">
              <Number y={5} />
            </h1>
            <span className="text-xl text-white">premios no ramo</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-bold flex">
              <Number y={2000} /> +
            </h1>
            <span className="text-xl text-white">clientes satisfeitos</span>
          </div>

        </div>

      </div>
      <section className="flex flex-col px-8 md:px-24 py-12 gap-6" id='especialidades'>
        <h1 className="text-4xl font-bold text-gray-700">Nossas especialidades</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {especialidades.map((espec) => {
            return (
              <EspecCard key={espec.title} espec={espec} />
            )
          })}
        </div>
        <div className="flex items-center gap-10 my-12 flex-wrap-reverse">
          <img src={WhyChooseUsImage} className='sm:hover:scale-95 transition shadow-2xl sm:hover:shadow-none rounded-lg' alt="Dentists images" />

          <div className="flex gap-2 flex-col lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Porque escolher a gente ?</h1>
            <Qualidadades quality="Equipe especializada em diversas áreas para cuidar da sua saúde bucal." />
            <Qualidadades quality="Ambiente moderno e acolhedor para maior conforto durante os tratamentos." />
            <Qualidadades quality="Tecnologia avançada para diagnósticos precisos e tratamentos eficientes." />
            <Qualidadades quality="Profissionais atualizados para oferecer tratamentos de alta qualidade e confiança." />
            <Qualidadades quality="Comunicação e relacionamento próximos com os pacientes, esclarecendo todas as dúvidas." />
            <Qualidadades quality="Prioridade máxima na segurança e higiene, seguindo rigorosos protocolos de biossegurança." />
            <div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-300 flex px-8 md:px-24 py-24 gap-24 flex-wrap">
        <div className="flex flex-col lg:w-1/3 gap-6">
          <h1 className="text-4xl font-bold text-gray-700">O que nossos <span className="text-blue-500"> clientes</span> dizem sobre nós?</h1>
          <h2 className="text-xl text-gray-700"><span className='text-blue-500'>Arraste</span> os depoimentos para ver alguns dos mais de 100 depoimentos que recebemos.</h2>

          <div className="flex gap-4 items-center mt-6 flex-wrap">

            <img className="z-0 hover:scale-105 transition" src={person6} />
            <img className="z-10 -ml-9 hover:scale-105 transition" src={person1} />
            <img className="z-20 -ml-9 hover:scale-105 transition" src={person2} />
            <img className="z-30 -ml-9 hover:scale-105 transition" src={person3} />
            <img className="z-40 -ml-9 hover:scale-105 transition" src={person4} />
            <img className="z-50 -ml-9 hover:scale-105 transition" src={person5} />


            <h3 className="text-gray-700">+ 100 avaliações</h3>
          </div>
        </div>

        <Swiper className="lg:w-1/2 cursor-grab active:scale-105 transition">
          {depoiments.map((depo) => {
            return (
              <SwiperSlide key={depo.id} >
                <DepoimentCard depoiment={depo} />
              </SwiperSlide>
            )
          })}
        </Swiper>

      </section>
      <section className=" flex px-8 md:px-24 py-12 gap-6 justify-between flex-col sm:flex-row flex-wrap" id="quem_somos">
        <div className="lg:w-1/3 gap-4 flex flex-col">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">O futuro do seu <span className="text-blue-500"> sorriso</span></h1>
          <h3 className='text-blue-text text-md font-thin'>

            A clínica odontológica foi fundada em 2008 por<span className='text-blue-600'> André Vitor Lopes</span> , um renomado profissional da área. Desde então, a clínica tem se destacado pela excelência nos serviços oferecidos. Com uma equipe qualificada e equipamentos de última geração, a clínica busca proporcionar tratamentos odontológicos de alta qualidade.
          </h3>
          <h3 className='text-blue-text text-md font-thin'>
            A missão da clínica é promover a saúde bucal e o bem-estar dos pacientes, sempre com um atendimento personalizado e focado nas necessidades individuais. Ao longo dos anos, a clínica se tornou referência na região, conquistando a confiança e satisfação dos pacientes atendidos.
          </h3>
        </div>
        <img src={dentistWoman} className='sm:hover:scale-95 transition shadow-2xl sm:hover:shadow-none rounded-lg' />
      </section>

      <section className="flex flex-col my-12 px-8 md:px-24 py-12 justify-center items-center" id='contato'>
        <Form />
      </section>

      <section className="flex px-8 md:pl-24 py-12 mt-12 flex-wrap gap-12 justify-center lg:justify-start items-center bg-blue-300 relative">

        <div className="flex flex-col gap-10 lg:w-3/5 z-10">
          <h1 className="text-4xl font-bold text-gray-700">Perguntas frequentes</h1>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => {
              return (
                <FaqCard faq={faq} key={faq.id} />
              )
            })}
          </div>
        </div>
        <img src={FaqImage} alt="Imagem de dentista" loading='lazy' className='max-h-[360px]' />

      </section>

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
    </div >

  )
}

export default App
