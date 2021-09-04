import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import BaseInfo from '../baseInfo/BaseInfo'

const InfoBar: React.FC = observer(() => {
  return (
    <div>
      <Title />
      <BaseInfo />
    </div>
  )
})

export default InfoBar

const Title: React.FC = () => {
  const { t } = useTranslation()

  return <div css={titleCss}>{t('title')}</div>
}

const titleCss = css`
  font-size: 24px;
`
