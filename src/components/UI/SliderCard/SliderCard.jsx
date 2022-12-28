import React from 'react'

const SliderCard = ({ route, url, alt }) => {
  return (
    <>
      <a
        href={route}
        rel="noreferrer"
        target="_blank"
      >
        <img src={url} alt={alt} />
      </a>
    </>
  )
}

export default SliderCard