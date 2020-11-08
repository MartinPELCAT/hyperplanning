import { useAuthenticatedUser } from "hooks/useAuthenticatedUser";
import React from "react";

export default function Header() {
  const { firstName, lastName } = useAuthenticatedUser();
  return (
    <div className="bg-white shadow-md flex content-end px-4">
      <div className="text-gray-900 flex-1 text-3xl py-2">HyperPlanning</div>
      <div className="py-3 my-auto">
        <span>
          {firstName} {lastName}
        </span>
      </div>
    </div>
  );
}
