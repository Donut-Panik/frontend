import { FC, useEffect, useState } from 'react'

import { Loader, Page } from 'ui/components'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite1.svg'
import banner from 'ui/images/banner1.png'
import { useGetRequest } from 'shared/hooks/useGetRequest'
import { ActivityBar, ActivityBarProps } from './components/ActivityBar'

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  margin-top: 24px;
  margin-bottom: 20px;
`

const StyledHeader = styled(Text)`
  height: 100%;
`

const StyledSprite = styled(Sprite)`
  position: absolute;
  bottom: -12px;
  width: 400px;
`

const Banner = styled.img`
  width: 100%;
  pointer-events: none;
  user-select: none;
  margin-bottom: 32px;
`

export const ActivityFeed: FC = () => {
  const [feeds, setFeeds] = useState<ActivityBarProps[]>([])
  const onLoadProducts = (data: any) => {
    setFeeds(data.items)
  }

  const { mutate, isLoading } = useGetRequest(onLoadProducts, 'products')

  useEffect(() => {
    mutate({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Page>
      <Header>
        <StyledHeader variant="h3" color={theme.palette.blue}>
          Лента активности
        </StyledHeader>
        <StyledSprite />
      </Header>
      <Banner src={banner} />
      {isLoading ? (
        <Loader />
      ) : (
        feeds.map((el, i) => (
          <ActivityBar key={i} name={el.name} descriotion={el.descriotion} photo={el.photo} price={el.price} />
        ))
      )}
    </Page>
  )
}
