export interface IFaq {
    question: string;
    respose: string;
    id: number;
}

export const faqs: IFaq[] = [
    {
        question: "Quais são os horários de atendimento da clínica?",
        respose: "Atendemos das 7h30 ás 17h de segunda á sexta e das 8h30 ás 12h áos sábados.",
        id:1,
    },
    {
        question: "Quais são os métodos de pagamento aceitos pela clínica?",
        respose: "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, débito e também oferecemos opções de parcelamento e convênios com alguns planos de saúde.",
        id:2,
    },
    {
        question: "Quanto tempo dura em média uma consulta odontológica?",
        respose: "O tempo de duração de uma consulta varia de acordo com o tipo de tratamento ou procedimento. Consultas de rotina geralmente duram entre 30 a 60 minutos.",
        id:3,
    },
    {
        question: "Qual é a idade mínima para realizar um tratamento ortodôntico?",
        respose: "Não existe uma idade mínima fixa para iniciar um tratamento ortodôntico. Recomendamos avaliação ortodôntica a partir dos 7 anos, mas cada caso é avaliado individualmente.",
        id:4,
    },
    {
        question: "É possível realizar tratamentos odontológicos sob sedação?",
        respose: "Sim, oferecemos opções de sedação consciente para pacientes que têm ansiedade ou medo durante os tratamentos, proporcionando maior conforto e tranquilidade durante o procedimento.",
        id:5,
    },
    {
        question: "Qual é o prazo de recuperação após a extração de um dente?",
        respose: "O prazo de recuperação após a extração de um dente varia de acordo com a complexidade do procedimento. Geralmente, leva de alguns dias a uma semana para a cicatrização completa.",
        id:6,
    },
    {
        question: "Como posso cuidar dos meus implantes dentários após o procedimento?",
        respose: "Recomendamos uma rotina de higiene oral adequada, incluindo escovação regular, uso de fio dental e visitas periódicas ao dentista. Além disso, evite hábitos prejudiciais, como fumar, para garantir a longevidade dos implantes.",
        id:7,
    },
]