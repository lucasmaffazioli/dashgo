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
	boundaryCount?: number
	setPage: Function
	totalRecords: number
	intialRecord: number
	finalRecord: number
}

type Item = {
	type: ItemType
	page?: number
}

enum ItemType {
	Page,
	Dots,
}

export function Pagination({
	totalPages,
	currentPage,
	boundaryCount = 2,
	setPage,
	totalRecords,
	intialRecord,
	finalRecord,
}: PaginationProps) {
	let isFirst = false
	let isLast = false

	if (currentPage === 1) {
		isFirst = true
	}

	if (currentPage === totalPages) {
		isLast = true
		console.log('asdasdas')
	}

	console.log('lol')
	console.log(typeof currentPage)
	console.log(typeof totalPages)
	console.log(isLast)

	function getItems() {
		let items: Item[] = []

		if (currentPage > boundaryCount + 1) {
			items.push({
				type: ItemType.Dots,
			})
		}

		for (let i = 1; i <= totalPages; i++) {
			const diff = currentPage - i

			if (diff <= boundaryCount && diff >= -boundaryCount) {
				items.push({
					page: i,
					type: ItemType.Page,
				})
			}
			// else {
			// if (i === totalPages) {
			// 	items.push({
			// 		type: ItemType.Dots,
			// 	})
			// }
			// }
		}
		if (currentPage < totalPages - boundaryCount) {
			items.push({
				type: ItemType.Dots,
			})
		}

		return items
	}

	const items = getItems()

	console.log('items')
	console.log(items)

	return (
		<Stack
			direction={['column', 'row']}
			mt='8'
			justify='space-between'
			align='center'
			spaccing='6'
		>
			<Box>
				<strong>{intialRecord}</strong> -{' '}
				<strong>{finalRecord}</strong> of{' '}
				<strong>{totalRecords}</strong>
			</Box>

			<HStack spacing='2'>
				<PaginationArrowItem
					type='previous'
					enabled={!isFirst}
				/>

				{items.map(item =>
					item.type === ItemType.Dots ? (
						<Text px='2'>...</Text>
					) : (
						<PaginationItem
							key={item.page}
							number={item.page ?? 0}
							isCurrent={item.page === currentPage}
							setPage={setPage}
						></PaginationItem>
					)
				)}

				<PaginationArrowItem
					type='next'
					enabled={!isLast}
				/>
			</HStack>
		</Stack>
	)
}
