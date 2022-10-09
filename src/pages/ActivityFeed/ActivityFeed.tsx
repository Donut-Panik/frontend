import { FC, useCallback, useEffect, useState } from 'react'

import { Button, Loader, Page } from 'ui/components'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite1.svg'
import banner from 'ui/images/banner1.png'
import { useGetRequest } from 'shared/hooks/useGetRequest'
import { ActivityBar, ActivityBarProps } from './components/ActivityBar'
import { ActivityModal } from './components/ActivityModal'
import { Image } from 'ui/components/Image'
import { CreateActivityModal } from './components/CreateActivityModal'

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

const CreateActivity = styled(Image)`
  position: fixed;
  padding: 10px;
  bottom: 30px;
  right: 100px;
  width: 30px;
  height: 30px;
  background-color: ${theme.palette.blue};
  border-radius: 50%;
  z-index: 123;
`

export const ActivityFeed: FC = () => {
  const [activityModalOpened, setActivityModalOpened] = useState(false)
  const [modalIdOpened, setModalIdOpened] = useState<number | null>(null)
  const [feeds, setFeeds] = useState<ActivityBarProps[]>([])
  const onLoadProducts = (data: any) => {
    setFeeds(data.items)
  }

  const { mutate, isLoading } = useGetRequest(onLoadProducts, 'events')

  useEffect(() => {
    mutate({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPlayClick = useCallback((index: number) => {
    setModalIdOpened(index)
  }, [])

  return (
    <Page>
      <Button onClick={() => setActivityModalOpened(true)}>
        <CreateActivity name="pencil" />
      </Button>
      <ActivityModal
        label={feeds.length ? feeds[modalIdOpened || 0].name : ''}
        isOpen={modalIdOpened !== null}
        onOverlayClick={() => setModalIdOpened(null)}
      />
      <CreateActivityModal isOpen={activityModalOpened} onOverlayClick={() => setActivityModalOpened(false)} />
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
          <ActivityBar
            key={i}
            name={el.name}
            descriotion={el.descriotion}
            photo={el.photo}
            price={el.price}
            onPlayClick={() => onPlayClick(i)}
          />
        ))
      )}
    </Page>
  )
}
