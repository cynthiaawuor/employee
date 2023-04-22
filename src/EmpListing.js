import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function EmpListing() {
  const [empdata, setEmpdata] = useState(null);
  const navigate = useNavigate()

function editEmp(id){
    navigate("/employee/edit/"+id)
}
  function removeEmp(id){
    if(window.confirm("Do you want to delete this employee?")){
    fetch("http://localhost:4000/employee/"+id, {
        method: "DELETE"
        
    }).then((res)=>{
        alert("Employee Removed Successfully")
        window.location.reload()
    }).catch((err)=>{
        console.log(err.message)
    })
    
    navigate("/")
}

  }

  function empDetails(id){
    navigate("/employee/detail/"+id)
  }
  useEffect(() => {
    fetch("http://localhost:4000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h3>Employee Listing</h3>
        </div>
        <div className="card-body">
          <div className="addBtn">
            <Link className="btn btn-success" to="employee/create">
              Create New Employee
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>
                      <a onClick={()=>editEmp(emp.id)} className="btn btn-success">Edit</a>
                      <a onClick={()=>removeEmp(emp.id)} className="btn btn-danger">Remove</a>
                      <a onClick={()=>empDetails(emp.id)} className="btn btn-primary">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
