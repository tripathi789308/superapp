import { TABLE } from "../../constants";
import api from "../../services";

const useColumns = (type) => {
    let columns = [];

    const fetchPostColumns = () => {
        return api.getPostsColumns();
    }

    switch(type) {
        case TABLE.POST_TABLE : columns = fetchPostColumns(); break;
        default : columns = [];
    }

    return columns;
}

export { useColumns } ;