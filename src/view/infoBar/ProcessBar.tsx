import { css } from '@emotion/react'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { BaseInfo } from '../../store/baseInfo'
import { StoreContext } from '../App'

type ValueTypeFilter<T extends object, U> = Pick<
  T,
  { [K in keyof T]-?: U extends T[K] ? K : never }[keyof T]
>

interface ProcessProps {
  value: keyof ValueTypeFilter<BaseInfo, number>
  maxValue: keyof ValueTypeFilter<BaseInfo, number>
  color?: string
}

const ProcessBar: React.FC<ProcessProps> = observer(
  ({ value, maxValue, color }) => {
    const baseInfo = useContext(StoreContext).baseInfo
    const ratio = (baseInfo[value] / baseInfo[maxValue]) * 100
    return (
      <div css={style}>
        <div className="label">{value}</div>
        <div className="bar">
          <div
            className="process"
            style={{
              width: ratio + '%',
              backgroundColor: color ?? 'red',
            }}
          />
        </div>
        <span className="ratio">
          {baseInfo[value]} / {baseInfo[maxValue]}
        </span>
      </div>
    )
  }
)

export default ProcessBar

const style = css`
  display: flex;

  .label {
    width: 3rem;
    text-align: left;
    font-size: 1.1rem;
  }

  .process,
  .bar {
    width: 100%;
    border-radius: 5px;
    height: 10px;
  }

  .bar {
    margin: auto;
    background-color: #5b5b5b;
    position: relative;
    box-shadow: 0 0 1.5px #5b5b5b;
    flex: 1;
  }

  .ratio {
    margin-left: 1rem;
    word-break: keep-all;
  }
`
