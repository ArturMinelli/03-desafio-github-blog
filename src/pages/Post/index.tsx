import { PostHeader } from "./components/PostHeader";
import { PostContainer, PostContent } from "./styles";

export function Post() {

  return (
    <PostContainer>
      <PostHeader />
      <PostContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia architecto ducimus tempore libero commodi dolore, dolores sit quisquam harum culpa consequatur, rerum excepturi hic et, exercitationem omnis eligendi laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia architecto ducimus tempore libero commodi dolore, dolores sit quisquam harum culpa consequatur, rerum excepturi hic et, exercitationem omnis eligendi laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia architecto ducimus tempore libero commodi dolore, dolores sit quisquam harum culpa consequatur, rerum excepturi hic et, exercitationem omnis eligendi laborum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia architecto ducimus tempore libero commodi dolore, dolores sit quisquam harum culpa consequatur, rerum excepturi hic et, exercitationem omnis eligendi laborum.</p>
      </PostContent>
    </PostContainer>
  )
}