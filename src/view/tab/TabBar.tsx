import { css } from '@emotion/react'
import { ExitTab, PageTab, SaveTab } from './TabItem'

export type TabName = 'baseInfo' | 'skill' | 'magic' | 'story' | 'item'
const tabs: TabName[] = ['baseInfo', 'skill', 'magic', 'story', 'item']
const TabBar: React.FC = () => {
  return (
    <div css={style}>
      <div className="sysTab">
        <SaveTab />
        <ExitTab />
      </div>
      <div className="pageTab">
        {tabs.map(label => (
          <PageTab key={label} label={label} />
        ))}
      </div>
    </div>
  )
}

const style = css`
  min-width: 5em;
  height: 100%;
  background-color: #9d9d9d;
  &,
  .sysTab,
  .pageTab {
    display: flex;
    flex-direction: column;
  }
  .sysTab {
  }
  .pageTab {
    flex: 1;
    justify-content: center;
  }
`

export default TabBar
