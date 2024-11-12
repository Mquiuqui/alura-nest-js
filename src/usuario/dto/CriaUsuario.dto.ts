import { IsEmail, IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator'
import { EmailEhUnico } from '../validator/email-eh-unico-validator'

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O Nome não pode ser vázio' })
    nome: string

    @IsEmail(undefined, { message: 'O email não pode ser vázio' })
    @EmailEhUnico({ message: 'Já existe usuário com esse email' })
    email: string

    @MinLength(6, { message: 'A senha deve ser informada' })
    senha: string

}
