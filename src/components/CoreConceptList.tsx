import React from 'react'
import { CORE_CONCEPTS } from '../datas/data'
import CoreConcepts from './CoreConcepts'

const CoreConceptList = () => {
  return (
    <ul>
      {
      CORE_CONCEPTS.map((concept, index) => {
        return (
            <li key={index}>
            <CoreConcepts  title={concept.title} description={concept.description} image={concept.image}/>
        </li>
        )
       
      })}
    </ul>
  )
}

export default CoreConceptList
