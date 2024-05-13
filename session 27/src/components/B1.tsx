import React from "react";

export default function B1() {
     // render du lieu doi voi function composent
  let fullName: string="minh thu";
  let age: number=25;
  let student ={
    name: "Hoa",
    age: 20,
    address: "Ha Noi",
  }
let numbers:number[]=[1,4,7,9];
let products=[
    {
        name:"iphone 5",
        price: 5000,
        id: 1

    },
    {
        name: "iphone 6",
        price: 6000,
        id: 2
    },
    {
        name: "iphone 7",
        price: 7000,
        id: 3
    },


]
  return (
  <div>

    <p>Bai Tap 1</p>
    <p>Noi dung bai tap</p>
    <p>Hien Thi FullName : {fullName}</p>
    <p>{fullName} nay năm {age} tuoi!</p>
    <p>Ten {student.name}</p>
    <p>tuoi : {student.age}</p>
    <p>Chuyen sang dang JSOM de hien thi</p>
    <p>{JSON.stringify(student)}</p>
    <p>hien thi mang (array)</p>
       <ul>
        {numbers.map((item, index, arr)=>{
            return <li key = {index}>{item}</li>
        })}
       </ul>
       <table>

<thead>
    <th>STT</th>
    <th>Name</th>
    <th>Price</th>
    <th>ID</th>
</thead>
<tbody>
    <tr>
    <td>{products.map((item,index)=>{
        return <tr>{item.id}</tr>
    })}</td>
    <td>{products.map((item,index)=>{
        return <tr>{item.name}</tr>
    })}</td>
    <td>{products.map((item,index)=>{
        return <tr>{item.price}</tr>
    })}</td>
    <td>{products.map((item,index)=>{
        return <tr>{item.id}</tr>
    })}</td>
    </tr>
</tbody>
<tbody>
</tbody>
</table>

  </div>
  )
}
