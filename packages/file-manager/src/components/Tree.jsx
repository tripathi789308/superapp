import AddStructure from "./AddStructure";
import FileStructure from "./FileStructure";
import FolderStructure from "./FolderStructure";

const Tree = ({ tree, addFile, addFolder, tab, parentID }) => {
  if (typeof tree === "object" && Array.isArray(tree)) {
    return tree.map((item) => (
      <Tree
        key={item.id}
        tab={tab}
        tree={item}
        addFile={addFile}
        addFolder={addFolder}
      />
    ));
  }
  if (tree?.itemType && tree.itemType === "add")
    return (
      <AddStructure
        key={tree.id}
        tab={tab + 20}
        addFile={addFile}
        addFolder={addFolder}
        parentID={parentID}
      />
    );
  if (tree?.itemType && tree.itemType === "file")
    return <FileStructure key={tree.id} fileName={tree.name} tab={tab + 20} />;
  if (tree?.itemType && tree.itemType === "folder")
    return (
      <>
        <FolderStructure folderName={tree.name} tab={tab + 20} />
        <AddStructure
          tab={tab + 50}
          addFile={addFile}
          addFolder={addFolder}
          parentID={tree.id}
        />
        {tree?.children && (
          <Tree
            key={tree.id}
            tree={tree?.children}
            addFile={addFile}
            addFolder={addFolder}
            tab={tab + 60}
            parentID={tree.id}
          />
        )}
      </>
    );
};

export default Tree;
