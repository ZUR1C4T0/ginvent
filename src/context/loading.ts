import { atom } from 'recoil'

const loadingState = atom({
    key: 'loading',
    default: true,
})

export default loadingState
