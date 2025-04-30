import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-xl font-bold">Logo do App</h1>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
