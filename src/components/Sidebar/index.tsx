import {
	Box,
	Icon,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export default function Sidebar() {
	return (
		<Box as='aside' w='64' mr='8'>
			<Stack spacing='12' align='flex-start'>
				<NavSection title='General'>
					<NavLink icon={RiDashboardLine}>
						DASHBOARD
					</NavLink>
					<NavLink icon={RiContactsLine}>Users</NavLink>
				</NavSection>

				<NavSection title='Automation'>
					<NavLink icon={RiInputMethodLine}>Forms</NavLink>
					<NavLink icon={RiGitMergeLine}>
						AUTOMATION
					</NavLink>
				</NavSection>
			</Stack>
		</Box>
	)
}
