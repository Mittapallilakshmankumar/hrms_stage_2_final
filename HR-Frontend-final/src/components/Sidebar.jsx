// import {
//   LayoutDashboard,
//   UserPlus,
//   FileText,
//   ClipboardCheck,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// const menu = [
//   { name: "Home", path: "/home", icon: LayoutDashboard },
//   { name: "Onboarding", path: "/onboarding", icon: UserPlus },
//   { name: "Leave", path: "/leave", icon: FileText },
//   { name: "Attendance", path: "/attendance", icon: ClipboardCheck },
// ];

// export default function Sidebar() {
//   const location = useLocation();

//   return (
//     <div className="w-24 min-h-screen bg-[#082a57] text-white flex flex-col items-center py-6">
//       <h1 className="text-lg font-bold mb-10">HRMS</h1>

//       <div className="flex flex-col gap-8">
//         {menu.map((item) => {
//           const Icon = item.icon;
//           const active = location.pathname === item.path;

//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="flex flex-col items-center text-xs"
//             >
//               <div
//                 className={`p-3 rounded-xl ${
//                   active ? "bg-white/20" : "hover:bg-white/10 text-gray-300"
//                 }`}
//               >
//                 <Icon size={22} />
//               </div>
//               <span className="mt-2">{item.name}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import {
  LayoutDashboard,
  UserPlus,
  FileText,
  ClipboardCheck,
  ClipboardList

} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Home", path: "/home", icon: LayoutDashboard },
  { name: "Onboarding", path: "/home/onboarding", icon: UserPlus },
  { name: "Leave", path: "/home/leave", icon: FileText },
  { name: "Attendance", path: "/home/attendance", icon: ClipboardCheck },
  // New HR Approve Leaves Menu
{ name: "Approve Leaves", path: "/home/leaveapprove", icon: ClipboardList },];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-24 min-h-screen bg-[#082a57] text-white flex flex-col items-center py-6">
    
      <h1 className="text-lg font-bold mb-10">HRMS</h1>

      <div className="flex flex-col gap-8">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center text-xs"
            >
              <div
                className={`p-3 rounded-xl ${
                  active ? "bg-white/20" : "hover:bg-white/10 text-gray-300"
                }`}
              >
                <Icon size={22} />
              </div>
              <span className="mt-2">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}