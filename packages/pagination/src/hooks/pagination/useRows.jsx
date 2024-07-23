import { TABLE } from "../../constants";
import { usePosts } from "../../hooks";
const useRows = async (type) => {
    const { fetchAllPosts } = usePosts();
    const rows = [];

    const fetchPostRows = async() => {
        const posts =  await fetchAllPosts();
        return Array.isArray(posts) ? posts : [];
    }

    switch(type) {
        case TABLE.POST_TABLE : {
            return fetchPostRows();
        }
        default : return rows;
    }
}

export { useRows };