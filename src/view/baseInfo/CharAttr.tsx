import { css } from '@emotion/react'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import GrayCard from '../../components/GrayCard'
import { BaseInfo } from '../../store/baseInfo'
import { StoreContext, UIState } from '../App'

const CharAttr: React.FC = () => {
  return (
    <GrayCard
      className="charAttr"
      css={css`
        display: flex;
        max-width: 100%;
        flex-wrap: wrap;

        & > div {
          flex-basis: 33%;
          box-sizing: border-box;
          padding: 0 5px;
        }
      `}
    >
      <AttrWarpper label="str" />
      <AttrWarpper label="dex" />
      <AttrWarpper label="int" />
      <AttrWarpper label="con" />
      <AttrWarpper label="app" />
      <AttrWarpper label="pow" />
      <AttrWarpper label="siz" />
      <AttrWarpper label="edu" />
      <Total />
    </GrayCard>
  )
}

export default CharAttr

interface AttributeProps {
  label: keyof BaseInfo
}

const AttrWarpper: React.FC<AttributeProps> = observer(({ label }) => {
  const store = useContext(StoreContext)
  const state = useContext(UIState)
  const { t } = useTranslation('baseInfo')

  switch (state.mode) {
    case 'edit':
      return <Attribute label={label} />
    case 'show':
      return (
        <div
          className="attribute"
          css={css`
            display: flex;
            align-items: center;

            .value {
              flex: 1;
              max-height: 2em;
              margin: 0 5px;
              text-align: center;
            }
          `}
        >
          <span>{t(label)}</span>
          <span className="value">{store.baseInfo[label]}</span>
        </div>
      )
  }

  return null
})

const Attribute: React.FC<AttributeProps> = observer(({ label }) => {
  const baseInfo = useContext(StoreContext).baseInfo
  const { t } = useTranslation('baseInfo')
  return (
    <div
      className="attribute"
      css={css`
        display: flex;
        align-items: center;

        input {
          flex: 1;
          max-height: 2em;
          margin: 0 5px;
        }
      `}
    >
      <span>{t(label)}</span>
      <input
        type="text"
        value={baseInfo[label]}
        aria-label={label}
        size={1}
        onChange={e => {
          if (typeof baseInfo[label] === 'number') {
            //@ts-expect-error
            baseInfo[label] = Number(e.target.value)
          } else {
            //@ts-expect-error
            baseInfo[label] = e.target.value
          }
        }}
      />
      <FontAwesomeIcon icon={faDice} />
    </div>
  )
})

const Total: React.FC = observer(() => {
  const baseInfo = useContext(StoreContext).baseInfo
  const { t } = useTranslation('baseInfo')

  return (
    <div
      css={css`
        display: flex;
        align-items: center;

        .totalNum {
          flex: 1;
          text-align: center;
        }
      `}
    >
      <span>{t('total')}</span>
      <span className="totalNum">{baseInfo.totalAttr}</span>
    </div>
  )
})
