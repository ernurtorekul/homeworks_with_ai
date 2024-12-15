import React from 'react'
import FirstPage from '../firstpage/page'
import FeaturesPage from '../features/page'
import SubjectsPage from '../subjects/page'
import Feedbacks from '../feedbacks'
import FeedbackPage from '../feedbacks/page'
import PricePage from '../price/page'
import FaqsPage from '../faqs/page'

function Home() {
  return (
    <>
        <FirstPage/>
        <FeaturesPage />
        <SubjectsPage /> 
        <FeedbackPage/>
        <PricePage/>
        <FaqsPage/>
    </>
  )
}

export default Home