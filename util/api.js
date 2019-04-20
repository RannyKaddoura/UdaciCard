import { AsyncStorage } from 'react-native'

import STORAGE_KEY from '../components/Decks';

export function addDeck ({ value, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: value
  }))
}

export function removeDeck (key) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}