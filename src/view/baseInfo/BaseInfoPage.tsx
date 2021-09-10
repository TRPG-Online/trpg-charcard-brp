import { css } from '@emotion/react'
import BattleAttr from './BattleAttr'
import CharAttr from './CharAttr'

const BaseInfoPage: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 1em;

        .charAttr {
          flex-basis: 60%;
        }
        .battleAttr {
          flex-grow: 1;
        }
      `}
    >
      <CharAttr />
      <BattleAttr />
    </div>
  )
}

export default BaseInfoPage
