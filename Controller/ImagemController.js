const imagem = require('../Service/ImagemService');

class ImagemController {
    async criarNovaImagem (req, res){              
        try{                                        
           const {referencia, titulo} = req.body;  
           const resultado = await ImagemService.criarNovaImagem(referencia, titulo); 
           res.json(resultado);                    
        }catch (error) {                               
            res.status(400).json({error: error.message}); 
        }
    }

    async listarImagem(req, res){
        try{                                    
            const resultado = await ImagemService.listarImagem();  
            res.json(resultado);                   
        } catch (error) {                          
            res.status(400).json({error: error.message }); 
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