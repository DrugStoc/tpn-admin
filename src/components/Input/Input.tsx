/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect, useRef } from 'react'
import { intputInterface } from './InputInterface'
import useSWR from 'swr'
import { BASE_URL_V2 } from '../../config/baseURL'
import Card from '../shared/Card'
import { useLocation } from 'react-router-dom'

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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const cardRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const pathArr = pathname.split('/')
  let slug = pathArr[pathArr.length - 1]
  if (slug !== '' || slug.length !== 0) {
    slug = ` ${slug[0].toUpperCase()}${slug.slice(1)}`
  } else {
    slug = ''
  }

  const handleInputFocus = (): void => {
    setShowDropdown(true)
  }

  const handleResultClick = (result: Product): void => {
    console.log(result)
  }

  const {
    data: results,
    error,
    isValidating,
  } = useSWR<{ results: Product[] }>(
    query.length > 0 ? `${BASE_URL_V2}/search/${query}` : null,
    fetcher
  )

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (
        event.key === 'Escape' ||
        event.code === 'Escape' ||
        event.which === 27 ||
        event.keyCode === 27
      ) {
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

  useEffect(() => {
    setIsLoading(isValidating)
  }, [isValidating])

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
        placeholder={`Search${slug}...`}
      />
      {showDropdown && (
        <div className="inputButton" style={{ top: '3.5rem' }}>
          <Card className="searchResult" ref={cardRef}>
            {isLoading ? (
              [...Array(3)].map((_, index) => {
                return (
                  <div className="searchBox" key={index}>
                    <div className="searchResultBtw">
                      <img
                        src="https://res.cloudinary.com/bizstak/image/upload/v1680047648/loading-spinner_vwylao.gif"
                        alt="spinner rolling"
                      />
                      <div className="text">
                        <h3>Loading product name...</h3>
                        <p>Loading product description...</p>
                        <p style={{ color: 'green' }}>
                          Loading product quantity...
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : error ? (
              <div className="searchBox">
                <div className="searchResultBtw">
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1680047648/loading-spinner_vwylao.gif"
                    alt="spinner rolling"
                  />
                  <div className="text">
                    <h3>{error.message}</h3>
                    <p style={{ color: '#f00' }}>
                      Check your internet connection
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              results?.results?.map((result: Product, index: number) => (
                <div
                  className="searchBox"
                  key={index}
                  onClick={() => handleResultClick(result)}>
                  <div className="searchResultBtw">
                    <img
                      src={
                        isLoading
                          ? 'https://res.cloudinary.com/bizstak/image/upload/v1680047648/loading-spinner_vwylao.gif'
                          : result.image
                      }
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
                              ? 'Item available'
                              : 'Items available'}
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
