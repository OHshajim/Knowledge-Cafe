
const Blog = ({ blog }) => {
    const { title, img, author, author_img, reading_time, release_date, tags } = blog;
    console.log(blog);
    return (
        <div className="m-10 w-[700px] p-10">
            <img src={img} alt="" className="w-[660px] h-[400px]" />
            <div className="flex justify-between items-center gap-4  mt-5">
                <div className="flex gap-4 items-center">
                    <img src={author_img} alt="" className="w-14  h-14 rounded-full" />
                    <div>
                        <h3>{author}</h3>
                        <p>{release_date}</p>
                    </div>
                </div>
                <div className="flex gap-1 ">
                    <p>{reading_time} read</p>
                    <img src="../../../src/assets/images/Frame.png" alt="" />
                </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold" >{title}</h1>
            <div className="flex gap-2 text-[#11111181]">
                {tags.map((tag,idx) =><p key={idx}>{tag}</p>)}
            </div>
            <button className="underline text-[#6047EC]">Mark to read</button>
        </div>
    );
};

export default Blog;