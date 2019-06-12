import { useRef, useCallback,useState } from 'react'

const useGetSet = <T>(initialValue: T): [() => T, (value: T) => void] => {

  const [,update] = useState(0)
  const state = useRef(initialValue)

  const get = useCallback(() => state.current, [])

  const set = useCallback(value => {
    state.current = value
    update(cnt => cnt + 1)
  },[])

  return [get, set]

}

export default useGetSet