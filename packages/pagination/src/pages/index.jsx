import Table from "../components/Table";
import { TABLE } from "../constants";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center bg-stone-500 fond-bold text-lg">
        <h1>Pagination Demo</h1>
      </div>
      <div className="flex justify-center items-center">
        <Table hasPagination={true} type={TABLE.POST_TABLE} />
      </div>
    </div>
  );
};

export default MainPage;
