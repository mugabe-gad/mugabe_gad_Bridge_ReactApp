function Card() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8">
      <div className="p-8">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800">
           Iam Mugabe Gad
          </h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            Using git since am not used to that
          </span>
        </div>
        
        <p className="mt-4 text-gray-600">
         This exercise is kindaaa hard for me bruvvv
        </p>
        
        <div className="mt-6 flex justify-end">
          <span className="text-sm text-gray-500">
            March 31 2026
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card