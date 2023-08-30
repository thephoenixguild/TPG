// 'use client'

import NavBar from '@/components/navbar/navbar'
// import 'bootstrap/dist/css/bootstrap.css';
import Layout from '@/components/layout/layout';
import Title from '@/components/sections/title/title';
import Brands from '@/components/sections/brands/brands';
import Body from '@/components/sections/body/body';
import Glimpse from '@/components/sections/glimpse/glimpse';
import Team from '@/components/sections/team/team';
import Roadmap from '@/components/sections/roadmap/roadmap';
import WriteUs from '@/components/sections/write-us/write-us';
import Footer from '@/components/sections/footer/footer';

const Home = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <NavBar />
        </Layout>
        <Layout>
          <Title />
        </Layout>
        <Brands />
        <Layout>
          <Body />
        </Layout>
        <Glimpse />
        <Layout>
          <Team />
        </Layout>
        <Roadmap />
        <WriteUs />
        <Footer />
      </header>
    </div>
  )
}


export default Home