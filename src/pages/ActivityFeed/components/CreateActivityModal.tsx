import { FC, useState } from 'react'

import { InputField, Modal } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { Text } from 'ui/components/Text'
import { PrimaryButton } from 'ui/components/PrimaryButton'
import { useSendRequest } from 'shared/hooks/useSendRequest'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
`

const Divider = styled.div`
  width: 300px;
  height: 2px;
  background-color: ${theme.palette.blue};
`
const SubmitButton = styled(PrimaryButton)`
  width: 250px;
`

const Select = styled.select`
  width: 250px;
  margin-left: 40px;
`
const Option = styled.option``

const types = [
  {
    key: 'NFT'
  },
  {
    key: 'RUBLE'
  },
  {
    key: 'MATIC'
  }
]

type AwardT = 'NFT' | 'RUBLES' | 'MATIC'

type Props = {
  isOpen: boolean
  onOverlayClick: () => void
}

export const CreateActivityModal: FC<Props> = ({ isOpen, onOverlayClick }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState<AwardT>(types[0].key as AwardT)
  const [dateEnd, setDateEnd] = useState('')
  const [image, setImage] = useState<FileList | null>(null)

  const callback = () => {
    onOverlayClick()
  }

  const { sendRequest } = useSendRequest(callback, 'event', true)

  const onSubmit = () => {
    const formatData = {
      name,
      descriotion: description,
      price,
      type,
      date_end: dateEnd,
      upload_files: [image]
    }

    sendRequest(formatData)
  }

  return (
    <Modal isVisible={isOpen} onOverlayClick={onOverlayClick}>
      <Content>
        <Information>
          <Text variant="h6" color={theme.palette.blue}>
            Создание активности
          </Text>
          <Divider />
          <InputField onChange={setName} value={name} label="Название" />
          <InputField onChange={setDescription} value={description} label="Описание" />
          <InputField onChange={setDateEnd} value={dateEnd} label="Дата окончания" type="date" />
          <InputField onChange={setPrice} value={price} label="Награда" />
          <Text variant="t4">
            Тип награды
            <Select>
              {types.map((el) => (
                <Option onClick={() => setType(el.key as AwardT)}>{el.key}</Option>
              ))}
            </Select>
          </Text>
          <InputField onFileChange={setImage} value={price} label="Обложка" type="file" />
          <SubmitButton onClick={onSubmit} type="submit">
            <Text variant="t3">Создать</Text>
          </SubmitButton>
        </Information>
      </Content>
    </Modal>
  )
}
