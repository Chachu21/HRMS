import React from 'react'

const CustomEqub = () => {
  return (
    <div className="flex justify-center flex-col pt-20 gap-5 items-center h-[100vh] bg-gray-100 text-gray-700">
      <span className='text-2xl'> Custom equb </span>

      <p className="text-gray-800 text-xl">
        please create Custom equb by fill the following form
      </p>
      <div className="flex">
        <form
          action=""
          className="flex justify-start flex-col items-end bg-white w-full px-5 rounded-md gap-10"
        >
          <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor="deposit" className="text-gray-700 ">
              Deposit Amount{" "}
            </label>
            <input
              type="number"
              className="w-[300px] bg-gray-100 pl-[10px] border rounded-md outline-none border-gray-300 "
            />
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor="user" className="text-gray-700">
              Number of member
            </label>
            <input
              name="no_user"
              id="user"
              type="number"
              className="w-[300px] bg-gray-100 border border-gray-300 outline-none rounded-lg pl-[10px] "
            />
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor="user" className="text-gray-700">
              Payout Day
            </label>
            <input
              name="no_user"
              id="user"
              type="number"
              className="w-[300px] bg-gray-100 border border-gray-300 outline-none rounded-lg pl-[10px] "
            />
          </div>
          <button
            type="submit"
            className="w-[130px] rounded-lg flex justify-end items-end p-2  text-white bg-blue-400 my-10"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomEqub