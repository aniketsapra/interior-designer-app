import React from 'react'
import { aboutMe } from '../Assets/Index'
import SlideTransition from '../components/SlideTransition';

const About = () => {
  return (
    <SlideTransition>
    <section className='font-lora text-gray-600'>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 place-items-center px-14'>
      <div>
        <img src={aboutMe} 
          width='100%'
          height='100%'
        />
      </div>
      <div className='px-10'>
        <p>
        Abhishek Sapra Designs, headquartered in Naraina, Delhi, and Gurgaon, specializes in residential interior design, serving clients who prioritize both aesthetic appeal and functionality, with a touch of indescribable allure. Our extensive portfolio showcases the breadth of our expertise and the caliber of our work. At the helm of ASD is Abhishek Sapra, a self-taught creative with a passion for crafting captivating spaces. After several years of self-employment, Abhishek founded Abhishek Sapra Designs, garnering a loyal following across Delhi, Gurgaon, Dehradun, Bikaner, and Goa. Design isn't just a profession for Abhishek; it's an integral part of his daily life, drawing inspiration from his surroundings, travels, and adventures in the Himalayas. However, it's his clients who truly fuel his creativity, with their unique needs, tastes, and stories shaping every project. This client-centric approach ensures that each design is distinctive, yet infused with Abhishek's signature craftsmanship and flair.
        </p>
      </div>
    </div>
    </section>
    </SlideTransition>
  )
}

export default About
