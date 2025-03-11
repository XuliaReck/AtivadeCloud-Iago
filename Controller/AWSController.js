const AWSService = require ('../Service/AWSService');  
class AWSController{
    async buscarImaegem(req, res) {                     
        try {                                           
            const {referencia} = req.body;              
            if (!referencia){                          
                return res.status(400).json({ error: " obrigatorio o uso da referencia"}) 
            }
            const resultado = await AWSService.buscarImaegem(referencia); 
            res.json(resultado);                       
        } catch (error){ 
            res.status(400).json({ error: error.message}); 
        }
    }
}

module.AWSController = new AWSController();