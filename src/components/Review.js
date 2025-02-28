// Node modules
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


//components
import ReviewCard from "./ReviewCard"

//Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Dr. Belayneh Hailemariam',
    imgSrc: '/assets/person2.png',
    company: 'Amanuel Health Center'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Mr Brhanu Kassa',
    imgSrc: '/assets/person2.png',
    company: 'Traffic Management'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Mrs Aynalem Baye',
    imgSrc: '/assets/person2.png',
    company: 'Private Company'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Mr Kassahun Teshager',
    imgSrc: '/assets/person2.png',
    company: 'BrightWeb Tech'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Mr Tomas Antony',
    imgSrc: '/assets/person2.png',
    company: 'Foriegner'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Mrs Alemitu Fasikaw',
    imgSrc: '/assets/person2.png',
    company: 'Addis Digital'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {scrollTrigger: {
       trigger: '.scrub-slide',
       start: '-200% 80%',
       end: '400% 80%',
       scrub: true,
      //  markers: true
      },
      x: '-500'
    })
  });


  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8"> 
            What My Customer Say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit ">
            {reviews.map(({content, name, imgSrc, company}, index) => (
                <ReviewCard key={index} name={name} imgSrc={imgSrc} company={company} content={content}/>
            ))}
        </div>

      </div>
    </section>
  )
}

export default Review
