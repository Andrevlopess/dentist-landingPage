import { useInView, animated } from "@react-spring/web"
import { IEspecialidade } from "../utils/especialidades"


type Props = {
  espec: IEspecialidade
}

const EspecCard = (props: Props) => {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 30,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {once: true}
  )

  return (
    <animated.div
      ref={ref} style={springs}
      className="flex flex-col border-2 border-gray-200 rounded-md p-4 gap-6 sm:hover:scale-105 transition sm:hover:shadow-md">
      <img src={props.espec.image} className="h-48 rounded-md object-cover" />
      <div>
        <h2 className="text-xl text-blue-text font-bold">{props.espec.title}</h2>
        <span>{props.espec.description}</span>
      </div>
    </animated.div>
  )
}

export default EspecCard