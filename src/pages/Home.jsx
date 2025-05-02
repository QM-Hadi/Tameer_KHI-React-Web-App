import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import AboutSection from '../component/AboutSection/AboutSection';
import HeroAnimation from '../component/HeroAnimationSec/HeroAnimation';
import AnimationCon from '../component/AnimationCon/AnimationCon';
import LabourCon from '../component/LaboursSection/LaboursSec';
import Comment from '../component/CommentSec/Comment';

const Home = () => {
  return <>
  <HeroAnimation/>
  <AboutSection/>
  <AnimationCon/>
  <LabourCon/>
  <Comment/>
  
  
  </>
};

export default Home;
