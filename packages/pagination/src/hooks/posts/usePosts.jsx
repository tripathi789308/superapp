import api from "../../services";

const usePosts = () => {
    const fetchAllPosts = async() => {
        const posts = await api.getPosts();
        return posts;
    }

    return { fetchAllPosts };
}

export {usePosts};