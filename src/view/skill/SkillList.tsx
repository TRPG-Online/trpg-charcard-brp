import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'

const SkillList: React.FC = () => {
  return (
    <div>
      <SkillItem />
    </div>
  )
}

export default SkillList

const SkillItem: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;

        & > div {
          width: 50px;
          height: 3em;
          display: inline-block;
          position: relative;
          vertical-align: middle;
          text-align: center;
          span {
            display: inline-block;
            vertical-align: middle;
          }
        }

        .isJobSkill {
          background-color: #ccc;
        }
      `}
    >
      <SkillLabel className="isJobSkill" />
      <SkillLabel className="skillName" />
      <SkillLabel className="initPoint" />
      <SkillLabel className="jobPoint" />
      <SkillLabel className="interestPoint" />
    </div>
  )
}

const SkillLabel: React.FC<{ className: string }> = ({ className }) => {
  const { t } = useTranslation('skill')

  return (
    <div className={className}>
      <span>{t(className)}</span>
    </div>
  )
}
