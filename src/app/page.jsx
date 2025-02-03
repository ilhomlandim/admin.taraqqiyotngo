import ProtectedRoute from "@/components/ProdectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Dashboardga hush kelibsiz 🎉</h1>
      </div>
    </ProtectedRoute>
  );
}