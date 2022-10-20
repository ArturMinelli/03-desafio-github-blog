import { useCallback, useEffect, useState } from 'react';
import { Spinner } from '../../components/Spinner';
import { api } from '../../lib/axios';
import { PostCard } from './components/PostCard';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { BlogContainer, PostsContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <BlogContainer>
      <Profile />
      <SearchForm
        postsAmount={posts.length}
        getPosts={getPosts}
      />
      {isLoading ? (
        <Spinner />
      ): (
        <PostsContainer>
          {posts.map((post) => (
              <PostCard
                key={post.number}
                post={post}
              />
            ))}
        </PostsContainer>
      )}
    </BlogContainer>
  )
}