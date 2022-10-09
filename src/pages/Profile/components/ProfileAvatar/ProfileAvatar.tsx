import { FC } from 'react'
import { Image } from 'ui/components/Image'
import { Text } from 'ui/components/Text'

import { styled, theme } from 'ui/styles'

import ava from 'ui/images/DreamCard.png'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  align-items: center;
  justify-content: center;
  margin: 30px;

  border: 1px solid #b6c1dd;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background-color: ${theme.palette.white};
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 450px;
`
const Name = styled.p`
  font-weight: 600;
  font-size: 32px;
  color: ${theme.palette.main_text};
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${theme.palette.sub_text};
  padding-top: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  position: absolute;
  top: 0;
  margin: 30px 90px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Element = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 255px;
  height: 60px;

  background-color: ${theme.palette.graph_green};
  border-radius: 24px 0px 24px 0px;
`
const ElementText = styled.p`
  position: absolute;
  margin: 20px 30px;

  font-weight: 600;
  font-size: 16px;
  color: ${theme.palette.white};
`

const Btn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: 20px;

  width: 100px;
  height: 40px;

  border: none;
  border-radius: 18px;
  background-color: ${theme.palette.sub_main};

  color: ${theme.palette.white};
  font-weight: 400;
  font-size: 13px;
`

export const ProfileAvatar: FC = () => (
  <>
    <Wrapper>
      <Row>
        <Img src={ava} />
        <Column>
          <Name>NFT "Совушка в шапочке"</Name>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
            purus non enim praesent elementum
          </Desc>
        </Column>
      </Row>
      <Element>
        <ElementText>20₽ из 940₽ возможных</ElementText>
      </Element>
    </Wrapper>
    <Btn>Продать NFT</Btn>
  </>
)
