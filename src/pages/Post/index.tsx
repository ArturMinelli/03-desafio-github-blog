import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";
import ReactMarkdown from 'react-markdown'
import { api } from "../../lib/axios";

export function Post() {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<any>({})

  async function fetchIssue() {
    const response = await api(`/${issueNumber}`)

    setIssue(response.data)
  }

  useEffect(() => {
    fetchIssue()
  }, [])

  return (
    <PostContainer>
      <PostHeader issue={issue}/>
      <PostContent>
        <ReactMarkdown>
          {issue.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}