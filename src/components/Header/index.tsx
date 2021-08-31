import { HStack, Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export default function Header() {
	return (
		<Flex
			as='header'
			w='100%'
			maxWidth={1480}
			h='20'
			mx='auto'
			mt='4'
			px='6'
			align='center'
		>
			<Logo></Logo>
			<SearchBox></SearchBox>
			<Flex align='center' ml='auto'>
				<HStack
					spacing='8'
					mx='8'
					pr='8'
					py='1'
					color='gray.300'
					borderRightWidth={1}
					borderColor='gray.700'
				>
					<NotificationsNav></NotificationsNav>
				</HStack>
				<Profile></Profile>
			</Flex>
		</Flex>
	)
}
