import { useState } from 'react'

const useLoaderHook = (props: boolean) => {
  const [loading, setLoading] = useState<boolean>(props)
  return { loading, setLoading }
}

export default useLoaderHook
