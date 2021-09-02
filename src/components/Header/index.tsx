import {
	Flex,
	Icon,
	IconButton,
	useBreakpointValue,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export default function Header() {
	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

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
			{!isWideVersion && (
				<IconButton
					bg='gray.700'
					aria-label='Open navigation'
					mr='4'
					icon={
						<Icon
							as={RiMenuLine}
							fontSize='24'
							fontVariant='unstyled'
							onClick={onOpen}
						></Icon>
					}
				></IconButton>
			)}
			<Logo></Logo>
			{isWideVersion && <SearchBox />}

			<Flex align='center' ml='auto'>
				<NotificationsNav></NotificationsNav>
				<Profile showProfileData={isWideVersion}></Profile>
			</Flex>
		</Flex>
	)
}
