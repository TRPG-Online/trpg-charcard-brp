import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import CharAvatar from './Avatar'
import ProcessBar from './ProcessBar'

const InfoBar: React.FC = observer(() => {
  return (
    <div
      className="infobar"
      css={css`
        height: 8rem;
        padding: 1rem;
        display: flex;
        flex-direction: row;
      `}
    >
      <CharAvatar />
      <div
        css={css`
          display: grid;
          grid-template-rows: 2em auto;
          row-gap: 0.5rem;
          width: 100%;
        `}
      >
        <InfoText />
        <StatusContainer />
      </div>
    </div>
  )
})

export default InfoBar

//文字描述
const InfoText: React.FC = () => {
  return (
    <div
      className="info-text"
      css={css`
        display: flex;
        .name-warpper {
          flex: 1;
          display: inline-flex;
        }
      `}
    >
      <div className="name-warpper">
        <CharName text="温蒂妮" />
      </div>
    </div>
  )
}

//name text
const CharName: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div
      className="char-name"
      css={css`
        border-bottom: solid 2px #5b5b5b;
        color: #5b5b5b;
        padding: 0 1.5rem;
        font-size: 1.3rem;
      `}
    >
      {text}
    </div>
  )
}

//血条
const StatusContainer: React.FC = () => {
  return (
    <div className="status-container">
      <ProcessBar value="hp" maxValue="maxHp" color="#ff7854" />
      <ProcessBar value="mp" maxValue="maxMp" color="#6bb63d" />
    </div>
  )
}
