import axios from 'axios'

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge'
  // baseURL: 'https://api.github.com/search/issues?q=repo:ArturMinelli/03-desafio-github-blog'
})

export const userApi = axios.create({
  baseURL: 'https://api.github.com/users/ArturMinelli'
  // baseURL: 'https://api.github.com/search/issues?q=repo:ArturMinelli/03-desafio-github-blog'
})
