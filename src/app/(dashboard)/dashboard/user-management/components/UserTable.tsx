import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const users = [
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    role: "Admin",
    status: "ACTIVE",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    role: "Admin",
    status: "ACTIVE",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    role: "Admin",
    status: "ACTIVE",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    role: "Admin",
    status: "ACTIVE",
    dateAdded: "July 4, 2022",
  },
  {
    name: "Florence Shaw",
    email: "florence@untitledui.com",
    role: "Admin",
    status: "ACTIVE",
    dateAdded: "July 4, 2022",
  },

  // Thêm các người dùng khác tương tự
];

export default function UserTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Tên Người Dùng</TableHead>
          <TableHead>Quyền Hạn</TableHead>
          <TableHead></TableHead>
          <TableHead>Trạng thái</TableHead>
          <TableHead>Ngày tạo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index} className="hover:shadow-md mt-1">
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="default">{user.role}</Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600"
                >
                  Khóa tài khoản
                </Button>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  Thay đổi quyền
                </Button>

                <Button
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  Đổi mật khẩu
                </Button>
              </div>
            </TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>{user.dateAdded}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
