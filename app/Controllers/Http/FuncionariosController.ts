import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Funcionario from 'App/Models/Funcionario'

export default class FuncionariosController {

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const funcionario = await Funcionario.create(body)
    response.status(201)
    return {
      message: 'Funcionario criado com sucesso!',
      data: funcionario,
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const body = request.body()
    const funcionario = await Funcionario.findOrFail(params.id)
    funcionario.nome = body.nome
    funcionario.email = body.email
    funcionario.avatar = body.avatar
    funcionario.biografia = body.biografia
    funcionario.password = body.password
    await funcionario.save()
    response.status(200)
    return {
      message: 'Funcionario atualizado com sucesso!',
      data: funcionario,
    }
  }

  public async index() {
    const funcionarios = await Funcionario.query()
    return {
      data: funcionarios,
    }
  }

  public async show({ params }: HttpContextContract) {
    const funncionario = await Funcionario.findOrFail(params.id)
    return {
      data: funncionario,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const funcionario = await Funcionario.findOrFail(params.id)
    await funcionario.delete()
    return {
      message: 'Funcionario excluído com sucesso!',
    }
  }

}
