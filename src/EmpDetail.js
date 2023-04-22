import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function EmpDetail(){
    const {empid} = useParams()
    const[empdata, setEmpdata] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/employee/"+empid).then((res)=>{
            return res.json()
        }).then((resp)=>{
            setEmpdata(resp)
        }).then((err)=>{
            console.log(err.message)
        })

    }, []);
        
    

    return(
        <div>
            <div className="card">
                <div className="card-title">
            <h3>{empdata.name}'s Details</h3>
            </div>
            <hr></hr>
            <div className="card-body">
            {empdata && 
            <div>
            <h5>Name: {empdata.name}</h5>
            <h5>Contact: {empdata.phone}</h5>
            <h5>Email: {empdata.email}</h5>
            <Link className="btn btn-success" to="/">Back to Listing</Link>
            </div>
            }
            </div>
        </div>
    </div>
    )
}