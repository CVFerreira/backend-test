'use strict'

const User = use('App/Models/User')

class AuthUserController {

    async register({ request }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)

        return 'Usuário criado com sucesso'
    }

    async authenticate({ request, auth }) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)

        return token
    }
}

module.exports = AuthUserController