import File from "../icons/File"

const FileStructure = ({fileName,tab}) => {
    return (
        <div style={{marginLeft : `${tab}px` }} className="flex flex-row gap-2">
            <div><File/></div>
            <div>{fileName}</div>
        </div>
    )
}

export default FileStructure;
