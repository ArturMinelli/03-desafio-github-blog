import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";
import ReactMarkdown from 'react-markdown'
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export function Post() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/${username}/${repo}/issues/${postNumber}`)
      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPost()
  }, [])

  return (
    <PostContainer>
      {isLoading ? (
        <Spinner />
      ): (
        <PostHeader post={post}/>
      )}
      <PostContent>
        {isLoading ? (
          <Spinner />
        ) : (
          <ReactMarkdown>
            {post.body}
          </ReactMarkdown>
        )}
      </PostContent>
    </PostContainer>
  )
}