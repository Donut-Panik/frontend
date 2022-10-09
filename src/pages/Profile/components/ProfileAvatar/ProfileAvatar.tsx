import { FC } from 'react'

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
  margin: 30px;
  border: 1px solid #b6c1dd;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background-color: ${theme.palette.white};
`

const Img = styled.img`
  width: 250px;
  height: 450px;
`
const Name = styled(Text)`
  color: ${theme.palette.main_text};
`

const Desc = styled(Text)`
  color: ${theme.palette.sub_text};
  padding-top: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 23px;
`

const Column = styled.div`
  margin: 30px 90px 0px 0px;

  display: flex;
  flex-direction: column;
`

const Element = styled.div`
  width: 255px;
  height: 60px;

  background-color: ${theme.palette.graph_green};
  border-radius: 24px 0px 24px 0px;
`
const ElementText = styled.p`
  position: absolute;
  margin: 20px 30px;
  color: ${theme.palette.white};
`

const Btn = styled.button`
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 18px;
  background-color: ${theme.palette.sub_main};

  color: ${theme.palette.white};
  font-weight: 400;
  font-size: 13px;

  &:hover {
    background-color: ${theme.palette.blue};
  }
`

export const ProfileAvatar: FC = () => (
  <>
    <Wrapper>
      <Row>
        <Img src={ava} />
        <Column>
          <Name variant="h8">NFT "Совушка в шапочке"</Name>
          <Desc variant="t4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
            purus non enim praesent elementum
          </Desc>
          <Btn>Продать NFT</Btn>
        </Column>
      </Row>
      <Element>
        <ElementText>20₽ из 940₽ возможных</ElementText>
      </Element>
    </Wrapper>
  </>
)
