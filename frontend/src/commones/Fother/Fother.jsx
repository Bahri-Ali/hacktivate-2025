import "./fother.css";
 function Fother() {
  return (
    <footer className="fother h-[20vh] flex items-center justify-center border-t-[1px] rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025
          <a href="" className="hover:underline ml-[10px]">
            Hacktivate 
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              log-in
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Fother