/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect, useRef } from 'react'
import { intputInterface } from './InputInterface'
import useSWR from 'swr'
import { BASE_URL_V2 } from '../../config/baseURL'
import Card from '../shared/Card'

interface Product {
  name: string
  image: string
  desc: string
  quantity: string
}

const fetcher = async (url: string): Promise<{ results: Product[] }> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  // eslint-disable-next-line @typescript-eslint/return-await
  return response.json()
}

const Input = ({ buttonText }: intputInterface): JSX.Element => {
  const [query, setQuery] = useState<string>('')
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleInputFocus = (): void => {
    setShowDropdown(true)
  }

  const handleResultClick = (result: Product): void => {
    console.log(result)
  }

  const { data: results, error } = useSWR<{ results: Product[] }>(
    query.length > 0 ? `${BASE_URL_V2}/search/${query}` : null,
    fetcher
  )

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setShowDropdown(false)
        document.body.focus()
      }
    }
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        cardRef.current != null &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <input
        className="inputSearch"
        autoComplete="off"
        spellCheck={false}
        style={{ width: buttonText !== undefined ? '50%' : 'initial' }}
        id="text"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={handleInputFocus}
        placeholder="Search..."
      />
      {showDropdown && (
        <div className="inputButton" style={{ top: '3.5rem' }}>
          <Card className="searchResult" ref={cardRef}>
            {error ? (
              <div>{error.message}</div>
            ) : (
              results?.results?.map((result: Product, index: number) => (
                <div
                  className="searchBox"
                  key={index}
                  onClick={() => handleResultClick(result)}>
                  <div className="searchResultBtw">
                    <img
                      src={result.image}
                      alt={result.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://res.cloudinary.com/bizstak/image/upload/v1678603629/placeholder-image_wjnhxg.png'
                      }}
                    />
                    <div className="text">
                      <h3>{result.name}</h3>
                      <p>{result.desc}</p>
                      <p>
                        {+result.quantity < 1 ? (
                          <span style={{ color: 'red' }}>
                            Out of Stock. Check back
                          </span>
                        ) : (
                          <span style={{ color: 'green' }}>
                            {result.quantity}{' '}
                            {+result.quantity === 1
                              ? 'item available'
                              : 'items available'}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Card>
        </div>
      )}

      <label htmlFor="text">
        <img
          src="https://res.cloudinary.com/bizstak/image/upload/v1678557630/search_o0hnzs.svg"
          width={20}
          height={20}
          style={{ position: 'absolute', left: 10, top: 13 }}
          alt="search icon"
        />
      </label>
    </>
  )
}

export default Input
