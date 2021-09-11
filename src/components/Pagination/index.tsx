import {
	Box,
	Button,
	HStack,
	Stack,
	Text,
} from '@chakra-ui/react'
import React from 'react'
import { PaginationItem } from './PaginationItem'
import { PaginationArrowItem } from './PaginationArrowItem'

interface PaginationProps {
	totalPages: number
	currentPage: number
}

type Item = {
	page?: number
	type: ItemType
}

enum ItemType {
	Page,
	Dots,
}

export function Pagination({
	totalPages,
	currentPage,
}: PaginationProps) {
	let isFirst = false
	let isLast = false

	if (currentPage === 1) {
		isFirst = true
	}

	if (currentPage === totalPages) {
		isLast = true
	}

	// console.log('currentPage')
	// console.log(currentPage)
	// console.log('totalPages')
	// console.log(totalPages)

	function getItems() {
		let items: Item[] = []

		if (currentPage >= 3) {
			items.push({
				type: ItemType.Dots,
			})
		}

		for (let i = 1; i <= totalPages; i++) {
			const diff = currentPage - i
			// console.log('Diff')
			// console.log(diff)

			if (diff <= 3 && diff >= -3) {
				items.push({
					page: i,
					type: ItemType.Page,
				})
			} else {
				if (i === totalPages) {
					items.push({
						type: ItemType.Dots,
					})
				}
			}
		}

		// console.log('items')
		// console.log(items)
		return items
	}

	const lol = getItems()

	return (
		<Stack
			direction={['column', 'row']}
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
				<PaginationArrowItem
					type='previous'
					enabled={!isFirst}
				/>

				<PaginationItem
					isCurrent
					number={1}
				></PaginationItem>
				<PaginationItem number={2}></PaginationItem>
				<PaginationItem number={3}></PaginationItem>
				<PaginationItem number={4}></PaginationItem>
				<PaginationItem number={5}></PaginationItem>
				<PaginationItem number={6}></PaginationItem>
				<Text px='2'>...</Text>

				<PaginationArrowItem
					type='next'
					enabled={!isLast}
				/>
			</HStack>
		</Stack>
	)
}
