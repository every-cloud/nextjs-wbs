import React, { useState, useEffect } from 'react'
import {db} from './firebase/firebase-config'
import {query, collection, onSnapshot} from 'firebase/firestore'


import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/layout'
import { setHttpClientAndAgentOptions } from 'next/dist/server/config'


// Create todo
// Read todo from firebase
// Update todo in firebase
// Delete todo


const style = {
  thead : 'bg-gray-100 border-b border-gray-200 px-4 py-2',
  thead_right : 'bg-gray-100 border-b border-gray-200 px-4 py-2 text-right'
}


export default function Home() {
  return (

    <Layout>
      <Head>
        <title>제목표시줄 입니다</title>


       <meta name="description" content="설명입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
      <Link href="/create">
              <button> 글쓰기 </button>
      </Link>

      <div className="p-24">
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative text-gray-600">
            <thead>
              <tr className="text-left text-gray-400 text-xs">
                <th className={style.thead}> 서비스구분 </th>
                <th className={style.thead}> 프로젝트명 </th>
                <th className={style.thead}> 오픈일 </th>
                <th className={style.thead}> 스펙 </th>
                <th className={style.thead_right}> 개발유무 </th>
                <th className={style.thead_right} > Action </th>          

              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> John Doe </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>680</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 16h 00min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Julia Soyer </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>980</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 26h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Anna Cabana </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>600</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 12h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Johanna Doe </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>640</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2  text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 14h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Elliana Junior </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>1400</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2  text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 84h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Michela Larry </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>21 000</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>UAH</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 text-xs">
                  <span className="flex items-center text-gray-400 justify-end">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 26h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>

              <tr>
                <td className="border-dashed border-t border-gray-200 px-4 py-2"> Radion Nashville </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="text-xs text-blue-400 bg-blue-50 px-2 rounded-full">teacher</span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <strong>1200</strong>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <small>USD</small>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2">
                  <span className="flex items-center text-gray-400 justify-end text-xs">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" strokeWidth="2" fill="none" lroke-linecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg> 26h 30min </span>
                </td>
                <td className="border-dashed border-t border-gray-200 px-4 py-2 whitespace-nowrap text-right">
                          <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                </td>
              </tr>
              
            </tbody>
          </table>

        </div>
</div>


   </Layout>
  );
}
