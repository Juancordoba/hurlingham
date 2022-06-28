import React from 'react'
import { Link } from 'react-router-dom'

var classLink = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
var classSvg = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";

export default function Sidebar() {
  return (
      <aside className='w-64 bg-gray-200 border-r'>
        <div className="overflow-y-auto px-1 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-0">
            <li>
              <Link to='/' className={classLink}>
                <svg className={classSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Dashboard</span></Link>
            </li>
            <li>
              <Link to='/products' className={classLink}>
                <svg className={classSvg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Articulos</span></Link>
            </li>
            
          { /* <a href="#" className="">
                <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3">Dashboard</span>
              </a> */ }
          </ul>
        </div>
      </aside>
  )
}
