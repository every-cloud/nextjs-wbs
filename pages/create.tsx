import Layout from './components/layout'
import { collection, addDoc } from 'firebase/firestore'
import db from './firebase/db'
import { useState } from 'react'

export default function Create() {
    const {subject, setSubject} = useState()
    const {content, setContent} = useState()
    const submit = () => {

        addDoc{ collection ( db, 'articles' ), {
            subject,
            content,
            author: '홍길동',
            created_at : new Date().getTime(),
        }}

        

        }}
    }



    return (
        <Layout>

   <form onSubmit={() => false}>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">글쓰기</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">설명 블라블라.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">


                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="task" className="leading-7 text-sm text-gray-600">구분</label>
                            <input type="text" id="task" name="task" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value= { subject } 
                                onChange={ event => setSubject( event.target.value )}/>
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="task" className="leading-7 text-sm text-gray-600">작업명</label>
                            <input type="text" id="task" name="task" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="task" className="leading-7 text-sm text-gray-600">오픈일</label>
                            <input type="text" id="task" name="task" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="task" className="leading-7 text-sm text-gray-600">스펙</label>
                            <input type="text" id="task" name="task" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="task" className="leading-7 text-sm text-gray-600">개발유무</label>
                            <input type="text" id="task" name="task" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>



                    <div className="p-2 w-full">
                        <button onClick={submit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">등록</button>
                    </div>

            
                </div>
                </div>
            </div>
        </section>
    </form>




        </Layout>
    )
}
