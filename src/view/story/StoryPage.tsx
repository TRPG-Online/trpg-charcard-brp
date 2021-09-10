import { css } from '@emotion/react'
import StoryBalance from './StoryBalance'
import StoryInfo from './StoryInfo'

const StoryPage: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        column-gap: 1em;
        .storyInfo {
          flex-basis: 50%;
        }
      `}
    >
      <StoryInfo />
      <StoryBalance />
    </div>
  )
}

export default StoryPage
