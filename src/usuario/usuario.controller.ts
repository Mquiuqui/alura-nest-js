/* eslint-disable require-await */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UsuarioRepository } from './usuario.repository'
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto'
import { UsuarioEntity } from './usuario.entity'
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto'
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto'

@Controller('/usuarios')
export class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository
    ) { }

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {

        const usuarioEntity = new UsuarioEntity()

        usuarioEntity.email = dadosDoUsuario.email
        usuarioEntity.nome = dadosDoUsuario.nome
        usuarioEntity.senha = dadosDoUsuario.senha
        usuarioEntity.id = uuid()

        this.usuarioRepository.salvar(usuarioEntity)
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuário criado com sucesso'
        }

    }

    @Get()
    async listar() {

        const usuariosSalvos = await this.usuarioRepository.listar()
        const usuariosLista = usuariosSalvos.map(usuario => new ListaUsuarioDTO(
            usuario.id,
            usuario.nome
        ))
        return usuariosLista

    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {

        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados)
        return {
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso'
        }

    }

    @Delete('/:id')
    async removerUsuario(@Param('id') id: string) {

        const usuarioAtualizado = await this.usuarioRepository.remove(id)
        return {
            usuario: usuarioAtualizado,
            message: 'Usuário removido com sucesso'
        }

    }

}

