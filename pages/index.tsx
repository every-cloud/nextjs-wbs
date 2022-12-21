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

 

  <div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
      <div>

        {/* 프로젝트 추가 버튼 */}
        <Link href="/create">
          <button type="button" className="inline-block px-5 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded
                    hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">

              <span className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>프로젝트 추가
              </span>
          </button>
        </Link>
      </div>

    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
        <table className="min-w-full leading-normal">

          {/* thead */}
          <thead>
            <tr>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                작업상태
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                오픈일
              </th>             
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                구분
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                작업명
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                스펙
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                개발유무
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                직군
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                담당자
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                상태
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                시작
              </th>
              <th
                className="px-5 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                완료
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              >

              </th>
            </tr>
          </thead>

          {/* tbody */}
          <tbody>

            <tr>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
              <span className="inline-flex items-center m-1 px-1 py-1 bg-red-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-red-600">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
               </span>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">웹</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">자료실-배경화면 추가</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">front-Backend</p>
              </td>

              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">O</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">기획</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-7 h-7">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Molly Sanders
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Paid</span>
                  </span>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td
                className="px-5 py-2 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>

          <tr>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Paid</span>
                  </span>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">웹</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">자료실-배경화면 추가</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">front-Backend</p>
              </td>

              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">O</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">기획</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex">
                  <div className="flex-shrink-0 w-7 h-7">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Molly Sanders
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Paid</span>
                  </span>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">22/12/22</p>
              </td>
              <td
                className="px-5 py-2 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>







          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>













   </Layout>
  );
}
