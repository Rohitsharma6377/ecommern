import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./Header";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 flex bg-muted/40 p- md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
