import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import Header from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'
import { useUsers } from '../../services/hooks/useUsers'

type User = {
	id: string
	name: string
	email: string
	created_at: string
}

export default function UserList() {
	const { data, isLoading, isFetching, error } = useUsers()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

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
					flex='1'
					borderRadius={8}
					bgColor='gray.800'
					p='8'
				>
					<Flex
						mb='8'
						justify='space-between'
						align='center'
					>
						<Heading size='lg' fontWeight='normal'>
							Users
							{!isLoading && isFetching && (
								<Spinner
									size='sm'
									color='gray.500'
									mx='4'
								/>
							)}
						</Heading>
						<Link href={'/users/create'} passHref>
							<Button
								as='a'
								size='sm'
								fontSize='sm'
								colorScheme='pink'
								leftIcon={
									<Icon as={RiAddLine} fontSize='20' />
								}
							>
								Create new
							</Button>
						</Link>
					</Flex>

					{isLoading ? (
						<Flex justify='center'>
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify='center'>
							Fail to obtain user data.
						</Flex>
					) : (
						<>
							<Table colorScheme='whiteAlpha'>
								<Thead>
									<Tr>
										<Th
											px={['4,', '4', '6']}
											color='gray.300'
											w='8'
										>
											<Checkbox colorScheme='pink' />
										</Th>
										<Th color='gray.300'>User</Th>
										{isWideVersion && (
											<Th color='gray.300'>Date</Th>
										)}
										<Th w='8'></Th>
									</Tr>
								</Thead>
								<Tbody>
									{data?.map((user: User) => {
										return (
											<Tr key={user.email}>
												<Td px={['4,', '4', '6']}>
													<Checkbox colorScheme='pink' />
												</Td>
												<Td>
													<Box>
														<Text fontWeight='bold'>
															{user.name}
														</Text>
														<Text
															fontSize='sm'
															color='gray.300'
														>
															{user.email}
														</Text>
													</Box>
												</Td>
												{isWideVersion && (
													<Td>{user.created_at}</Td>
												)}
												<Td>
													<Button
														as='a'
														size='sm'
														fontSize='sm'
														colorScheme='purple'
														p={['1', '1', '2', '4']}
														{...(isWideVersion && {
															leftIcon: (
																<Icon
																	as={RiPencilLine}
																	fontSize='20'
																/>
															),
														})}
													>
														{isWideVersion ? (
															'Edit'
														) : (
															<Icon
																as={RiPencilLine}
																fontSize='20'
																mr={
																	isWideVersion ? '2' : '0'
																}
															/>
														)}
													</Button>
												</Td>
											</Tr>
										)
									})}
								</Tbody>
							</Table>
							<Pagination currentPage={1} totalPages={15} />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	)
}
