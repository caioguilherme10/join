import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Funcionario from 'App/Models/Funcionario'
import Application from '@ioc:Adonis/Core/Application'
import { v4 as uuidv4 } from 'uuid'

export default class FuncionariosController {

  private validationImages = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const image = request.file('avatar', this.validationImages)
    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })

      body.avatar = imageName
    }
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
    funcionario.biografia = body.biografia
    funcionario.password = body.password
    if (funcionario.avatar != body.avatar || !funcionario.avatar) {
      const image = request.file('avatar', this.validationImages)

      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })

        funcionario.avatar = imageName
      }
    }
    await funcionario.save()
    response.status(204)
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
    const funncionario = await Funcionario.query().where('cpf', params.id).preload('reservas').preload('vendas')
    return {
      data: funncionario,
    }
  }

  public async destroy({ params, request, response }: HttpContextContract) {
    const funcionario = await Funcionario.findOrFail(params.id)
    await funcionario.delete()
    response.status(204)
    return {
      message: 'Funcionario excluído com sucesso!',
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    await auth.use('basic').verifyCredentials(email,password)
  }

}
