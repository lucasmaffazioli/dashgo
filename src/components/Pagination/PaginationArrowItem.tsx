import { Button, Text, Icon } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface PaginationArrowItemProps {
	type: string
	enabled: boolean
}

export function PaginationArrowItem({
	type,
	enabled,
}: PaginationArrowItemProps) {
	if (enabled) {
		return (
			<Button size='sm' fontSize='xs' w='4' bg='gray.600'>
				{type === 'previous' ? (
					<FiArrowLeft />
				) : (
					<FiArrowRight />
				)}
			</Button>
		)
	} else {
		return (
			<Button
				size='sm'
				fontSize='xs'
				w='4'
				bg='gray.700'
				disabled
				_disabled={{
					bg: 'gray.700',
					cursor: 'not-allowed',
				}}
				_hover={{
					bg: 'gray.700',
				}}
			>
				{type === 'previous' ? (
					<Icon as={FiArrowLeft} />
				) : (
					<Icon as={FiArrowRight} />
				)}
			</Button>
		)
	}
}
