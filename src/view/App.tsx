import { css } from '@emotion/react'
import { createContext, useState } from 'react'
import mockStore from '../mock/mockStore'
import SheetStore from '../store/sheetStore'
import InfoBar from './infoBar/InfoBar'

//init i18n
import './i18next'
import TabBar, { TabName } from './tab/TabBar'
import TabContainer from './tab/TabContainer'
import { useLocalObservable } from 'mobx-react'

export const StoreContext = createContext<SheetStore>(new SheetStore(mockStore))

/** UI state */
const initState = {
  tab: 'baseInfo' as TabName,
  setTab(t: TabName) {
    this.tab = t
  },
}
export const UIState = createContext<typeof initState>(initState)

const App: React.FC = () => {
  const [store] = useState(new SheetStore(mockStore))
  const state = useLocalObservable(() => initState)
  return (
    <StoreContext.Provider value={store}>
      <UIState.Provider value={state}>
        <div css={style}>
          <InfoBar />
          <TabBar />
          <TabContainer />
        </div>
      </UIState.Provider>
    </StoreContext.Provider>
  )
}

const style = css`
  max-width: 900px;
  background-color: #eee;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

export default App
