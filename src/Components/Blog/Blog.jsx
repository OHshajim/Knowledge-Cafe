import PropTypes from 'prop-types'; // ES6
const Blog = ({ blog }) => {
    const { title, img, author, author_img, reading_time, release_date, tags } = blog;
    console.log(blog);
    return (
        <div className=" w-[700px] p-5 space-y-3 my-10 ">
            <img src={img} alt="" className="w-[660px] h-[400px] rounded-xl" />
            <div className="flex justify-between items-center gap-4 ">
                <div className="flex gap-4 items-center">
                    <img src={author_img} alt="" className="w-14  h-14 rounded-full" />
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-[#11111199] text-sm">{release_date}</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center text-[#11111199]">
                    <p>{reading_time} read</p>
                    <img src="../../../src/assets/images/Frame.png" alt="" />
                </div>
            </div>
            <h1 className="mt-5 text-4xl font-bold" >{title}</h1>
            <div className="flex gap-2 text-base">
                {tags.map((tag,idx) =><p key={idx} className="text-[#11111199]">{tag}</p>)}
            </div>
            <button className="underline text-[#6047EC] text-base bg-white">Mark to read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;