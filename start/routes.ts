/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const BooksController = () => import('#controllers/books_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => { }).prefix('/auth')

router.resource('users', UsersController)
router.resource('books', BooksController)

router.group(() => { }).prefix('/authors')


