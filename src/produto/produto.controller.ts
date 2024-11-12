import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProdutoRepository } from './produto.repository'
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto'
@Controller('produtos')
export class ProdutoController {

    constructor(private readonly produtoRepository: ProdutoRepository) { }
    @Post()
    criaNovo(@Body() dadosProduto) {

        const produtoCadastrado = this.produtoRepository.salva(dadosProduto)
        return produtoCadastrado

    }
    @Get()
    async listaTodos() {

        return this.produtoRepository.listaTodos()

    }

    @Put('/:id')
    async atualiza(
        @Param('id') id: string,
        @Body() dadosProduto: AtualizaProdutoDTO,
    ) {

        const produtoAlterado = await this.produtoRepository.atualiza(
            id,
            dadosProduto,
        )
        return {
            mensagem: 'produto atualizado com sucesso',
            produto: produtoAlterado,
        }

    }
    @Delete('/:id')
    async remove(@Param('id') id: string) {

        const produtoRemovido = await this.produtoRepository.remove(id)
        return {
            mensagem: 'produto removido com sucesso',
            produto: produtoRemovido,
        }

    }

}
