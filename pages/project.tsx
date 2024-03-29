import Head from 'next/head'
import Layout from './components/layout'
import { TOKEN, DATABASE_ID } from '../config'
import ProjectItem from './components/projects/project-item'

export default function Project({projects} :{projects:any}) {


    return (
        <Layout>
          <div className='
             flex flex-col items-center justify-center min-h-screen px-6 mb-10'>

       
            <Head>
                <title>제목표시줄 입니다</title>
                <meta name="description" content="설명입니다" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

          <h1 className='text-4xl font-bold sm:text-6xl'> 
            총 프로젝트 : 
            <span className='pl-4 text-blue-500'> { projects.results.length }</span>
            </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10">
              {projects.results.map((aProject:any) => (
              <ProjectItem key={aProject.id} data={aProject}/>
              ))}
          </div>
        </div>
        </Layout>
    )
}

/*  빌드 타임에 호출  */
export async function getStaticProps() {

    const options = { 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          sorts: [
            {
              "property":"Name",
              "direction":"ascending"
            }
          
          ],
          page_size: 100})
      };
      
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      const projects = await res.json()
      
  


    return {
      props: {projects}, // will be passed to the page component as props
    }
  }