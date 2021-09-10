import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import CharInfo from './CharInfo'
import Title from './Title'

const InfoBar: React.FC = observer(() => {
  return (
    <div>
      <Title />
      <CharInfo />
    </div>
  )
})

export default InfoBar
