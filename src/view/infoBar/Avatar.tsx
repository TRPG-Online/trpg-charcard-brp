import { css } from '@emotion/react'

const CharAvatar: React.FC = () => {
  return (
    <div
      css={css`
        height: 100%;
        margin-right: 1rem;
        box-sizing: border-box;
        & > img {
          height: 100%;
          border-radius: 1rem;
          background-color: #8e8d8b;
        }
      `}
    >
      <img src="https://i.loli.net/2021/08/27/pogEzeW96bys2t8.png" alt="" />
    </div>
  )
}

export default CharAvatar
