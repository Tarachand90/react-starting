import React from 'react'

import CoreConceptsType from "../components/CoreConceptsType";

const CoreConcepts = ({title, description, image}: CoreConceptsType) => {
  return (
    <div>
      <img src={image} alt='image' />
      {title}
      {description}
    </div>
  )
}

export default CoreConcepts
