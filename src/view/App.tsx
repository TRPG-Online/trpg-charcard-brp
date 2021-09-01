import { css } from '@emotion/react'
import { createContext } from 'react'
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

const App: React.FC<{ store: SheetStore }> = ({ store }) => {
  const state = useLocalObservable(() => initState)
  return (
    <StoreContext.Provider value={store}>
      <UIState.Provider value={state}>
        <div css={style}>
          <TabBar />
          <div className="container">
            <InfoBar />
            <hr />
            <TabContainer />
          </div>
        </div>
      </UIState.Provider>
    </StoreContext.Provider>
  )
}

const style = css`
  background-color: #eee;
  display: flex;
  min-width: 800px;
  min-height: 600px;
  width: 50vw;
  height: 50vh;
  margin: auto;

  .container {
    flex: 1;
  }
`

export default App
