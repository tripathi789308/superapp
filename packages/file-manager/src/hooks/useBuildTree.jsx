import {useEffect, useState} from "react";

const useBuildTree = () => {
    const [tree , setTree] = useState([]);
    const loadTree = () => {
        setTree(([{ id : generateID() ,itemType : "add"}]));
    }

    const generateID = () => {
        return new Date().getTime().toString();
    }

    useEffect(()=>{
        loadTree();
    },[]);

    const addFileToTree = (fileName,parentID,localTree) => {
        for(const item of localTree){
            if(item.itemType === "folder" && item.id === parentID){
                item.children = [ ...(item?.children ?? []), { id : generateID() , itemType : "file" , name : fileName}];
            }
            if(item.itemType === "folder") addFileToTree(fileName,parentID,item.children ?? []);
        }
    }
    const addFolderToTree = (folderName,parentID,localTree) => {
        for(const item of localTree){
            if(item.itemType === "folder" && item.id === parentID){
                item.children = [ ...(item?.children ?? []), { id : generateID() , itemType : "folder", name : folderName, children : []}];
            }
            if(item.itemType === "folder") addFolderToTree(folderName,parentID,item.children ?? []);
        }
    }

    const addFile = (fileName,parentID) => {
        if(!parentID){
            setTree((prev) => ([...prev, { id : generateID() ,name : fileName, itemType : "file"}]));
            return;
        }
        const updatedTree = tree;
        addFileToTree(fileName,parentID,updatedTree);
        setTree([...updatedTree]);
    }

    const addFolder = (folderName, parentID) => {
        if(!parentID){
            setTree((prev) => ([...prev, { id : generateID() ,name : folderName, itemType : "folder",children : []}]));
            return;
        }
        const updatedTree = tree;
        addFolderToTree(folderName,parentID,updatedTree);
        setTree([...updatedTree]);
    }

    return { tree,addFile,addFolder } ;
}
export default useBuildTree;