

export default function BudgetSummary({income, expenses}){
    return(
        <div className= "grid grid-cols-2 content-start mt-9 gap-10 text-2xl font-bold">
            <div className="text-white bg-green-500 p-10 rounded-2xl">
                <div className="text-center">
                    <h2>Budget</h2>
                    <h3>${income}</h3>
                </div>
            </div>
            <div className="text-white content-center bg-red-500 p-10 rounded-2xl">
                <div className="text-center">
                    <h2>Total Spent</h2>
                    <h3>${expenses}</h3>
                </div>
            </div>
        </div>
    )
}