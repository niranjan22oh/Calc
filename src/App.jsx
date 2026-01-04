export default function Calculator() {
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
              <span>0</span>
            </div>
            <div className="text-white text-5xl font-light">
              {/* Result Display */}
              <span>0</span>
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
            <button className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              ÷
            </button>

            {/* Row 2 - 7, 8, 9, Multiply */}
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              7
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              8
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              9
            </button>
            <button className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              ×
            </button>

            {/* Row 3 - 4, 5, 6, Subtract */}
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              4
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              5
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              6
            </button>
            <button className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              −
            </button>

            {/* Row 4 - 1, 2, 3, Add */}
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              1
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              2
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              3
            </button>
            <button className="col-span-1 bg-orange-500 text-white rounded-2xl py-6 text-xl font-medium hover:bg-orange-600 transition">
              +
            </button>

            {/* Row 5 - 0, Decimal, Equals */}
            <button className="col-span-2 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
              0
            </button>
            <button className="col-span-1 bg-gray-800 text-white rounded-2xl py-6 text-xl font-medium hover:bg-gray-700 transition">
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