import {
	Box,
	Button,
	HStack,
	Stack,
} from '@chakra-ui/react'
import React from 'react'

export function Pagination() {
	return (
		<Stack
			direction='row'
			mt='8'
			justify='space-between'
			align='center'
			spaccing='6'
		>
			<Box>
				<strong>0</strong> - <strong>3</strong> of{' '}
				<strong>100</strong>
			</Box>

			<HStack spacing='2'>
				<Button
					size='sm'
					fontSize='xs'
					w='4'
					colorScheme='pink'
					disabled
					_disabled={{
						bg: 'pink.500',
						cursor: 'default',
					}}
				>
					1
				</Button>

				<Button
					size='sm'
					fontSize='xs'
					w='4'
					colorScheme='gray.700'
					_hover={{
						bg: 'gray.500',
					}}
				>
					2
				</Button>
				<Button
					size='sm'
					fontSize='xs'
					w='4'
					colorScheme='gray.700'
					_hover={{
						bg: 'gray.500',
					}}
				>
					3
				</Button>
			</HStack>
		</Stack>
	)
}
