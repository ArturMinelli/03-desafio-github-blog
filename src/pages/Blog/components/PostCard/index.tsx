import styled from "styled-components";
import { PostCardContainer, PostCardHeader } from "./styles";

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h2>The Secrets of OOP (Object Oriented Programming)</h2>
        <span>Há 2 dias</span>
      </PostCardHeader>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas quo magni aliquam vel quaerat et iusto rem, perspiciatis accusantium. Accusamus nisi voluptatibus iure perspiciatis quisquam repellendus fuga ea deleniti?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas quo magni aliquam vel quaerat et iusto rem, perspiciatis accusantium. Accusamus nisi voluptatibus iure perspiciatis quisquam repellendus fuga ea deleniti?
      </p>
    </PostCardContainer>
  )
}