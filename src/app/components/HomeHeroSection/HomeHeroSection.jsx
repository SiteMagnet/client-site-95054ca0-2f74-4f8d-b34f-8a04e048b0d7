'use client';
import Link from 'next/link';
import content from '../../../../content.json';
import './HomeHeroSection.css';


export default function HomeHeroSection({content}) {

console.log(content);
const hero = content.hero;
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=''></div>

      <div className="hero-content">
        <h1 className="hero-heading">
          {hero.hero_heading}
        </h1>
        <p className="hero-subheading">
          {hero.hero_subheading}
        </p>
        <div className="cta-container">
        {/* <Link href="/Login"> */}
          <button className="cta-button" >
            Get Started
          </button>
        {/* </Link> */}

        </div>
      </div>


    </section>
  );
}
