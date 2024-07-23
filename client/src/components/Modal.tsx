// import React, { useRef } from "react";
// import { useAppDispatch } from "../store/hooks";
// import {
//   setStockDataToken,
//   setStockNameToken,
// } from "../features/stockDataSlice";
// import {
//   useGetStockDataQuery,
//   useLazyGetStockDataQuery,
// } from "../services/stockData";

// const Modal = ({ isOpen, onClose }: any) => {
//   const [trigger, { data, isFetching, error }] = useLazyGetStockDataQuery();
//   const dispatch = useAppDispatch();

//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     const inputValue = inputRef.current?.value;
//     if (inputValue) {
//       dispatch(setStockNameToken(inputValue));
//       const result = await trigger(inputValue);
//       if (result.data) {
//         dispatch(setStockDataToken(result.data.data));
//       } else if (result.error) {
//         console.error("Failed to fetch stock data:", result.error);
//       }
//     }
//     onClose();
//   };

//   if (!isOpen) return null;
//   return (
//     <>
//       <div
//         className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10 ${
//           isOpen ? "block" : "hidden"
//         }`}
//         onClick={onClose}
//       />
//       <div className="fixed z-20 inset-0 flex items-center justify-center">
//         <div
//           className={`bg-white rounded-lg mx-4 ${isOpen ? "shadow-2xl" : ""}`}
//         >
//           <div className="h-full flex flex-col">
//             <div className="flex justify-between p-3">
//               <div className="text-xl font-bold">Title</div>
//               <button className="text-xl font-bold" onClick={onClose}>
//                 &times;
//               </button>
//             </div>

//             <div className="px-3 py-6 w-full flex justify-between items-center">
//               <span className="mr-4 font-semibold text-lg">Stock:</span>
//               <select
//                 className="border-2 border-solid-grey p-3"
//                 ref={inputRef}
//                 defaultValue="Bitcoin" // Set a default empty value
//               >
//                 <option value="" disabled hidden>
//                   Select a stock
//                 </option>{" "}
//                 {/* Placeholder */}
//                 <option value="Bitcoin">Bitcoin</option>
//                 <option value="Ethereum">Ethereum</option>
//                 <option value="Tether">Tether</option>
//                 <option value="BNB">BNB</option>
//                 <option value="Solana">Solana</option>
//                 <option value="USD Coin">USD Coin</option>
//                 <option value="XRP">XRP</option>
//                 <option value="Toncoin">Toncoin</option>
//                 <option value="Dogecoin">Dogecoin</option>
//                 <option value="Cardano">Cardano</option>
//               </select>
//             </div>

//             <div className="flex justify-between p-3 border-t-2 space-x-4">
//               <button
//                 type="submit"
//                 className="bg-teal-600 w-full text-white px-12 py-2 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
//                 onClick={handleSubmit}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;


import React, { useRef } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  setStockDataToken,
  setStockNameToken,
} from "../features/stockDataSlice";
import {
  useGetStockDataQuery,
  useLazyGetStockDataQuery,
} from "../services/stockData";

const Modal = ({ isOpen, onClose }: any) => {
  const [trigger, { data, isFetching, error }] = useLazyGetStockDataQuery();
  const dispatch = useAppDispatch();

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const selectedValue = selectRef.current?.value;
    if (selectedValue) {
      dispatch(setStockNameToken(selectedValue));
      const result = await trigger(selectedValue);
      if (result.data) {
        dispatch(setStockDataToken(result.data.data));
      } else if (result.error) {
        console.error("Failed to fetch stock data:", result.error);
      }
    }
    onClose();
  };

  if (!isOpen) return null;
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      />
      <div className="fixed z-20 inset-0 flex items-center justify-center">
        <div
          className={`bg-white rounded-lg mx-4 ${isOpen ? "shadow-2xl" : ""}`}
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between p-3">
              <div className="text-xl font-bold">Title</div>
              <button className="text-xl font-bold" onClick={onClose}>
                &times;
              </button>
            </div>

            <div className="px-3 py-6 w-full flex justify-between items-center">
              <span className="mr-4 font-semibold text-lg">Stock:</span>
              <select
                className="border-2 border-solid-grey p-3"
                ref={selectRef}
                defaultValue="Bitcoin"
              >
                <option value="" disabled hidden>
                  Select a stock
                </option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Tether">Tether</option>
                <option value="BNB">BNB</option>
                <option value="Solana">Solana</option>
                <option value="USD Coin">USD Coin</option>
                <option value="XRP">XRP</option>
                <option value="Toncoin">Toncoin</option>
                <option value="Dogecoin">Dogecoin</option>
                <option value="Cardano">Cardano</option>
              </select>
            </div>

            <div className="flex justify-between p-3 border-t-2 space-x-4">
              <button
                type="submit"
                className="bg-teal-600 w-full text-white px-12 py-2 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
