import React, { useState, useEffect } from 'react'
import {db} from './firebase/firebase-config'
import {query, collection, onSnapshot} from 'firebase/firestore'


import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/layout'
import Hero from './components/home/hero'
import Animation from './components/home/animation' 
import Modal from './components/modal'
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
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />




        </div>
      </section>




   </Layout>
  );
}
