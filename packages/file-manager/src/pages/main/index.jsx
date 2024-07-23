import React from "react";
import useBuildTree from "../../hooks/useBuildTree";
import Tree from "../../components/Tree";

const MainPage = () => {
  const { tree, addFile, addFolder } = useBuildTree();
  return (
    <div className="w-full bg-transparent p-2 h-1/2">
      <h1 className="bg-stone-500 flex justify-center items-center font-bold text-lg">
        File Explorer
      </h1>
      <div className="flex flex-col bg-transparent w-full float-left px-2">
        <Tree tree={tree} addFile={addFile} addFolder={addFolder} tab={0} />
      </div>
    </div>
  );
};

export default MainPage;
