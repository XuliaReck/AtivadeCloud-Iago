const ImagemRepository = require('../Repository/ImagemRepository');
const Imagem = require('../Entity/Imagem');

class ImagemService {
    async criarImagem (referencia, titulo){
        const novaimagem = new Imagem(referencia, titulo);
        return await ImagemRepository.criarImagem(novaimagem);
    }

    async listarImagem(){
        return await ImagemRepository.listarImagem();
    }


    async buscarImagem(id){
        return await ImagemRepository.buscarImagem(id);
    }

    async atualizarIagem(id, referencia, titulo){
        const dadosAtualizados = {referencia, titulo};
        return await ImagemRepository.atualizarIagem(id, dadosAtualizados);
    }
}

module.exports = new ImagemService();