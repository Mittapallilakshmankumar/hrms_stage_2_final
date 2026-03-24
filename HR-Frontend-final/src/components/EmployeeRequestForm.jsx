// import { useState } from "react";

// export default function EmployeeRequestForm({ onAddRequest }) {
//   const [formData, setFormData] = useState({
//     employeeName: "",
//     employeeId: "",
//     department: "",
//     leaveType: "Sick Leave",
//     fromDate: "",
//     toDate: "",
//     reason: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newRequest = {
//       id: Date.now(),
//       ...formData,
//       status: "Pending",
//     };

//     onAddRequest(newRequest);

//     setFormData({
//       employeeName: "",
//       employeeId: "",
//       department: "",
//       leaveType: "Sick Leave",
//       fromDate: "",
//       toDate: "",
//       reason: "",
//     });
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Apply Leave Request
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-4"
//       >
//         <input
//           type="text"
//           name="employeeName"
//           placeholder="Employee Name"
//           value={formData.employeeName}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//           required
//         />

//         <input
//           type="text"
//           name="employeeId"
//           placeholder="Employee ID"
//           value={formData.employeeId}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//           required
//         />

//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={formData.department}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//           required
//         />

//         <select
//           name="leaveType"
//           value={formData.leaveType}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//         >
//           <option>Sick Leave</option>
//           <option>Casual Leave</option>
//           <option>Earned Leave</option>
//           <option>Permission</option>
//         </select>

//         <input
//           type="date"
//           name="fromDate"
//           value={formData.fromDate}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//           required
//         />

//         <input
//           type="date"
//           name="toDate"
//           value={formData.toDate}
//           onChange={handleChange}
//           className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
//           required
//         />

//         <textarea
//           name="reason"
//           placeholder="Reason"
//           value={formData.reason}
//           onChange={handleChange}
//           rows="4"
//           className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none"
//           required
//         />

//         <button
//           type="submit"
//           className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition"
//         >
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";

export default function EmployeeRequestForm({ onAddRequest }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    leaveType: "Sick Leave",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: formData.employeeName,
    employee_id: formData.employeeId,
    department: formData.department,
    leave_type: formData.leaveType,
    from_date: formData.fromDate,
    to_date: formData.toDate,
    reason: formData.reason,
  };

  await fetch("http://127.0.0.1:8000/api/leave/apply/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("Leave Applied Successfully ✅");
    onAddRequest(); 
  setFormData({
    employeeName: "",
    employeeId: "",
    department: "",
    leaveType: "Sick Leave",
    fromDate: "",
    toDate: "",
    reason: "",
  });
};

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Apply Leave Request
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={formData.employeeName}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
        >
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Earned Leave</option>
          <option>Permission</option>
        </select>

        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none"
          required
        />

        <textarea
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none"
          required
        />

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}