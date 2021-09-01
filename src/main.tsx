import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './view/App'
import './main.css'
import mockStore from './mock/mockStore'
import SheetStore from './store/sheetStore'

const store = new SheetStore(mockStore)

ReactDOM.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
  document.getElementById('root')
)
