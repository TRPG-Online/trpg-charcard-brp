import { css } from '@emotion/react'
import BattleAttr from './BattleAttr'
import CharAttr from './CharAttr'

const BaseInfoPage: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;

        .charAttr {
          flex-basis: 60%;
        }
        .battleAttr {
          flex-basis: 40%;
        }
      `}
    >
      <CharAttr />
      <BattleAttr />
    </div>
  )
}

export default BaseInfoPage
