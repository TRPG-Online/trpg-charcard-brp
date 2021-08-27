import { css } from '@emotion/react'
import { createContext, useState } from 'react'
import mockStore from '../mock/mockStore'
import SheetStore from '../store/sheetStore'
import InfoBar from './infoBar/InfoBar'

export const StoreContext = createContext<SheetStore>(new SheetStore(mockStore))

const App: React.FC = () => {
  const [store] = useState(new SheetStore(mockStore))
  return (
    <StoreContext.Provider value={store}>
      <div css={style}>
        <InfoBar />
      </div>
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
