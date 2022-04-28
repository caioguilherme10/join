import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Veiculo from 'App/Models/Veiculo'

export default class VeiculosController {

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const veiculo = await Veiculo.create(body)
    response.status(201)
    return {
      message: 'Veiculo criado com sucesso!',
      data: veiculo,
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const body = request.body()
    const veiculo = await Veiculo.findOrFail(params.id)
    veiculo.marca = body.marca
    veiculo.modelo= body.modelo
    veiculo.ano = body.ano
    veiculo.km = body.km
    veiculo.chassi = body.chassi
    veiculo.precoCompra = body.precoCompra
    await veiculo.save()
    response.status(200)
    return {
      message: 'Veiculo atualizado com sucesso!',
      data: veiculo,
    }
  }

  public async index() {
    const veiculos = await Veiculo.query()
    return {
      data: veiculos,
    }
  }

  public async show({ params }: HttpContextContract) {
    const veiculo = await Veiculo.findOrFail(params.id)
    return {
      data: veiculo,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const veiculo = await Veiculo.findOrFail(params.id)
    await veiculo.delete()
    return {
      message: 'Veiculo excluído com sucesso!',
    }
  }
}
