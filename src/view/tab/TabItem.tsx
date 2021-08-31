import { css } from '@emotion/react'
import { useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { UIState } from '../App'
import { TabName } from './TabBar'

interface TabProps {
  label: TabName
}
const TabItem: React.FC<TabProps> = ({ label }) => {
  const state = useContext(UIState)
  const handleClick = useCallback(() => state.setTab(label), [])

  const { t } = useTranslation('tab')

  return (
    <div css={s} onClick={handleClick}>
      <span>{t(label)}</span>
    </div>
  )
}

const s = css`
  height: 100%;
  padding: 0 2em;

  display: flex;
  align-items: center;

  :hover {
    background-color: #8e8d8b;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: white;
    user-select: none;
  }
`

export default TabItem
