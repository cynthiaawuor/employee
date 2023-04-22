import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function EmpCreate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const [validate, setValidate]=useState(false)

  function handlesubmit(e) {
    e.preventDefault()
    const empdata = {name,email,phone,isActive}

    fetch("http://localhost:4000/employee",{
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(empdata)
}).then(res=>{
    alert("Saved Successfully")
    navigate("/")
}).catch((err)=>{
    console.log(err.message)
})
  }
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handlesubmit}>
            <div className="card" style={{ "textAlign": "left" }}>
              <div className="card-title">
                <h5>Create New Employee</h5>
              </div>
              <div className="card-body">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      disabled="disabled"
                      className="form-control"
                      type="text"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input required
                      value={email}
                      onMouseDown={(e)=>setValidate(true)}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      type="text"
                    ></input>
                    {email.length == 0 && validate && <span className="text-danger">Enter Email</span>}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                      className="form-check-input"
                      type="checkbox"
                    ></input>
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Save
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
