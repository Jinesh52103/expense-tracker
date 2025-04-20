import {useState} from "react"

export default function CategorySelect({ value, onChange }) {
    const [name, setName] = useState('')
    const [categories, setCategories] = useState(["Food", "Transport", "Utilities", "Other"])


    function addCategory(){
        setCategories((prev) => {
            const lowerCase = prev.map(cat => cat.toLowerCase())
            const alreadyExists = lowerCase.includes(name.toLowerCase())

            if(alreadyExists){
                alert("Category Exists")
                return prev;
            }else if(name.trim() === ""){
                alert("Type a Category")
                return prev;
            }else{
                return [...prev, name.charAt(0).toUpperCase() + name.slice(1)]
                
            }
        })
        setName("")
    }
  
  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-1">Category</label>
      <select id="category" value={value} onChange={onChange} className="w-full p-2 border border-purple-400 rounded-md">
        <option>Select Category</option>
        {categories.map(cat => (
          <div>
          <option key={cat} value={cat}>{cat}</option>
          </div>
        ))}
      </select>

      <label htmlFor="addCategory" className="block text-sm font-bold text-gray-700 mb-1 mt-4">
                Add Category
            </label>
            <input
                type="text"
                id="addCategory"
                className="w-full p-2 border border-purple-400 rounded-md"
                placeholder="e.g. Rent"
                onChange={e => setName(e.target.value)}
            />
        <button 
        className="text-white bg-purple-700 hover:bg-purple-800 w-full p-2 border border-purple-400 rounded-md mt-4"
        onClick={addCategory}
        >Add Category</button>    
        
    </div>
  );
}
