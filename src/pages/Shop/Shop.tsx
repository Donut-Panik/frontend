import { FC, useContext, useEffect, useState } from 'react'

import { Button, Loader, Page } from 'ui/components'
import { Text } from 'ui/components/Text'
import { styled, theme } from 'ui/styles'
import { Image } from 'ui/components/Image'
import { ChallengeCard } from 'pages/–°hallenges/components/ChallengeCard'
import { useGetRequest } from 'shared/hooks/useGetRequest'

import { ReactComponent as Sprite } from 'ui/icons/underline_sprite.svg'
import banner from 'ui/images/banner.png'
import { AuthContext } from 'shared/context/context'

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
  bottom: 0;
  left: 12px;
`

const Banner = styled.img`
  width: 100%;
`

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: white;
  border-radius: 24px;
  width: 90%;
  margin: 12px;
  border: 1px solid #b6c1dd;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
`

const Money = styled.div``

const Filters = styled.div`
  display: flex;
  gap: 12px;
`

const FilterButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
  border-radius: 8px;
  background-color: ${theme.palette.blue};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 32px;
`

const Filter: FC<{ iconName: string; label: string }> = ({ iconName, label }) => (
  <FilterButton>
    <Text variant="t7" color={theme.palette.white}>
      {label}
    </Text>
    <Image name={iconName} />
  </FilterButton>
)

type Product = {
  category_id: number
  category_name: string
  descriotion: string
  id: number
  name: string
  photo: string
  price: number
}

export const Shop: FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { user } = useContext(AuthContext)

  const onLoadProducts = (data: any) => {
    setProducts(data.items)
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
          –ú–į–≥–į–∑–ł–Ĺ
        </StyledHeader>
        <StyledSprite />
      </Header>
      <Banner src={banner} />
      <InfoBar>
        <Money>
          <Text variant="h8" inline>
            {`–Ď–į–Ľ–į–Ĺ—Ā: `}
          </Text>
          <Text variant="h8" color={theme.palette.graph_green} inline>
            {`${user?.coinsAmount}`}‚āĹ
          </Text>
        </Money>
        <Filters>
          <Filter label="–ú–Ķ—Ä—á" iconName="tshirt" />
          <Filter label="–ö–į–Ĺ—Ü–Ķ–Ľ—Ź—Ä–ł—Ź" iconName="pencil" />
          <Filter label="–Ē—Ä—É–≥–ĺ–Ķ" iconName="dots" />
        </Filters>
      </InfoBar>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid>
          {products.map((product, i) => (
            <ChallengeCard
              key={i}
              info={product.descriotion}
              label={product.name}
              price={product.price}
              imgLink={product.photo}
            />
          ))}
        </Grid>
      )}
    </Page>
  )
}
