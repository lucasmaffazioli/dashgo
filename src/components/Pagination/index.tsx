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
	onPageChange: Function
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
	boundaryCount: SiblingsCount = 1,
	onPageChange: setPage,
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
	}

	function getItems() {
		let items: Item[] = []

		if (currentPage > SiblingsCount + 1) {
			items.push({
				page: 1,
				type: ItemType.Page,
			})
			if (currentPage > SiblingsCount + 2)
				items.push({
					type: ItemType.Dots,
				})
		}

		for (let i = 1; i <= totalPages; i++) {
			const diff = currentPage - i

			if (diff <= SiblingsCount && diff >= -SiblingsCount) {
				items.push({
					page: i,
					type: ItemType.Page,
				})
			}
		}
		if (currentPage < totalPages - SiblingsCount) {
			if (currentPage < totalPages - SiblingsCount - 1)
				items.push({
					type: ItemType.Dots,
				})

			items.push({
				page: totalPages,
				type: ItemType.Page,
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
