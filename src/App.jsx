import { useState } from "react";
export default function Calculator() {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("0");
  const handleNumberClick=(value) => {
    setExpression((prev) => {
      //if i insert a zero in start while appending we ignore it 
      if(prev=="0")
      {
        return value;
      }
      return prev+value;
    });
    
    //we reset result while typing
    setResult("0");
  }
  const handleDecimalClick=() => {
    setExpression((prev) => {
      //first we split the expressions based on operators to get current number
      const parts= prev.split(/[+\-*/]/);
      const currentNumber= parts[parts.length-1];
      if(currentNumber.includes("."))
      {
        return prev;
      }
      //if a expression ends with a operator, add "0." i.e 5+.=5+0.something
      if(/[+\-*/]/.test(prev))
      {
        return prev+"0.";
      }
      return prev + ".";
    })
    setResult("0");
  }
  const handleOperatorClick=(operator) =>{
    setExpression((prev)=>{
      //if expression is empty or zero do nothing
      if(prev=="0") return 0;
      //if i enter two operators back to back conider the new one as the one we need to work with
      if(/[+\-*/]$/.test(prev)) return prev.slice(0,-1) + operator;
      return prev+operator;
    });
    setResult("0");
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-950 rounded-3xl shadow-2xl overflow-hidden">
        {/* Mode Toggle */}
        <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
          <h2 className="text-gray-400 text-sm font-medium">Calculator</h2>
          <button className="px-4 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition">
            Scientific
          </button>
        </div>

        {/* Display Section */}
        <div className="bg-gray-950 px-6 py-8 border-b border-gray-800">
          <div className="text-right">
            <div className="text-gray-500 text-lg h-8 mb-2">
              {/* Expression Display */}
              <span>{expression}</span>
            </div>
            <div className="text-white text-5xl font-light">
              {/* Result Display */}
              <span>{result}</span>
            </div>
          </div>
        </div>

        {/* Button Grid - Basic Mode */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 - Clear, Delete, Percent, Divide */}
            <button className="col-span-1 bg-gray-800 text-orange-400 rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              AC
            </button>
            <button className="col-span-1 bg-gray-800 text-orange-400 rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              ⌫
            </button>
            <button className="col-span-1 bg-gray-800 text-orange-400 rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              %
            </button>
            <button onClick={() => handleOperatorClick("/")}className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              ÷
            </button>

            {/* Row 2 - 7, 8, 9, Multiply */}
            <button onClick={()=> handleNumberClick("7")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              7
            </button>
            <button onClick={()=> handleNumberClick("8")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              8
            </button>
            <button onClick={()=> handleNumberClick("9")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              9
            </button>
            <button onClick={() => handleOperatorClick("*")}className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              ×
            </button>

            {/* Row 3 - 4, 5, 6, Subtract */}
            <button onClick={()=> handleNumberClick("4")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              4
            </button>
            <button onClick={()=> handleNumberClick("5")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              5
            </button>
            <button onClick={()=> handleNumberClick("6")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              6
            </button>
            <button onClick={() => handleOperatorClick("-")}className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              −
            </button>

            {/* Row 4 - 1, 2, 3, Add */}
            <button onClick={()=> handleNumberClick("1")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              1
            </button>
            <button onClick={()=> handleNumberClick("2")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              2
            </button>
            <button onClick={()=> handleNumberClick("3")} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              3
            </button>
            <button onClick={() => handleOperatorClick("+")} className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              +
            </button>

            {/* Row 5 - 0, Decimal, Equals */}
            <button onClick={()=> handleNumberClick("0")} className="col-span-2 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              0
            </button>
            <button onClick={handleDecimalClick} className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              .
            </button>
            <button className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              =
            </button>
          </div>

          {/* Scientific Mode Extension (Hidden by default) */}
          <div className="hidden mt-4 border-t border-gray-800 pt-4">
            <div className="grid grid-cols-5 gap-2">
              {/* Scientific Functions Row 1 */}
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                sin
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                cos
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                tan
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                ln
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                log
              </button>

              {/* Scientific Functions Row 2 */}
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                x²
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                x³
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                xʸ
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                √
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                ∛
              </button>

              {/* Scientific Functions Row 3 */}
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                (
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                )
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                π
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                e
              </button>
              <button className="bg-gray-700 text-blue-400 rounded-xl py-4 text-sm font-medium hover:bg-gray-600 transition">
                !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}