import cirurgias from '../assets/cirurgias.webp'
import implantes from '../assets/implantes.webp'
import limpeza from '../assets/limpeza.webp'
import clareamento from '../assets/clareamento.webp'
import ortodontia from '../assets/ortodontia.webp'
import endodontia from '../assets/endodontia.webp'

export interface IEspecialidade {
    title: string;
    image: string;
    description: string;
}

export const especialidades: IEspecialidade[] = [
    {
        title: "Cirurgias",
        image: cirurgias,
        description: "As cirurgias odontológicas são procedimentos realizados na cavidade oral para corrigir problemas como extrações de dentes, implantes dentários, tratamento de gengivas e remoção de cistos, visando melhorar a saúde bucal e a estética do paciente."
    },
    {
        title: "Implantes",
        image: implantes,
        description: "Os implantes dentários são procedimentos cirúrgicos que consistem na colocação de estruturas de titânio no osso maxilar, permitindo a substituição de dentes ausentes. Essa técnica proporciona estabilidade e funcionalidade aos dentes artificiais, melhorando a estética e a mastigação do paciente."
    },
    {
        title: "Limpeza",
        image: limpeza,
        description: "A limpeza odontológica, também conhecida como profilaxia, é um procedimento realizado pelo dentista para remover a placa bacteriana, tártaro e manchas dos dentes. Essa limpeza profissional contribui para a saúde bucal, prevenção de doenças periodontais e melhoria da estética do sorriso."
    },
    {
        title: "Clareamento dental",
        image: clareamento,
        description: "O clareamento dental é um procedimento estético realizado para clarear a cor dos dentes, removendo manchas e descolorações. Pode ser feito tanto no consultório, com o uso de substâncias clareadoras ativadas por luz, quanto em casa, com o uso de moldeiras e géis clareadores. O objetivo é proporcionar um sorriso mais branco e esteticamente agradável."
    },
    {
        title: "Ortodontia",
        image: ortodontia,
        description: "A ortodontia é uma especialidade da odontologia que se dedica ao diagnóstico, prevenção e correção das más posições dentárias e desalinhamentos dos maxilares. A ortodontia busca alinhar os dentes e melhorar a oclusão, proporcionando um sorriso mais harmonioso e contribuindo para a saúde bucal e funcionalidade do paciente."
    },
    {
        title: "Endodontia",
        image: endodontia,
        description: "A endodontia é uma especialidade odontológica que trata das patologias relacionadas à polpa dentária e à raiz do dente. O tratamento endodôntico, conhecido como tratamento de canal, consiste na remoção da polpa infectada ou inflamada, limpeza, desinfecção e preenchimento do espaço resultante. O objetivo é salvar o dente comprometido, aliviar a dor e restaurar a saúde bucal do paciente."
    }
]