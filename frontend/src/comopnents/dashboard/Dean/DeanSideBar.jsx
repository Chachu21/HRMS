import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { humergerMenu } from "../../../redux/reducers/loginReducer";

const DeanSideBar = () => {
  // const [isOpenSublink, setIsOpenSublink] = useState(false)
  const isClicked = useSelector((state) => state.auth.isClicked);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.auth.count);
  const handleClick = () => {
    dispatch(humergerMenu());
  };
  return (
    <div
      className={`flex sm:flex transition-transform ${
        isClicked ? "flex z-[1]" : "hidden"
      } `}
    >
      <aside
        id="logo-sidebar"
        // transition-transform -translate-x-full
        className=" fixed top-1 left-0 z-40 lg:w-[18%] h-screen pt-20   text-black bg-white border-r border-gray-200 sm:translate-x-0  dark:bg-white dark:border-gray-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  text-white bg-[#242461] dark:bg-white">
          <ul className="space-y-5 font-medium text-blacks mt-5">
            <li onClick={handleClick} className="flex items-center">
              <Link
                to="/dean/dashboard/approverequest"
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:bg-[#4b4ba7] hover:opacity-75`}
              >
                <div className="relative inline-flex w-fit">
                  <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-flex -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                    {count}
                  </div>
                  <button
                    type="button"
                    className="inline-flex rounded w-40 px-5 pb-1.5 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#4b4ba7] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    approve
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DeanSideBar;
