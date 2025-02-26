class imagem { //cria uma classe
    constructor (referencia, titulo){   //contrutor é um objeto criado apartir da classe 
        this.referencia = referencia;  // cria dentro do objeto um lugar para armazenar a referencia
        this.titulo = titulo          // Para armazenar o titulo da imagem

        const data = new Date();     // Cria um objeto onde tem a data e hora atuais de criação a imagem
        this.data_criacao = `${data.getData()}/${date.getMonth() + 1}/${dta.getFullYear()}`;
                            //retorna o dia do mês
                            //retorna o mes com 0 sendo janeiro e 11 sendo dezembro
                            //retorna o ano completo
    }
}

module.export = imagem 
// permite que a classe seja usada em outras classes 