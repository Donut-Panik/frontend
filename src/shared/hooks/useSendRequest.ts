import React from 'react'
import { useMutation } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import HttpService from 'services/main.services'

export type SendRequestReturnT = ReturnType<typeof useSendRequest>

export const useSendRequest = (cb: () => void, endpoint: string) => {
  const [queryResult, setQueryResult] = React.useState<string | null>(null)

  const {
    isLoading,
    mutate: sendRequest,
    isError,
    isSuccess
  } = useMutation<AxiosResponse<any> | undefined, AxiosError, any>(
    async <T>(data: T) => {
      setQueryResult(null)

      return await HttpService.post(data, endpoint)
    },
    {
      onSuccess: (res) => {
        cb()
        setQueryResult(res!.data)
      },
      onError: (err: AxiosError) => {
        cb()
        setQueryResult(err.message)
      }
    }
  )

  return { queryResult, isLoading, sendRequest, isError, isSuccess }
}
