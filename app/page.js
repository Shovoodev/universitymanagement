import prisma from "@/lib/prisma"
import '@/app/globals.css'
import Image from "next/image"
import defaultImg from '@/public/default.jpg'

export const metadata = {
  title: 'University management',
  description: '...',
}

export default async function LandingPage() {
  
  return  <div className="min-h-screen ">


  <section className=" text-black bg-[#E1E5F2] py-20">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to Our University</h2>
      <p className="text-lg">Empowering students to achieve excellence in education and beyond.</p>
    </div>
  </section>

  <section id="about" className="py-10 ">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-6">About Our University</h3>
      <p className="text-gray-700 mb-4">Our university is dedicated to providing world-class education and fostering research and innovation.</p>
      <p className="text-gray-700">We offer a wide range of programs and resources to support students on their journey to success.</p>
    </div>
  </section>
  <section id="about" className="py-10 bg-[#FFFFFF] flex justify-between">
    <div className=" h-52 w-52">
      <Image src={defaultImg} alt="the default image"/>
    </div>
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-bold mb-6">About Our University</h3>
      <p className="text-gray-700 mb-4">It is generally known that the general goals of universities are to produce high-quality graduates for the job market, to continuously advance the frontier of knowledge in all the disciplines, and ultimately to advance human civilization. There can, however, be numerous specific goals which differ from one university to the other. Whatever it is, in order to achieve the desired goals, universities need to design a realistic strategic development plan, which must include, among others, the important logistical components and factors of university development. In Malaysia, little is known about university development planning process as a subject area. Annual reports and calendars published by universities do not provide sufficient information about the elements and aspects of high priorities in their strategic development plan. As such, we decided to conduct a study on eleven (11) foremost public universities in Malaysia—a country with a centralized education system—in order to examine the goals, components, and factors considered by university top-management in planning university development. We administered a checklist to 296 respondents, comprising deputy vice-chancellors or deputy rectors, registrars, deans, and directors. The checklist required the respondents to rate the consideration level on a scale of 1 (least considered) to 5 (highly considered) for each of the items on goals, components, and factors. This article reports the main findings of our study. </p>
      <p className="text-gray-700">Among other things, the most obvious result revealed by the study was that universities were very concerned with the relevancy of academic programs offered and their performance in research. It was rather surprising, however, that the top-management of public universities in Malaysia placed the goal of providing quality infrastructure and facilities at the lowest ranking. Also, this study revealed that the government, as a factor, exerted its prominence only in terms of university budget and research grants and the execution of some policies of national interest, but university expansion and development was largely driven by the university organization itself, i.e., on where, what, and how it wants to expand and grow. In this regard, public universities in Malaysia still enjoy a large degree of academic autonomy and a strong support by the government..</p>
    </div>
  </section>

  <footer id="contact" className="bg-[#022B3A] w-full bottom-0 text-white py-6">
    <div className="container mx-auto text-center px-4">
      <p>&copy; {new Date().getFullYear()} University Management System. All rights reserved.</p>
    </div>
  </footer>
</div>
}