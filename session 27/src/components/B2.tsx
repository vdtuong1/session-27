import React from 'react'
class Calculation {
  add = (a:number, b:number): number=>{
    return a+b;
  }
  subtract = (a:number, b:number): number=>{
    return a-b;
  }
  multiply = (a: number, b:number): number=>{
    return a*b;
  }
  divide = (a:number, b:number): numbe=>{
    return a/b;
  }
}
export default function Calculation() {
  const a: number=10;
  const b: number=20;

  const calculation = new Calculation();
  return (
<div>
  Bai2
  <h2>Danh Sach Ket Qua</h2>
   <p>{a} + {b} = {calculation.add(a, b)}</p>
   <p>{a} - {b} = {calculation.subtract(a, b)}</p>
   <p>{a} * {b} = {calculation.multiply(a, b)}</p>
   <p>{a} / {b} = {calculation.divide(a, b)}</p>
</div>
  )
}