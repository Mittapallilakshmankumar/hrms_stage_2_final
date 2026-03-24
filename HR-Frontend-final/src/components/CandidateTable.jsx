

// const CandidateTable = ({ candidates }) => {
//   return (
//     <div className="bg-white rounded shadow p-4">

//       {/* Table Header */}
//       <div className="grid grid-cols-10 font-semibold text-sm border-b pb-2">
//         <div>First Name</div>
//         <div>Last Name</div>
//         <div>Email ID</div>
//         <div>Official Email</div>
//         <div>Status</div>
//         <div>Department</div>
//         <div>Source of Hire</div>
//         <div>UAN Number</div>
//         <div>PAN Card</div>
//         <div>Aadhaar</div>
//       </div>

//       {/* Table Data */}

//       {candidates && candidates.length > 0 ? (
//         candidates.map((c, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-10 text-sm border-b py-2"
//           >
//             <div>{c.firstName}</div>
//             <div>{c.lastName}</div>
//             <div>{c.email}</div>
//             <div>{c.officialEmail}</div>
//             <div>{c.status}</div>
//             <div>{c.department}</div>
//             <div>{c.source}</div>
//             <div>{c.uan}</div>
//             <div>{c.pan}</div>
//             <div>{c.aadhaar}</div>
//           </div>
//         ))
//       ) : (
//         <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//           <p className="text-lg">No records found</p>
//         </div>
//       )}

//     </div>
//   );
// };

// export default CandidateTable;
import { useEffect, useState } from "react";

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);

  // 🔥 GET METHOD HERE
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/app1/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data); // debug
        setCandidates(data.data || data); // important
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">

      {/* Header */}
      <div className="grid grid-cols-10 font-semibold text-sm border-b pb-2">
        <div>First Name</div>
        <div>Last Name</div>
        <div>Email ID</div>
        <div>Official Email</div>
        <div>Status</div>
        <div>Department</div>
        <div>Source of Hire</div>
        <div>UAN Number</div>
        <div>PAN Card</div>
        <div>Aadhaar</div>
      </div>

      {/* Data */}
      {candidates && candidates.length > 0 ? (
        candidates.map((c, index) => (
          <div
            key={index}
            className="grid grid-cols-10 text-sm border-b py-2"
          >
            <div>{c.first_name}</div>
            <div>{c.last_name}</div>
            <div>{c.email}</div>
            <div>{c.official_email}</div>
            <div>{c.status}</div>
            <div>{c.department}</div>
            <div>{c.source}</div>
            <div>{c.uan}</div>
            <div>{c.pan}</div>
            <div>{c.aadhaar}</div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <p className="text-lg">No records found</p>
        </div>
      )}

    </div>
  );
};

export default CandidateTable;