import Post from "./Post";
import { useContext } from "react";
import { PostList as  PostListData} from "../Store/posts-list-store";

const PostList=()=>{
    const {postList}=useContext(PostListData);

   return <>
        {postList.map((post)=>{
            return <Post key={post.id} post={post}/>
        })}
    </>
}
export default PostList;