import React, { useEffect, useState } from "react";
import './App.css';
import Search from "./Search";

const Students = () => {
    const [loading, setLoading] = useState();
    const [student, setStudent] = useState();
    const [filteredResult, setFilteredResult] = useState([]);
    const [filter] = useState("");

    async function fetchStudents() {
        const url = "https://api.hatchways.io/assessment/students";
        const response = await fetch(url);
        const data = await response.json();
        setStudent(data.students)

    };

    const search = (e) => {
        let filteredArr = [...student];
        filteredArr = filteredArr.filter(v => {
            if (v.firstName.toLowerCase().includes(e.target.value) || v.lastName.toLowerCase().includes(e.target.value)) {
                return v;
            }
        });
        setFilteredResult(filteredArr)
        console.log(filter, filteredArr)
    }

    useEffect(() => {
        fetchStudents();
        setLoading(false);
    }, [])
    if (loading) {
        return <div>loading...</div>;
    }

    if (!student) {
        return <div>didn't find student</div>
    }
    const renderStudents = () => {
        let arr = [];
        if (filteredResult.length > 0) {
            arr = [...filteredResult];
        } else {
            arr = [...student];
        }
        return (
            <div>
                {arr.map(students => (
                    <div key={students.id} className="list-container">
                        <img src={students.pic} alt="student" />
                        <div className="list">
                            <h1>{students.firstName} {students.lastName}</h1>
                            <div className="list-details">
                                <div>Email: {students.email}</div>
                                <div>Company: {students.company}</div>
                                <div>Skill: {students.skill}</div>
                                <div>Average: {eval(students.grades.join('+')) / students.grades.length}%</div>
                                <Search content={students.grades}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className="container">
          <div className="search_wrapper">
            <input type="text" id="myInput" placeholder="Search by name" onChange={(e) => search(e)} />
          </div>
          {renderStudents()}
        </div>
    );

}

export default Students;