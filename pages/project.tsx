import Layout from './components/layout'
import { TOKEN, DATABASE_ID } from '../config'
import ProjectItem from './components/projects/project-item'

export default function Project({projects}) {



    return (
        <Layout>

       <h1> 총 프로젝트 : { projects.results.length }</h1>

        {projects.results.map((aProject) => (
         <ProjectItem key={aProject.id} data={aProject}/>
        ))}

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
      
     

      const projectNames = projects.results.map((aProject) => (
          aProject.properties.Name.title[0].plain_text
      ))

    
   


    return {
      props: {projects}, // will be passed to the page component as props
    }
  }