import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Header from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'

export default function UserList() {
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
						</Heading>
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
					</Flex>

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
							<Tr>
								<Td px={['4,', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>
											Lucas Maffazioli
										</Text>
										<Text fontSize='sm' color='gray.300'>
											lucas.maffazioli@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && (
									<Td>4th of April, 2021</Td>
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
												mr={isWideVersion ? '2' : '0'}
											/>
										)}
									</Button>
								</Td>
							</Tr>
							<Tr>
								<Td px={['4,', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>
											Lucas Maffazioli
										</Text>
										<Text fontSize='sm' color='gray.300'>
											lucas.maffazioli@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && (
									<Td>4th of April, 2021</Td>
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
												mr={isWideVersion ? '2' : '0'}
											/>
										)}
									</Button>
								</Td>
							</Tr>
							<Tr>
								<Td px={['4,', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>
											Lucas Maffazioli
										</Text>
										<Text fontSize='sm' color='gray.300'>
											lucas.maffazioli@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && (
									<Td>4th of April, 2021</Td>
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
												mr={isWideVersion ? '2' : '0'}
											/>
										)}
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination></Pagination>
				</Box>
			</Flex>
		</Box>
	)
}
