import React from 'react'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://storage.googleapis.com/henry-portfolio-bucket/HenryArlt_Resume.pdf' target={'_blank'} alt='Resume' rel="noreferrer">
                <i className="fa-solid fa-file-arrow-down"></i>
            </a>
        </div>
        <div>
            <a href='https://www.linkedin.com/in/henry-arlt/' target={'_blank'} alt='LinkedIn' rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
        <div>
            <a href='https://github.com/Henry3646' target={'_blank'} alt='GitHub' rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        
    </div>
  )
}

export default SocialMedia