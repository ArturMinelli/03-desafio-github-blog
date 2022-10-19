import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { PostCard } from './components/PostCard';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { BlogContainer, PostsContainer } from "./styles";

export function Blog() {
  const [issues, setIssues] = useState([])

  async function fetchIssues() {
    const response = await api.get('/')

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <BlogContainer>
      <Profile />
      <SearchForm
        issuesAmount={issues.length}
      />
      <PostsContainer>

        {issues.map((issue: any) => (
          <PostCard
            key={issue.id}
            issueNumber={issue.number}
            issueTitle={issue.title}
            issueContent={issue.body}
            createdAt={issue.created_at}
          />
        ))}
      </PostsContainer>
    </BlogContainer>
  )
}