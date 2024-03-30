
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTracker() {
  
const {state, totalExpenses,remainBudget,dispatch}= useBudget()

const percentage=+((totalExpenses/state.budget)*100).toFixed(2)
//console.log(percentage)
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
           <CircularProgressbar 
           value={percentage}
           styles={buildStyles({
            pathColor:percentage===100 ? '#DC2626':'#3b82f6',
            trailColor:'#f0dedbd7',
            textSize:6,
            textColor:percentage===100 ? '#DC2626':'#3b82f6',
           })}
           text={`${percentage}% Gastado`}
           />
        </div>
        
        <div className="flex flex-col justify-center items-center gap-8">
            <button className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
            onClick={()=>dispatch({type:'reseat-app'})}
            >
                Resetear App
            </button>
            <AmountDisplay label="Presupuesto" amount={state.budget} />
            <AmountDisplay label="Disponible" amount={remainBudget} />
            <AmountDisplay label="Gastado" amount={totalExpenses} />
        </div>
    </div>
  )
}
