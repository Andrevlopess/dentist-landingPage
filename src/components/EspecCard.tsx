import { IEspecialidade } from "../utils/especialidades"


type Props = {
    espec: IEspecialidade
}

const EspecCard = (props: Props) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 rounded-md p-4 gap-6">
    <img src={props.espec.image} className="h-48 rounded-md object-cover" />
    <div>
      <h2 className="text-xl text-blue-text font-bold">{props.espec.title}</h2>
      <span>{props.espec.description}</span>
    </div>
  </div>
  )
}

export default EspecCard