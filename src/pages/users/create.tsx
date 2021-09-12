import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../../components/Form/Input'
import { useToast } from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

type FormValues = {
	name: string
	email: string
	password: string
	password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup
		.string()
		.required('E-mail is required')
		.email('Invalid e-mail'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Minimum of 6 characters'),
	password_confirmation: yup
		.string()
		.oneOf(
			[null, yup.ref('password')],
			'Both passwords must be the same'
		),
})

export default function CreateUser() {
	const createUser = useMutation(
		async (user: FormValues) => {
			const response = await api.post('users', {
				user: {
					...user,
					created_at: new Date(),
				},
			})
			return response.data.user
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users')
			},
		}
	)
	const router = useRouter()
	const toast = useToast()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: yupResolver(createUserFormSchema),
	})

	const handleCreateUser: SubmitHandler<FormValues> =
		async values => {
			await createUser.mutateAsync(values)

			toast({
				title: 'User created',
				// description: "We've created your account for you.",
				status: 'success',
				duration: 9000,
				isClosable: true,
			})
			await new Promise(resolve => setTimeout(resolve, 300))
			router.push('/users/')
		}

	return (
		<Box>
			<Header />

			<Flex
				w='100%'
				my='6'
				maxWidth={1480}
				mx='auto'
				px='6'
			>
				<Sidebar />
				<Box
					as='form'
					onSubmit={handleSubmit(handleCreateUser)}
					flex='1'
					borderRadius={['6', '8']}
					bgColor='gray.800'
					p='8'
				>
					<Heading size='lg' fontWeight='normal'>
						Create user
					</Heading>

					<Divider my='6' borderColor='gray.700'></Divider>

					<VStack spacing={['6', '8']}>
						<SimpleGrid
							minChildWidth='240px'
							spacing={['6', '8']}
							w='100%'
						>
							<Input
								{...register('name')}
								error={errors.name}
								name='name'
								label='Name'
							/>
							<Input
								{...register('email')}
								error={errors.email}
								name='email'
								label='E-mail'
								type='email'
							/>
						</SimpleGrid>
						<SimpleGrid
							minChildWidth='240px'
							spacing={['6', '8']}
							w='100%'
						>
							<Input
								{...register('password')}
								error={errors.password}
								name='password'
								label='Password'
								type='password'
							/>
							<Input
								{...register('password_confirmation')}
								error={errors.password_confirmation}
								name='password_confirmation'
								label='Password confirmation'
								type='password'
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt={['6', '8']} justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button colorScheme='whiteAlpha'>
									Cancel
								</Button>
							</Link>
							<Button
								type='submit'
								colorScheme='pink'
								isLoading={isSubmitting}
							>
								Save
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
