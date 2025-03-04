const usiario = require('../Service/UsuarioService');
class usuartioControler{
 
    async criarUsuario (req, res){
        try{
            const {nome} = req.body;
            const resultado = await UsuarioService.criarUsuario(nome);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    async listarUsuarios(req,res){
        try{
            const resultado = await UsuarioService.listarUsuarios();
            res.json (resultado);
        }catch (error){
            res.status(400).json({error: error.message});
        }
    }

    async buscarUsuario(req,res){
        try{
            constis = req.params
            const resultado = await UsuarioService.buscarUsuario(id);
            res.json(resultado)
        }catch (error){
            res.status(400).json({error: error.message});
        }

    }

    async atualizarUsuario(req,res){
        try{
            const {id} = req.params;
            const {nome} = req.body;

            const resultado = await UsuarioService.atualizarUsuario

        }

    }
}

module.export = new AWSController();