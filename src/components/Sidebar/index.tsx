import {
	DrawerContent,
	DrawerHeader,
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerOverlay,
	Stack,
	useBreakpointValue,
	DrawerBody,
} from '@chakra-ui/react'
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { SidebarNav } from './SidebarNav'

export default function Sidebar() {
	const { isOpen, onClose } = useSidebarDrawer()

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	})

	if (isDrawerSidebar) {
		return (
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
			>
				<DrawerOverlay>
					<DrawerContent bg='gray.800' p='4'>
						<DrawerCloseButton
							bg='gray.700'
							mt='6'
						></DrawerCloseButton>
						<DrawerHeader>Navigation</DrawerHeader>

						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}

	return (
		<Box as='aside' w='64' mr='8'>
			<SidebarNav></SidebarNav>
		</Box>
	)
}
