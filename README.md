# 🛡️ DefenCore Scientist Management Portal

A full-stack internal portal for role-based management of scientists and administrators at DRDO.

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Auth**: JWT

## 🔐 Roles & Access

- **Supervisor**:  
  - Create & manage groups  
  - Add admins and assign them groups  
  - Add scientists and assign them to groups  
  - Full access across the organization

- **Admin**:  
  - Manage scientists within their assigned group only  
  - Cannot access or modify data outside their group

## 🧭 App Structure

- **Login with JWT** → Redirects based on role  
- **Dashboards**:  
  - `/supervisor-dashboard` – full control  
  - `/admin-dashboard` – limited to own group  
- **Sidebar Actions** (Supervisor only):  
  - Add Group  
  - Add Admin  
  - Add Scientist  
  - Reassign Admin to a Group  

## 🔒 Highlights

- Strict role-based access (frontend + backend)  
- Group-based scientist mapping  
- One scientist → one group  
- Supervisor has organization-wide visibility

## 📦 Status

- ✅ Fully functional backend with JWT auth  
- ✅ Role-based protected routes and views  
- ✅ Clean UI for both roles  
- ✅ Ready for deployment
