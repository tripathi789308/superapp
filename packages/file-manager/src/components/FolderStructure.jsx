import Folder from "../icons/Folder";

const FolderStructure = ({folderName,tab}) => {
    return (
        <div style={{marginLeft : `${tab}px` }} className="flex flex-row gap-2">
            <div ><Folder/></div>
            <div>{folderName}</div>
        </div>
    );
}

export default FolderStructure;