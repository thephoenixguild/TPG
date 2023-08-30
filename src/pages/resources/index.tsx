import Layout from '@/components/layout/layout'
import NavBar from '@/components/navbar/navbar'
import { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ResourcesTitle from '@/components/resources/title';
import ResourcesAvailable from '@/components/resources/resources-available';
import Footer from '@/components/sections/footer/footer';

interface ResourcesProps {
    data: any
}

const Resources: FC<ResourcesProps> = ({ data }) => {


    return <>
        <Layout>
            <NavBar />
            <ResourcesTitle />
            <ResourcesAvailable notionResources={data?.data} />
            <div className='mt-[20rem]'>
                <Footer />
            </div>
        </Layout>
    </>
}

export default Resources

export async function getServerSideProps() {

    const res = await fetch(`http://localhost:3000/api/notion`)
    const data = await res.json()

    console.log(data, 'dataaa')
    return { props: { data } }
}
