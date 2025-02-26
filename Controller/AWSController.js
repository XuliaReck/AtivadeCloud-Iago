const AWSService = require ('../Service/AWSService');   //ele esta puxando as informaçoes armazenadas no service para ser utilizada nesta classe tambem
class AWSController{
    async buscarImaegem(req, res) {                      //req: oque o cliente pede, res: a resposta que o sistema envia.
        try {                                           //é para verificação de erro dentro ldele ta a apret do dcodigo a ser testada
            const {referencia} = req.body;              // esta extraindo a informação que foi inserida no campo referencia
            if (!referencia){                          //esta verificando se é verdadeiro ou falso
                return res.status(400).json({ error: " A referencia da imagem é uma informação obrigatoria"}) // Caso a referencia nao tenha cido informada é retornado uma mensagem de erro
            }
            const resultado = await AWSService.buscarImaegem(referencia); //pausa a execução ate retornar a referencia da imagem
            res.json(resultado);                       //Se der certo ela retornara a imagem
        } catch (error){ 
            res.status(400).json({ error: error.message}); //se der errado retornara a mensagem de erro
        }
    }
}

module.AWSController = new AWSController               //Para que outars classes possa usar 