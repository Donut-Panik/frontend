import { FC, memo } from 'react'

import { Page } from 'ui/components'
import { styled, theme } from 'ui/styles'
import { Text } from 'ui/components/Text'
import { Image } from 'ui/components/Image'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite.svg'

import { ProfileRating } from './components/ProfileRating'
import { Support } from './components/Support'
import { RatingList } from './components/RatingList'

const StyledHeader = styled.div`
  width: 100%;
  position: relative;
  margin: 20px 0;
`

const StyledSprite = styled(Sprite)`
  position: absolute;
  top: 8px;
`

const Tasks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 40px;

  background-color: ${theme.palette.white};
  border: 1px solid #b6c1dd;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`

const Under = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const _Rating: FC = () => (
  <Page>
    <StyledHeader>
      <Text variant="h3" color={theme.palette.blue}>
        Рейтинг
      </Text>
      <StyledSprite />
    </StyledHeader>
    <Tasks>
      <Row>
        <Column>
          <ProfileRating />
          <Under>
            <Image name="sova" width={160} />
            <Support />
          </Under>
        </Column>

        <div>
          <RatingList />
        </div>
      </Row>
    </Tasks>
  </Page>
)

export const Rating = memo(_Rating)
