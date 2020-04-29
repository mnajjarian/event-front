import React from 'react'
import { sortByTag } from '../helpers'
import { Card } from '../components/Card/Card'
import { EventInterface } from '../interfaces'
type Props = {
  data: {
    loading: boolean
    data?: EventInterface[]
  }
  category: string
  offsett: number
}
export const useCategory = ({ data, category, offsett }: Props): JSX.Element => {
  if (!data.data && data.loading) {
    return <div></div>
  }

  const sortData = sortByTag(data.data || [], category).slice(0, offsett)
  return (
    <>
      {sortData.map((el) => (
        <Card key={el.id} event={el} />
      ))}
    </>
  )
}
