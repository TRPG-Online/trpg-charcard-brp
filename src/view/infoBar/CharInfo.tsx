import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import ProcessBar from './ProcessBar'

const CharInfo: React.FC = () => {
  return (
    <div css={infoCss}>
      <div className="left">
        <InfoAttr label="name" />
        <InfoAttr label="job" />
        <div
          css={css`
            display: flex;
          `}
        >
          <InfoAttr label="age" />
          <InfoAttr label="sex" />
        </div>
        <div
          css={css`
            display: flex;
            flex-wrap: nowrap;
          `}
        >
          <InfoAttr label="location" />
          <InfoAttr label="homeTown" />
        </div>
      </div>
      <div className="middle">
        <ProcessBar value="hp" maxValue="maxHp" color="#ff7854" />
        <ProcessBar value="mp" maxValue="maxMp" color="#6bb63d" />
      </div>
      <Avatar />
    </div>
  )
}
const infoCss = css`
  display: flex;

  .left {
    width: 25%;
  }
  .middle {
    flex: 1;
    margin: 0 1rem;
  }
`

export default CharInfo

interface AttrProps {
  label: string
}
const InfoAttr: React.FC<AttrProps> = observer(({ label }) => {
  return (
    <div
      css={css`
        display: flex;
        flex: 1;

        span {
          word-break: keep-all;
          margin: 0 1em 0 0.5em;
        }

        input {
          flex: 1;
        }
      `}
    >
      <InfoLabel label={label} />
      <input type="text" aria-label={label} size={1} />
    </div>
  )
})

const InfoLabel: React.FC<AttrProps> = ({ label }) => {
  const { t } = useTranslation('infoBar')

  return <span>{t(label)}</span>
}

const Avatar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div
      css={css`
        display: inline-block;
        width: 20%;
        position: relative;
        vertical-align: middle;
        text-align: center;
        border: solid 1px #333;
        border-radius: 50%;
        &:before {
          content: '';
          display: inline-block;
          padding-bottom: 100%;
          width: 0.1px;
          vertical-align: middle;
        }

        span {
          display: inline-block;
          vertical-align: middle;
        }
      `}
    >
      <span>{t('selectAvatar')}</span>
    </div>
  )
}
