const UsuarioRepository = require('../Repository/UsuarioRepository');
const Usuario = require('../Entity/Usuario');

class UsuarioService{

    async criatUsuario(nome){
        const novousario = new Usuario (nome);
        return await UsuarioRepository.criatUsuario(novousario);
    }

    async listarUsuario(){
        return await UsuarioRepository.listarUsuario();
    }

    async buscarUsuario(){
        return await UsuarioRepository.buscarUsuario();
    }

    async atualizarUsuario(id, nome){
        const dadosAtualizados = {nome};
        return await UsuarioRepository.atualizarUsuario(id, dadosAtualizados)
    }
}
   


module.exports = new UsuarioService();