const geralValidator = {
    notNull: {
        required:"Preencha o campo"
    },
    qtd: {
        required: "Preencha o campo",
        min:{
            value: 1,
            message: "Escolha pelo menos uma poção"
        },
        max:{
            value: 100,
            message: "Limite de 100 ultrapassado"
        }
    }
}

export default geralValidator;