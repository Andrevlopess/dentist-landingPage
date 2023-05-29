

export interface IDepoiment {
    username: string;
    date: string;
    userImage: string;
    rate: number;
    depoiment:string;
    id: number;
}

export const depoiments: IDepoiment[] = [
    {
        id: 1,
        username: 'André v Lopes',
        date: '28/05/2023',
        depoiment: '"A clínica odontológica superou todas as minhas expectativas! A equipe foi extremamente profissional e o ambiente era acolhedor, me deixando tranquilo durante todo o tratamento."',
        rate: 5,
        userImage: 'person1'
    },
    {
        id: 2,
        username: 'Gabriel L Lopes',
        date: '13/04/2023',
        depoiment: '"Fiquei impressionado com a tecnologia avançada utilizada na clínica. O diagnóstico foi preciso e o tratamento eficiente, resultando em um sorriso mais saudável e bonito."',
        rate: 5,
        userImage: 'person2'
    },
    {
        id: 3,
        username: 'Sávio Grego',
        date: '16/11/2023',
        depoiment: '"Recomendo totalmente essa clínica! Os dentistas são experientes e atenciosos, sempre explicando cada etapa do tratamento. Senti confiança desde a primeira consulta."',
        rate: 5,
        userImage: 'person3'
    },
    {
        id: 4,
        username: 'Matheus Baroni',
        date: '18/05/2023',
        depoiment: '"Encontrei na clínica odontológica um ambiente seguro e limpo, com todos os cuidados necessários. O atendimento foi excelente, tornando minha experiência odontológica muito mais tranquila."',
        rate: 5,
        userImage: 'person4'
    },
]