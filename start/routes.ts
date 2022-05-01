/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/funcionarios', 'FuncionariosController.store')
  Route.put('/funcionarios/:id', 'FuncionariosController.update').middleware('auth', { guards: ['basic'] })
  Route.get('/funcionarios', 'FuncionariosController.index')
  Route.get('/funcionarios/:id', 'FuncionariosController.show').middleware('auth', { guards: ['basic'] })
  Route.delete('/funcionarios/:id', 'FuncionariosController.destroy').middleware('auth', { guards: ['basic'] })
  Route.post('/funcionarios/login', 'FuncionariosController.login')
  Route.post('/veiculos', 'VeiculosController.store').middleware('auth', { guards: ['basic'] })
  Route.put('/veiculos/:id', 'VeiculosController.update').middleware('auth', { guards: ['basic'] })
  Route.get('/veiculos', 'VeiculosController.index').middleware('auth', { guards: ['basic'] })
  Route.get('/veiculos/:id', 'VeiculosController.show').middleware('auth', { guards: ['basic'] })
  Route.delete('/veiculos/:id', 'VeiculosController.destroy').middleware('auth', { guards: ['basic'] })
  Route.post('/veiculo/venda', 'VeiculoController.venda').middleware('auth', { guards: ['basic'] })
  Route.post('/veiculo/reserva','VeiculoController.reserva').middleware('auth', { guards: ['basic'] })
}).prefix('/api')
