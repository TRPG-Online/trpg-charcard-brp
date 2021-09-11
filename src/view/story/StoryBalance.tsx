import { css } from '@emotion/react'
import GrayCard from '../../components/GrayCard'
import UnderLineInput from '../../components/UnderLineInput'

const StoryBalance: React.FC = () => {
  return (
    <GrayCard className="storyBalance">
      <BalanceItem label="信用评级" />
      <BalanceItem label="生活水平" />
      <BalanceItem label="现金" />
      <BalanceItem label="消费水平" />
      <Assets />
    </GrayCard>
  )
}

export default StoryBalance

const BalanceItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <span>{label}</span>
      <UnderLineInput aria-label={label} />
    </div>
  )
}

const Assets: React.FC = () => {
  return (
    <div
      css={css`
        span {
          display: block;
        }
      `}
    >
      <span>资产</span>
      <textarea cols={30} rows={5} />
    </div>
  )
}
