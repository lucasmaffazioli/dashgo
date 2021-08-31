import {
	Box,
	Button,
	HStack,
	Stack,
} from '@chakra-ui/react'
import React from 'react'
import { PaginationItem } from './PaginationItem'

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
				<PaginationItem
					isCurrent
					number={1}
				></PaginationItem>
				<PaginationItem number={2}></PaginationItem>
				<PaginationItem number={3}></PaginationItem>
				<PaginationItem number={4}></PaginationItem>
			</HStack>
		</Stack>
	)
}
