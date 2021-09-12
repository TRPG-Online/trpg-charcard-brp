import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { SheetMode, UIState } from '../view/App'

const DevTool: React.FC = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        right: 0;
      `}
    >
      <DisplayRadio />
    </div>
  )
}

export default DevTool

const DisplayRadio: React.FC = observer(() => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <RadioBtn label="edit" />
      <RadioBtn label="show" />
      <RadioBtn label="template" />
    </div>
  )
})

const RadioBtn: React.FC<{ label: SheetMode }> = observer(({ label }) => {
  const state = useContext(UIState)

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={state.mode === label}
          onChange={() => {
            state.mode = label
          }}
        />
        {label}
      </label>
    </div>
  )
})
