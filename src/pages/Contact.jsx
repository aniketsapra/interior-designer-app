import React from 'react'
import SlideTransition from '../components/SlideTransition';

const Contact = () => {
  return (
    <SlideTransition>
    <div className='p-5 flex flex-col items-center justify-center font-lora text-gray-600'>
        <div className='p-10 pt-36 grid xl:grid-cols-2 grid-cols-1 gap-10'>
          <div className=' flex items-center justify-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.235033076388!2d77.13506451259855!3d28.63288664602596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033b564a8fbf%3A0x89a4281709092a1e!2sB%2C%2059%2F1%2C%20Industrial%20Area%20Phase%20I%2C%20Block%20B%2C%20Naraina%20Industrial%20Area%20Phase%202%2C%20Naraina%2C%20New%20Delhi%2C%20Delhi%20110015!5e0!3m2!1sen!2sin!4v1710236255210!5m2!1sen!2sin" width="400" height="400" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className=' flex items-center justify-center'>
          Address: B-59/1, 3rd Floor,<br></br> 
          Naraina Industrial Area, Phase2<br></br>
          PH: +91 9871144700<br></br>
          E-mail: Designs.abhisheksapra@gmail.com<br></br>
          Social: www.instagram.com/abhisheksapradesigns
          </div>
        </div>
    </div>
    </SlideTransition>
  )
}

export default Contact
