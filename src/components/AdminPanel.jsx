import React from "react";
import CommentModeration from "./CommentModeration";

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage your content here.</p>
      <CommentModeration />
    </div>
  );
};

export default AdminPanel;
