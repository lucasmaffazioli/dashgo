import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
	id: string
	name: string
	email: string
	created_at: string
}

type GetUsersReponse = {
	totalCount: number
	users: User[]
}

interface GetUsersParams {
	page: number
	per_page: number
}

async function getUsers({
	page,
	per_page,
}: GetUsersParams): Promise<GetUsersReponse> {
	const response = await api.get('users', {
		params: {
			page: page,
			per_page: per_page,
		},
	})
	const data = response.data
	const totalCount: number =
		response.headers['x-total-count']

	console.log('response')
	console.log(response)

	const users: User[] = data.users.map((user: User) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			created_at: new Date(
				user.created_at
			).toLocaleDateString('bt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			}),
		}
	})
	return {
		totalCount: totalCount,
		users: users,
	}
}

export function useUsers(params: GetUsersParams) {
	return useQuery('users', () => getUsers(params), {
		staleTime: 1000 * 5,
	})
}
