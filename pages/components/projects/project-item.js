import Image from 'next/legacy/image'
import { transferableAbortSignal } from 'util'

export default function ProjectItem({data}) {

    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url 
    const tags = data.properties.Tags.multi_select


    return (
        <div className="project-card">

            <Image
                className='rounded-t-xl' 
                src={data.cover.external.url}
                width="100%"
                height="60%"
                layout="responsive"
                objectFit='none'
                quality={100}
                alt="cover image"
            />

            <div className='p-4 flex flex-col'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <h3 className='mt-4 text-xl'>{description}</h3>   

                <div className='flex items-start mt-2'>
                    {tags.map((aTag)=>(
                        <h1 className='px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30' key={aTag.id}>{aTag.name}</h1>
                    ))}

                </div>

            </div>

        </div>
    )
}  