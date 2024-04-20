import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ExpertAreas from "../src/components/ExpertAreas";
import Feedback from "../src/components/Feedback";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import CopyRight from "../src/layouts/CopyRight";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
import ProgressBar from "../src/layouts/ProgressBar";
import { useEffect, useState } from "react";
const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});
const USER_ID = '65b3a22c01d900e96c4219ae';

const Index = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const userId = USER_ID;
  useEffect(() => {
    const fetchData = async (userIdParam) => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userIdParam}`)
        const data = await response.json();
        const {success, user} = data;
        console.log(user);
        setUserData(user);
      } catch(e) {
        console.log(e)
      } finally {
        setIsLoading(false)   //uncomment
      }
    };

    fetchData(userId);
  }, []);
  
   return (
     <>
      <Layout>
      {
        isLoading ?
          <p>Loading... </p>
          :
        <>
          <MobileMenu />
          <Header name={userData.about?.name} />
          <Home aboutData={userData.about} socialHandles={userData.social_handles}/>
          <About aboutData={userData.about} />
          <ExpertAreas timeline={userData.timeline} skillsData={userData.skills} projectsCount={userData.projects?.length ?? 0} />
          <Services servicesData={userData.services} />
          <Projects projectsData={userData.projects} />
          <Feedback testimonials={userData.testimonials} />
          {/* <Blog servicesData={userData.services}/> */}
          <Partners servicesData={userData.services} />
          <Contact aboutData={userData.about} youtubeData={userData.youtube} email={userData.email} socialHandles={userData.social_handles} />
          <CopyRight name={userData.about?.name ?? ''} />
          <Mouse />
          <ProgressBar />
      </> 
      
    }
    </Layout>
    </>
  );
};
export default Index;
