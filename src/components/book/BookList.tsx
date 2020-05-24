import React, { FC } from 'react'

import { Entry } from 'contentful'

import Accent from '../../elements/accent/Accent'
import Margin from '../../elements/margin/Margin'
import { useSort, useGroupByCategory } from '../../hooks/book'
import { IBookFields } from '../../models/contentful'
import Book from './Book'

type Props = {
  readonly bookList: Entry<IBookFields>[]
}

const BookList: FC<Props> = ({ bookList }) => {
  const sortedBookList = useSort(bookList)
  const groupByCategoryBookList = useGroupByCategory(sortedBookList)

  return (
    <>
      {groupByCategoryBookList.map((groupByCategoryBook) => {
        return (
          <section key={groupByCategoryBook.slug}>
            <h2 id={groupByCategoryBook.slug}>
              <Accent>
                <a href={`#${groupByCategoryBook.slug}`}>
                  {groupByCategoryBook.title}
                </a>
              </Accent>
            </h2>

            {groupByCategoryBook.contents.map((book) => (
              <Margin key={book.isbn} bottom={4}>
                <Book book={book} />
              </Margin>
            ))}
          </section>
        )
      })}
    </>
  )
}

export default BookList
