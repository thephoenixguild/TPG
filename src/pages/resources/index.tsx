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

const Resources: FC<ResourcesProps> = ({ data: { data } }) => {


    return <>
        <Layout>
            <NavBar />
            <ResourcesTitle notionResources={data} />
            <div className='mt-[20rem]'>
                <Footer />
            </div>
        </Layout>
    </>
}

export default Resources

export async function getServerSideProps() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notion`)
    const data = await res.json()

    return { props: { data } }
}
