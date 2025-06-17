import { useEffect, useState } from "react";

const Pagination = () => {

    const [post, setPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const fetchData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await  data.json();
            setPost(jsonData)
        } catch (error) {
            console.log('Error fetching data : ', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const totalPages = Math.ceil(post.length/postsPerPage);
    const lastPost = currentPage*postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = post.slice(firstPost, lastPost);

    const paginate = (pageNumber) => {setCurrentPage(pageNumber)};
    const prevPage = () => setCurrentPage(prev => Math.max(prev -1, 1));
    const NextPage = () => setCurrentPage(prev => Math.min(prev +1, totalPages));


    return (
        <div>
            <h1>Pagination</h1>
            {currentPosts?.length > 0 && currentPosts.map((p) => (
                <div key={p.id}>
                    <h1>{p.title}</h1>
                </div>
            ))}
            
            <div className="pagination">
                <button onClick={prevPage}>Prev</button>
                <button>{currentPage}</button>
                <button onClick={NextPage}>Next</button>
            </div>
        </div>
    )
}

export default Pagination;