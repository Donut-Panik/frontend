import { FC, memo } from 'react'
import { styled, theme } from 'ui/styles'

import krestik from 'ui/images/krestik.png'

type Props = {
  isVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: ${theme.palette.white};
  border-radius: 24px;
`

const Text = styled.p`
  position: absolute;
  padding: 10px 30px;
  margin-top: 16px;

  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`

const Close = styled.img`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 10px;
  z-index: 1;
`

export const _ModalInfo: FC<Props> = ({ isVisible }) => {
  return (
    <Wrapper>
      <Close src={krestik} alt="close" onClick={() => isVisible(false)} />
      <Text>
        Для получения NFT нужно выполнить все ежедневные задания 5 дней подряд. После получения ваш NFT будет стоить n₽,
        но его стоимость можно будет увеличить выполняя уже разблокированные еженедельные задания. Доступно n уровней
        улучшения NFT. Финальная версия NFT будет стоить n₽₽₽. Его можно продать и получить «Digital Ruble» – цифровую
        валюту, которую можно обменять в магазине.
      </Text>
    </Wrapper>
  )
}

export const ModalInfo = memo(_ModalInfo)
