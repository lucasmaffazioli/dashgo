import {
	createServer,
	Factory,
	Model,
	Response,
	RestSerializer,
} from 'miragejs'
import faker from 'faker'

type User = {
	name: string
	email: string
	created_at: string
}

export function makeServer() {
	const server = createServer({
		serializers: {
			application: RestSerializer,
		},

		models: {
			user: Model.extend<Partial<User>>({}),
		},

		factories: {
			user: Factory.extend({
				name(i: number) {
					return 'User ' + (i + 1)
				},
				email() {
					return faker.internet.email().toLowerCase()
				},
				created_at() {
					return faker.date.recent(10, new Date())
				},
			}),
		},

		seeds(server) {
			server.createList('user', 35)
		},

		routes() {
			this.namespace = 'api'
			this.timing = 750

			this.get('/users', function (schema, request) {
				const { page = 1, per_page = 10 } =
					request.queryParams

				const total = schema.all('user').length

				const pageStart =
					(Number(page) - 1) * Number(per_page)
				const pageEnd = pageStart + Number(per_page)

				const users = schema
					.all('user')
					.models.slice(pageStart, pageEnd)

				return new Response(
					200,
					{
						'x-total-count': String(total),
						'total-pages': String(
							Math.ceil(total / Number(per_page))
						),
					},
					{ users: users }
				)
			})

			this.post('/users')

			this.namespace = '' // Reverte a rota para permitir que as APIs do Next continuem podendo ser acessadas
			this.passthrough() // A chamada passa a diante, caso o Mirage não tenha o endereço solicitado
		},
	})

	return server
}
