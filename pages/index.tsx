<<<<<<< HEAD
import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/layout'





export default function Home() {
  return (
    <Layout>
      <Head>
        <title>제목표시줄 입니다</title>
        <meta name="description" content="WBS 만들자!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<<<<<<< HEAD

 
      <Link href="/create">
              <button> 글쓰기 </button>
      </Link>


      <div className="p-24">
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
          <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative text-gray-600">
            <thead>
              <tr className="text-left text-gray-400 text-xs">
                <th className="bg-gray-100 border-b border-gray-200 px-4 py-2"> 서비스구분 </th>
                <th className="bg-gray-100 border-b border-gray-200 px-4 py-2"> 프로젝트명 </th>
                <th className="bg-gray-100 border-b border-gray-200 px-4 py-2"> 오픈일 </th>
                <th className="bg-gray-100 border-b border-gray-200 px-4 py-2"> 스펙 </th>
                <th className="bg-gray-100 border-b text-right border-gray-200 px-4 py-2"> 개발유무 </th>
                <th className="bg-gray-100 border-b text-right border-gray-200 px-4 py-2"> Action </th>          

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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg viewBox="0 0 24 24" className="w-3 h-3 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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



=======
      <h1> 홈입니다</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
>>>>>>> 0527701bc331f23c991ddecd2ff8d20e33ae9e0b
    </Layout>
  );
}
