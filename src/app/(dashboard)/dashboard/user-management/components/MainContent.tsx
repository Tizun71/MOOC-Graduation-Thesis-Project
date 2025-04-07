import { Badge } from "@/components/ui/badge";

export default function MainContent() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">QUẢN LÝ USER</h2>

      <div className="mt-4">
        <Badge variant="outline">Số lượng User: 4</Badge>
      </div>
    </div>
  );
}
