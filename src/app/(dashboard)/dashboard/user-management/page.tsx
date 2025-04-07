import PaginationControl from "@/app/components/dashboard/PaginationControl";
import MainContent from "./components/MainContent";
import TopControlBar from "./components/TopControlBar";
import UserTable from "./components/UserTable";

export default function UserManagement() {
  return (
    <div className="min-h-screen bg-white">
      <MainContent />
      <TopControlBar />
      <div className="px-6">
        <UserTable />
      </div>
      <div className="p-6 flex justify-between">
        <PaginationControl />
      </div>
    </div>
  );
}
