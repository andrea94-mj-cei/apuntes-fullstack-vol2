import {useParams} from 'react-router-dom'
//permite leer los parámetros que quieras de la url


const BlogPost = () => {
    //leer las distintas params
    //por ejemplo :blogId y :jaume

    const {blogId} = useParams();

    return ( 
        <>
      
        soy BlogPostPage {blogId}</>
     );
}
 
export default BlogPost;