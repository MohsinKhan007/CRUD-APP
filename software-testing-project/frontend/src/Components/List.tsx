import React, { ReactNode } from 'react'
// Custom List Iterator created for iteration of the Employees List
// Through its propertiese we can add Div Styled Elements,render Element and Key of list and Child Props
type DivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

interface IList<T> {
  items: T[]
  keyExtractor: (item: T, index?: number) => number | string
  render: (item: T, index?: number) => ReactNode
  containerProps?: DivType
  childProps?: DivType
}

function List<T>({
  items,
  keyExtractor,
  render,
  containerProps,
  childProps,
}: IList<T>) {
  return (
    <div {...containerProps}>
      {items.map((item, index) => (
        <div key={keyExtractor(item, index)} {...childProps}>
          {render(item, index)}
        </div>
      ))}
    </div>
  )
}

export default List
