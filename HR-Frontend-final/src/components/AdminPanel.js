import { useEffect, useState } from "react";


export default function AdminPanel() {

  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {

    // Employees API
    fetch("http://127.0.0.1:8000/api/app1/list/")
      .then(res => res.json())
      .then(data => setEmployees(data.data || data))
      .catch(err => console.log(err));

    // Leaves API
    fetch("http://127.0.0.1:8000/api/leave/list/")
      .then(res => res.json())
      .then(data => setLeaves(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div>

      <h2 className="text-xl font-bold mb-2">Employees</h2>
      {employees.map(e => (
        <p key={e.id}>{e.first_name} {e.last_name}</p>
      ))}

      <h2 className="text-xl font-bold mt-6 mb-2">Leaves</h2>
      {leaves.map(l => (
        <p key={l.id}>{l.name} - {l.status}</p>
      ))}

    </div>
  );
}