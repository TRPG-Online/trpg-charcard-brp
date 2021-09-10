import { css } from '@emotion/react'
import { useTranslation } from 'react-i18next'

const Title: React.FC = () => {
  const { t } = useTranslation()

  return <div css={titleCss}>{t('title')}</div>
}

export default Title

const titleCss = css`
  font-size: 24px;
  margin-bottom: 1em;
`
