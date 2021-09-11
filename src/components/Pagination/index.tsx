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
}

type Item = {
	type: ItemType
	// subType?: ItemSubType
	page?: number
}

enum ItemType {
	Page,
	Dots,
}
// enum ItemSubType {
// 	Previous,
// 	Next,
// }

export function Pagination({
	totalPages,
	currentPage,
	boundaryCount = 2,
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
			} else {
				if (i === totalPages) {
					items.push({
						type: ItemType.Dots,
					})
				}
			}
		}

		return items
	}

	const items = getItems()

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

				{items.map(item =>
					item.type === ItemType.Dots ? (
						<Text px='2'>...</Text>
					) : (
						<PaginationItem
							key={item.page}
							number={item.page}
							isCurrent={item.page === currentPage}
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
