import { useEffect, useState } from 'react';
import { issuesApi, userApi } from '../../lib/axios';
import { PostCard } from './components/PostCard';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { BlogContainer, PostsContainer } from "./styles";

export function Blog() {
  const [issues, setIssues] = useState([])
  const [user, setUser] = useState({})

  async function fetchIssues() {
    const response = await issuesApi.get('')

    setIssues(response.data.items)
  }

  async function fetchUser() {
    const response = await userApi.get('')
    setUser(response.data)
  }

  useEffect(() => {
    fetchIssues()
    fetchUser()
  }, [])

  return (
    <BlogContainer>
      <Profile
        user={user}
      />
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