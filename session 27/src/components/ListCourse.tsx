import React from 'react'

export default function ListCourse() {
  let subjects: string[] = ["HTML","CSS","Javascript", "React"];
  return (
    <div>
      Bai1
      <h2>Danh sach khoa hoc</h2>
      <ul>
        {subjects.map((item, index)=>{
          return <li key = {index}>{index+1}.{item}</li>
        })}
      </ul>
    </div>
  )
}
