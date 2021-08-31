import { css } from '@emotion/react'
import TabItem from './TabItem'

export type TabName = 'baseInfo' | 'skill' | 'magic' | 'story' | 'item'
const tabs: TabName[] = ['baseInfo', 'skill', 'magic', 'story', 'item']
const TabBar: React.FC = () => {
  return (
    <div css={style}>
      {tabs.map(label => (
        <TabItem key={label} label={label} />
      ))}
    </div>
  )
}

const style = css`
  height: 2.5em;
  background-color: #5b5b5b;
  display: flex;
`

export default TabBar
