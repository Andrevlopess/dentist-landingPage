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
      <h2 className="text-lg ">{quality}</h2>
    </div>
  )
}

function App() {


  return (
    <div className='flex flex-col w-full min-h-screen font-ibm'>
      <div className="w-full flex flex-col ">

        <header className="w-full py-6 px-8 md:px-24 flex justify-between items-center lg:hidden ">
          <h1 className="text-gray-600 text-3xl font-black">andre <span className="text-blue-500">dentist</span></h1>


          <div className="flex justify-center items-center bg-blue-500 p-4 rounded-full">
            <FiMenu color="#fff" size={25} />
          </div>

        </header>

        <header className="w-full py-6 px-8 md:px-24 justify-between items-center hidden lg:flex">
          <h1 className="text-gray-600 text-3xl font-black">andre <span className="text-blue-500">dentist</span></h1>

          <div className="flex gap-4 justify-between">
            <a href="#serviços" className="hover:text-blue-text hover:underline text-lg text-gray-600 font-semibold">Especialidades</a>
            <a href="#quem_somos" className="hover:text-blue-text hover:underline text-lg font-semibold text-gray-600">Quem somos</a>
            <a href="#contato" className="hover:text-blue-text hover:underline text-lg font-semibold text-gray-600">Contato</a>
          </div>

          <div className="flex justify-center items-center bg-blue-500 p-4 rounded-full">
            <h2 className="font-semibold text-white">+55 11 95412 2342</h2>

          </div>
        </header>

        <main className="flex pt-12 sm:pt-6 px-8 md:px-24 justify-center sm:justify-between   items-center flex-wrap">
          <div className="flex flex-col gap-10 lg:w-1/2 items-center sm:items-start">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-6xl text-blue-text font-black text-center sm:text-left leading-tight">Seu
                <span className="text-blue-500 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block ml-3">
                  <span className="relative text-white"> sorriso</span>
                </span> é a nossa marca</h1>
              <h3 className="text-xl text-blue-text font-semibold text-center sm:text-left">Tenha um sorriso saudável e radiante!<br /> Agende sua consulta hoje mesmo.</h3>
            </div>

            <button className="py-4 px-6 bg-blue-500 rounded-full shadow-md w-fit hover:shadow-2xl transition hover:bg-blue-600">
              <h2 className="text-xl font-bold text-white">Agende sua consulta</h2>
            </button>
          </div>
          <img loading="lazy" src={Doctor} className="z-30 max-h-[600px]" />

        </main>

        <div className="bg-blue-600 ">
          {/* <svg className='absolute h-[650px] -top-full -translate-y-1/3 right-16' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(225, 238, 255, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(172, 209, 254, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#sw-gradient)" d="M30.1,-26.1C35.7,-17,34.6,-4.7,31.4,6.4C28.3,17.4,23,27.2,15.2,30.5C7.4,33.8,-2.9,30.7,-11.4,25.8C-20,20.9,-26.6,14.3,-28.6,6.4C-30.5,-1.5,-27.7,-10.7,-22.1,-19.8C-16.6,-28.9,-8.3,-38.1,2,-39.6C12.2,-41.2,24.5,-35.3,30.1,-26.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>
          </svg> */}

          <div className="flex gap-10 items-center justify-center px-8 md:px-24 py-10 flex-wrap ">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-6xl text-white font-bold">10+</h1>
              <span className="text-xl text-white">anos no mercado</span>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-6xl text-white font-bold">15</h1>
              <span className="text-xl text-white">premios no ramo</span>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-white font-bold">1mil+</h1>
              <span className="text-xl text-white">clientes satisfeitos</span>
            </div>

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
          <img src={WhyChooseUsImage} />

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

          <div className="flex gap-4 items-center mt-6">
            <img className="z-0" src={person6} />
            <img className="z-10 -ml-9" src={person1} />
            <img className="z-20 -ml-9" src={person2} />
            <img className="z-30 -ml-9" src={person3} />
            <img className="z-40 -ml-9" src={person4} />
            <img className="z-50 -ml-9" src={person5} />
            <h3 className="text-gray-700">+ 100 avaliações</h3>
          </div>
        </div>

        <Swiper className="lg:w-1/2 cursor-grab">
          {depoiments.map((depo) => {
            return (
              <SwiperSlide>
                <DepoimentCard depoiment={depo} key={depo.id} />
              </SwiperSlide>
            )
          })}
        </Swiper>

      </section>
      <section className=" flex px-8 md:px-24 py-12 gap-6 justify-between flex-col sm:flex-row flex-wrap">
        <div className="lg:w-1/3 gap-4 flex flex-col ">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">O futuro do seu <span className="text-blue-500"> sorriso</span></h1>
          <h3>

            A clínica odontológica foi fundada em 2008 por André Vitor Lopes, um renomado profissional da área. Desde então, a clínica tem se destacado pela excelência nos serviços oferecidos. Com uma equipe qualificada e equipamentos de última geração, a clínica busca proporcionar tratamentos odontológicos de alta qualidade.
          </h3>
          <h3>
            A missão da clínica é promover a saúde bucal e o bem-estar dos pacientes, sempre com um atendimento personalizado e focado nas necessidades individuais. Ao longo dos anos, a clínica se tornou referência na região, conquistando a confiança e satisfação dos pacientes atendidos.
          </h3>
        </div>
        <img src={dentistWoman} className='' />
      </section>

      <section className="flex px-8 md:px-24 py-12 justify-center lg:justify-between flex-wrap gap-24" id='contact'>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-700">Agende sua consulta</h1>
          <h3>Entre em contato com a gente para agendar sua consulta </h3>
        </div>
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
              orem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sed eius temporibus tenetur at architecto natus ipsum q
            </span>
            <span>
              orem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sed eius temporibus tenetur at architecto natus ipsum q
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
    </div>

  )
}

export default App
