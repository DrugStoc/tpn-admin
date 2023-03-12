/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { Box, Image, List } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { sidebarTopList, sidebarBottomList } from './SidebarData'
import SidebarList from './SidebarList'


const Sidebar = (): JSX.Element => {
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  const sidbarTopItems = sidebarTopList.map((sidebarItem: string) => {
    return (
      <SidebarList
        pathArr={pathArr}
        sidebarItem={sidebarItem}
        key={sidebarItem}
      />
    )
  })
  const sidearBottomItems = sidebarBottomList.map((sidebarItem: string) => {
    return (
      <SidebarList
        pathArr={pathArr}
        sidebarItem={sidebarItem}
        key={sidebarItem}
      />
    )
  })

  return (
    <aside>
      <Box className="sidebar">
        <Box className="box" display="flex" ml={5}>
          <Box>
            <Link to="/">
              <Image
                src="https://res.cloudinary.com/bizstak/image/upload/v1678572849/logo_feuavq.svg"
                alt="drugstoc tpn logo"
              />
            </Link>
            <List spacing={3}>{sidbarTopItems}</List>
          </Box>
        </Box>
        <Box className="settingLogout" display="flex" mb={8}>
          {/* @ts-ignore */}
          <List spacing={3}>{sidearBottomItems}</List>
        </Box>
      </Box>
    </aside>
  )
}

export default Sidebar
