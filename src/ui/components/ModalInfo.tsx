import { FC, memo } from 'react'
import { styled, theme } from 'ui/styles'

import krestik from 'ui/images/krestik.png'

type Props = {
  isVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled.div`
    width: 525px;
    height: 200px;

    background-color: ${theme.palette.white};
    border: 1px solid ${theme.palette.blueGray};
    border-radius: 24px;
`

const Text = styled.p`
    position: absolute;
    padding: 10px 30px;

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
`

const Close = styled.img`
    cursor: pointer;
    margin-top: 10px;
    margin-left: 490px;
`

export const _ModalInfo: FC<Props> = ({ isVisible }) => {

  return (
    <Wrapper>
        <Close src={krestik} alt='close' onClick={() => isVisible(false)} />
      <Text>Для получения NFT нужно выполнить все ежедневные задания 5 дней подряд. 
        После получения ваш NFT будет стоить n₽, но его стоимость можно будет увеличить
         выполняя уже разблокированные еженедельные задания. Доступно n уровней улучшения NFT. 
         Финальная версия NFT будет стоить n₽₽₽. Его можно продать и получить «Digital 
         Ruble» – цифровую валюту, которую можно обменять в магазине.
        </Text>
    </Wrapper>
  )
}

export const ModalInfo = memo(_ModalInfo)
