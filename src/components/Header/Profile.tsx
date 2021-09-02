import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
	showProfileData?: boolean
}

export function Profile({
	showProfileData = true,
}: ProfileProps) {
	return (
		<Flex align='center'>
			{showProfileData && (
				<Box mr='4' textAlign='right'>
					<Text>Lucas Maffazioli</Text>
					<Text text='gray.300' fontSize='small'>
						lucas.maffazioli@gmail.com
					</Text>
				</Box>
			)}
			<Avatar
				size='md'
				name='Lucas Maffazioli'
				src='https://github.com/lucasmaffazioli.png'
			></Avatar>
		</Flex>
	)
}
