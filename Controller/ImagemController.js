const imagem = require('../Service/ImagemService');//ele esta puxando as informaçoes armazenadas no service para ser utilizada nesta classe tambem

class ImagemController {
    async criarNovaImagem (req, res){              //req: oque o cliente pede, res: a resposta que o sistema envia.
        try{                                        // testando o bloco de codigos que esta dentro dele
           const {referencia, titulo} = req.body;   //tem informaçoes que o cliente enviou
           const resultado = await ImagemService.criarNovaImagem(referencia, titulo); //imagem service = salva no banco de dados  //criarImagem= cria uma nova imagem recebendo dados como parametros.
           res.json(resultado);                     //resutado, volta em formato de json como resposta para o cliente
        }catch (error) {                               // qualquer erro que acontecer acima em try é para aparecer e=nesta parte
            res.status(400).json({error: error.message}); //retornando em formato JSON uma  mensagem de erro
        }
    }

    async listarImagem(req, res){
        try{                                    //executa o codigo ede dentro do bloco proprio se der erro pula para o bloco catch
            const resultado = await ImagemService.listarImagem();  //espera a resposta 
            res.json(resultado);                   // devolve a resposa como json para o cliente
        } catch (error) {                          //Se der erro no bloco de cima vem para este onde
            res.status(400).json({error: error.message }); // envia para o cliente uma mesnagem com resposta de erro no JSON
        }
    }

    async buscarimagem(req, res){
        try{
            constis = req.params
            const resultado = await ImagemService.buscarimagem(id);
            res.json(resultado);
        }catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    async ataualizarImagem(req, res){
        try {
            const {id} = req.params;
            const {referencia, titulo} = req.body;

            const resultado = await ImagemService.ataualizarImagem
        }
    }

}

module.export = new AWSController();