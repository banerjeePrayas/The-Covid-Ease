  
import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'The-Covid-Ease',
  description: 'Your One Way Destination for All the Covid Resources & Knowledge',
  keywords: 'covid-19, covid resources, oxygen suppliers near me, blood donors near me, doctors help for covid, red volunteers',
}

export default  Meta