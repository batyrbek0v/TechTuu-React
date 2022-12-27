import axios from "axios"

const DATABASE = 'https://test-9b5aa-default-rtdb.asia-southeast1.firebasedatabase.app'

export const API = {
  postReview: (data) => axios.post(`${DATABASE}/reviews.json`, data)
}