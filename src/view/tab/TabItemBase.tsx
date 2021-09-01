import { css, Interpolation, Theme } from '@emotion/react'
import { HTMLProps } from 'react'

interface TabItemBaseProps extends HTMLProps<HTMLDivElement> {
  text: string
  css?: Interpolation<Theme>
}
const TabItemBase: React.FC<TabItemBaseProps> = props => {
  const { text } = props
  return (
    <div css={[s, props.css].filter(Boolean)} {...props}>
      <span>{text}</span>
    </div>
  )
}
export default TabItemBase

const s = css`
  margin: 0.5em;
  height: 2em;
  background-color: white;

  display: flex;
  align-items: center;

  :hover {
    background-color: #8e8d8b;
  }

  span {
    font-weight: bold;
    user-select: none;
    margin: auto;
  }
`
