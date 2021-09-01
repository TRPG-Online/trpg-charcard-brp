import { css } from '@emotion/react'
import React, { useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { UIState } from '../App'
import { TabName } from './TabBar'
import TabItemBase from './TabItemBase'

interface TabProps {
  label: TabName
}
export const PageTab: React.FC<TabProps> = ({ label }) => {
  const state = useContext(UIState)
  const handleClick = useCallback(() => state.setTab(label), [])

  const { t } = useTranslation('tab')

  return <TabItemBase onClick={handleClick} text={t(label)} />
}

export const SaveTab: React.FC = () => {
  const { t } = useTranslation('tab')

  return <TabItemBase css={topTabCss} text={t('save')} />
}

export const ExitTab: React.FC = () => {
  const { t } = useTranslation('tab')

  return <TabItemBase css={topTabCss} text={t('exit')} />
}

const topTabCss = css`
  justify-self: flex-start;
`
