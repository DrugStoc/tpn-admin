/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom'
import { ListItem } from '@chakra-ui/react'

interface sidebarType {
  sidebarItem: string
  pathArr: string[]
}

const SidebarList = ({ sidebarItem, pathArr }: sidebarType): JSX.Element => {
  const navigate = useNavigate()
  const slug = pathArr[pathArr.length - 1]
  const textLowerCase: string = sidebarItem.toLowerCase()
  const altText = `${textLowerCase} Icon`
  const handleButtonClick = (): void => {
    if (textLowerCase === 'logout') {
      navigate(`/login`)
    } else if (textLowerCase === 'overview') {
      navigate(`/`)
    } else {
      navigate(`/${textLowerCase}`)
    }
  }

  return (
    <>
      <style>
        {`
            .listItem {
              position: relative !important;
              &::after {
                position: absolute !important;
                left: 0 !important;
                content: 'Overview' !important;
                background-color: #000 !important;
                color: #fff !important;
              }
          }
          @media (min-width: 701px) {
            .listItemBottom {
              width: 95%;
            }
          }
          `}
      </style>
      <div className="listItem" onClick={handleButtonClick} key={sidebarItem}>
        {/* @ts-ignore */}
        <ListItem
          role="button"
          className={
            textLowerCase === slug ||
            pathArr.includes(textLowerCase) ||
            (textLowerCase === 'overview' && slug.length === 0)
              ? 'active'
              : undefined
          }
          my={1}>
          <img
            width={16}
            height={16}
            src={require(`./SidebarImages/${textLowerCase}.svg`)}
            alt={altText}
          />
          <span>{sidebarItem}</span>
        </ListItem>
      </div>
    </>
  )
}

export default SidebarList
