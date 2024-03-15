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
        <div className="m-10">
            <h1 className="text-xl">Blogs : {Blogs.length}</h1>
            {
                Blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;