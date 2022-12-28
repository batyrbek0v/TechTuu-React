import React from 'react'
import { API } from "../api"

const useCrud = () => {

  const [popUp, setPopUp] = React.useState(false)
  const [popUpError, setPopUpError] = React.useState(false)
  const [errMessage, setErrMessage] = React.useState('')


  // POSTING-REVIEW
  const post = React.useCallback(data => {
    API.postReview(data)
      .then(res => res && setPopUp(true))
      .catch(err => {
        err && setPopUpError(true)
        setErrMessage(err.message)
      })
  }, [])

  return {
    popUp,
    setPopUp,
    popUpError,
    setPopUpError,
    errMessage,
    actions: {
      post,
    }
  }
}

export default useCrud