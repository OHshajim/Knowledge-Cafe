import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [Blogs , setBlog] = useState([])
    useEffect(()=>{
        fetch('../../../public/Blogs/Blogs.JSON')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    console.log(Blogs);
    return (
        <div className="m-10 flex flex-col justify-center items-center">
            <h1 className="text-4xl">Blogs : {Blogs.length}</h1>
           <div >
           {
                Blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;