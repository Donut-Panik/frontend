import { FC, memo } from 'react'
import { Page } from 'ui/components'
import { Text } from 'ui/components/Text'

const _Education: FC = () => {
  return (
    <Page>
      <Text variant="h5">В разработке</Text>
    </Page>
  )
}

export const Education = memo(_Education)
