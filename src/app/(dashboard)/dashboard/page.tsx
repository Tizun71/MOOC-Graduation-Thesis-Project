import React from "react";
import { BarChart, Users, FileText, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserLineChart } from "./line-chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Xin chào, Admin!</h1>
        <Button className="bg-blue-600 text-white">
          Tải báo cáo kinh doanh trong tháng
        </Button>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1: Users */}
        <Card className="flex items-center justify-between p-4 bg-indigo-600 text-white rounded-lg">
          <div>
            <h3 className="text-lg font-semibold">SỐ LƯỢNG USER</h3>
            <p className="text-2xl flex items-center justify-center">1,245</p>
          </div>
          <Users size={40} />
        </Card>

        {/* Card 2: Sales */}
        <Card className="flex items-center justify-between p-4 bg-green-600 text-white rounded-lg">
          <div>
            <h3 className="text-lg font-semibold">TỔNG LỢI NHUẬN</h3>
            <p className="text-2xl flex items-center justify-center">$5,200</p>
          </div>
          <DollarSign size={40} />
        </Card>

        {/* Card 3: Documents */}
        <Card className="flex items-center justify-between p-4 bg-yellow-600 text-white rounded-lg">
          <div>
            <h3 className="text-lg font-semibold">SỐ LƯỢNG KHÓA HỌC</h3>
            <p className="text-2xl flex items-center justify-center">30</p>
          </div>
          <FileText size={40} />
        </Card>

        {/* Card 4: Analytics */}
        <Card className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg">
          <div>
            <h3 className="text-lg font-semibold">PHÂN TÍCH</h3>
            <p className="text-2xl flex items-center justify-center">
              XU HƯỚNG TĂNG
            </p>
          </div>
          <BarChart size={40} />
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Lợi Nhuận Theo Tháng</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Placeholder for chart or analytics content */}
          <p className="text-center text-gray-500">
            Biểu đồ lợi nhuận và chi tiêu
          </p>
          <UserLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
