// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import HrApprovalTable from "./HrApprovalTable";


// export default function ApproveLeave() {

//   const [isAdminLogged, setIsAdminLogged] = useState(
//     sessionStorage.getItem("adminAuth") === "true"
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   // Reset login if user switches tab / opens another site
//   useEffect(() => {

//     const handleVisibilityChange = () => {

//       if (document.hidden) {

//         sessionStorage.removeItem("adminAuth");

//         setIsAdminLogged(false);

//       }

//     };

//     document.addEventListener(
//       "visibilitychange",
//       handleVisibilityChange
//     );

//     return () => {

//       document.removeEventListener(
//         "visibilitychange",
//         handleVisibilityChange
//       );

//     };

//   }, []);


//   const handleLogin = (e) => {

//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "1234") {

//       sessionStorage.setItem("adminAuth", "true");

//       setIsAdminLogged(true);

//     } else {

//       alert("Invalid Admin Credentials");

//     }

//   };


//   return (

//     <div className="flex">

//       {/* Sidebar always visible */}
//       <Sidebar />

//       <div className="flex-1 p-6 bg-gray-100 min-h-screen">

//         {!isAdminLogged ? (

//           <div className="flex justify-center items-center h-full">

//             <form
//               onSubmit={handleLogin}
//               className="bg-white shadow-md rounded-xl p-8 w-[350px]"
//             >

//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Admin Login Required
//               </h2>

//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full mb-4 p-2 border rounded"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="w-full bg-[#082a57] text-white py-2 rounded">
//                 Login
//               </button>

//             </form>

//           </div>

//         ) : (

//          

//   {/* 🔹 LEAVE APPROVAL (already) */}
//   <HrApprovalTable />

//  

// 

//         )}

//       </div>

//     </div>

//   );

// }


import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HrApprovalTable from "./HrApprovalTable";
import EmployeesList from "./EmployeesList";
import CandidatesList from "./CandidatesList";


export default function ApproveLeave() {

  const [isAdminLogged, setIsAdminLogged] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Reset login if user switches tab / opens another site
  useEffect(() => {

    const handleVisibilityChange = () => {

      if (document.hidden) {

        sessionStorage.removeItem("adminAuth");

        setIsAdminLogged(false);

      }

    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

    };

  }, []);


  const handleLogin = (e) => {

    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {

      sessionStorage.setItem("adminAuth", "true");

      setIsAdminLogged(true);

    } else {

      alert("Invalid Admin Credentials");

    }

  };


  return (

    <div className="flex">

      {/* Sidebar always visible */}
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        {!isAdminLogged ? (

          <div className="flex justify-center items-center h-full">

            <form
              onSubmit={handleLogin}
              className="bg-white shadow-md rounded-xl p-8 w-[350px]"
            >

              <h2 className="text-xl font-semibold mb-6 text-center">
                Admin Login Required
              </h2>

              <input
                type="email"
                placeholder="Admin Email"
                className="w-full mb-4 p-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 p-2 border rounded"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="w-full bg-[#082a57] text-white py-2 rounded">
                Login
              </button>

            </form>

          </div>

        ) : (

          <div className="space-y-6">

  {/* 🔹 LEAVE APPROVAL (already) */}
  <HrApprovalTable />

  {/* 🔹 EMPLOYEES */}
  <EmployeesList />

  {/* 🔹 ONBOARDING */}
  <CandidatesList />

</div>

        )}

      </div>

    </div>

  );

}

