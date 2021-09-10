import { css } from '@emotion/react'
import StoryInfo from './StoryInfo'

const StoryPage: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <StoryInfo />
    </div>
  )
}

export default StoryPage
