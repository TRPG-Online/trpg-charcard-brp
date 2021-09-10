import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { BaseInfo } from '../../store/baseInfo'
import { StoreContext } from '../App'

const BattleAttr: React.FC = () => {
  return (
    <div
      className="battleAttr"
      css={css`
        display: flex;
        flex-direction: column;
        background-color: #ddd;
        border: solid 1px #9d9d9d;
        padding: 1em;
        min-height: 200px;

        & > .attribute {
          flex: auto;
        }
      `}
    >
      <Attribute label="mov" />
      <Attribute label="damageBonus" />
      <Attribute label="build" />
      <Attribute label="dodge" />
    </div>
  )
}

export default BattleAttr

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
        box-sizing: border-box;
        padding: 0 5px;
        align-items: center;

        input {
          flex: 1;
          max-height: 2em;
          margin: 0 5px;
        }
      `}
    >
      <span>{t(label)}</span>
      <input type="text" value={baseInfo[label]} aria-label={label} size={1} />
    </div>
  )
})
