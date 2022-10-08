import { styled, theme } from 'ui/styles'
import logo from 'ui/images/RectangleVTB.png'
import logoLine from 'ui/images/Rectangle2.png'

const Text = styled.span`
  position: absolute;

  color: ${theme.palette.blue};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 60px;
`
const Logo = styled.div`
  position: relative;
`
const Img = styled.img`
  margin: 0px;
  padding: 0px;
  float: left;
  font-size: 0;
  border: 0;
`

export const LogoRating: React.FC = () => {
  return (
    <div>
      <Logo>
        <Text>Рейтинг</Text>
        <Img src={logoLine} alt="logo" />
        <Img src={logo} alt="logo" />
      </Logo>
    </div>
  )
}
