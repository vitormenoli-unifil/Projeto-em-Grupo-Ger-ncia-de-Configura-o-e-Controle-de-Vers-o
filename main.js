const grupo = {
    nomes_e_funcoes: {
        vitor: "Techlide - Criador do Repositório",
        matheus: "",
        gustavo: "",
        cesar: "",
        carlos: "",
        isaque: ""
    }
}

for (const pessoaNome in grupo.nomes_e_funcoes) {
    const nomeComLetraMaiuscula = pessoaNome.charAt(0).toUpperCase()  + pessoaNome.slice(1)
    const texto = `- ${nomeComLetraMaiuscula}: ${grupo.nomes_e_funcoes[pessoaNome]}`

    console.log(texto)
}