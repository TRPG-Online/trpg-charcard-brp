import { css } from '@emotion/react'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { BaseInfo } from '../../store/baseInfo'
import { StoreContext } from '../App'

const CharAttr: React.FC = () => {
  return (
    <div
      className="charAttr"
      css={css`
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;
        background-color: #ddd;
        border: solid 1px #9d9d9d;
        padding: 1em;
        min-height: 200px;

        & > .attribute {
          flex-basis: 33%;
        }
      `}
    >
      <Attribute label="str" />
      <Attribute label="dex" />
      <Attribute label="int" />
      <Attribute label="con" />
      <Attribute label="app" />
      <Attribute label="pow" />
      <Attribute label="siz" />
      <Attribute label="edu" />
      <Total />
    </div>
  )
}

export default CharAttr

interface AttributeProps {
  label: keyof BaseInfo
}
const Attribute: React.FC<AttributeProps> = observer(({ label }) => {
  const baseInfo = useContext(StoreContext).baseInfo
  const { t } = useTranslation('baseInfo')
  return (
    <div
      className="attribute"
      css={css`
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 5px;

        input {
          flex: 1;
          max-height: 2em;
          margin: 0 5px;
        }
      `}
    >
      <span>{t(label)}</span>
      <input type="text" value={baseInfo[label]} aria-label={label} size={1} />
      <FontAwesomeIcon icon={faDice} />
    </div>
  )
})

const Total: React.FC = observer(() => {
  const baseInfo = useContext(StoreContext).baseInfo
  const { t } = useTranslation('baseInfo')

  return (
    <div>
      <span>{t('total')}</span>
      <span>{baseInfo.totalAttr}</span>
    </div>
  )
})
