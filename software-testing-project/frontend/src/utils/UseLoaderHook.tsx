import { useState } from 'react'
// Data Loading Custom hook
const useLoaderHook = (props: boolean) => {
  const [loading, setLoading] = useState<boolean>(props)
  return { loading, setLoading }
}

export default useLoaderHook
