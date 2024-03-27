import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { ChangeEvent, useState } from "react";
import { DraftExpense, Value } from "../types";



export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount:0,
    expenseName:'',
    category:'',
    date:new Date()
  })
  
  
  const handleChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>)=>{
  const {name,value}=e.target
  const isMountField=['amount'].includes(name)
  //console.log(isMountField)
  setExpense({
    ...expense, 
    [name]:isMountField ? +value:value 
  })
  }
  
  const handleChangeDate=(value:Value)=>{
    //console.log(value)
    setExpense({
      ...expense,
      date:value
    })
  }
  return (
    <form className="space-y-5">
        <div className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
            Nuevo Gasto
        </div>
        <div className="flex flex-col gap-2">
            <label
             htmlFor="expenseName"
             className="text-xl"
             >
               Nombre Gasto 
            </label>
            <input type="text"
             id="expenseName"
             placeholder="Añade el Nombre del Gasto"
             className="bg-slate-100 p-2"
             name="expenseName"
             value={expense.expenseName}
             onChange={handleChange}
             />
        </div>
        
        <div className="flex flex-col gap-2">
            <label
             htmlFor="amount"
             className="text-xl"
             >
               Cantidad
            </label>
            <input type="number"
             id="amount"
             placeholder="Añade la cantidad del Gasto:ej. 300"
             className="bg-slate-100 p-2"
             name="amount"
             value={expense.amount}
             onChange={handleChange}
              /> 
        </div>
        
        <div className="flex flex-col gap-2">
            <label
             htmlFor="category"
             className="text-xl"
             >
               Categoria 
            </label>
            <select
             id="category"
            
             className="bg-slate-100 p-2"
             name="category"
             value={expense.category}
             onChange={handleChange}
              >
               <option value=""> -- Seleecione --</option>
               {categories.map(category=>(
              <option
              key={category.id}
               value={category.id}>
                {category.name}
              </option>  
               ))}
              </select>
        </div>
        
        <div className="flex flex-col gap-2">
            <label
             htmlFor="amount"
             className="text-xl"
             >
               Fecha Gasto
            </label>
<DatePicker
className="bg-slate-100 p-2 border-8"
value={expense.date}
onChange={handleChangeDate}
 />
        </div>
        
        <input type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase
        font-bold rounded-lg"
        value="Registrar Gasto"
         />
    </form>
  )
}
