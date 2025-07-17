import { useNavigate } from "react-router-dom";
import { Repeat, MessageSquare } from "lucide-react";

const AdminRequestPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => navigate("/admin/refund")}
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Repeat className="w-8 h-8 mr-4 text-teal-600" />
          <span className="text-lg font-semibold text-gray-700">Refund / Exchange</span>
        </button>
        <button
          onClick={() => navigate("/admin/customer-queries")}
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <MessageSquare className="w-8 h-8 mr-4 text-teal-600" />
          <span className="text-lg font-semibold text-gray-700">Customer Queries</span>
        </button>
      </div>
    </div>
  );
};

export default AdminRequestPage;
