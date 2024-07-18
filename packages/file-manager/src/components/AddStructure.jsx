const AddStructure = ({ tab, addFile, addFolder, parentID }) => {
  const handleAddFile = () => {
    const fileName = prompt("Enter file name");
    if (fileName.trim() !== "") addFile(fileName.trim(), parentID);
  };
  const handleAddFolder = () => {
    const folderName = prompt("Enter folder name");
    if (folderName.trim() !== "") addFolder(folderName.trim(), parentID);
  };
  return (
    <div
      style={{ marginLeft: `${tab}px` }}
      className="flex flex-row mx-6 gap-2 "
    >
      <div className="w-24 px-2">
        <button className="bg-gray-300 w-full" onClick={handleAddFile}>
          + File
        </button>
      </div>
      <div className="w-24 px-2">
        <button className="bg-gray-300 w-full" onClick={handleAddFolder}>
          + Folder
        </button>
      </div>
    </div>
  );
};

export default AddStructure;
