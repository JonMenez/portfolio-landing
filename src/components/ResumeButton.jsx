import React from 'react';
import ResumeIcon from '../assets/icons/resume.svg';

const ResumeButton = () => {
    return (
        <button className="resume__button">
        <a className="nav__icon" className="resume__link" href="#">
          <img className="resume__icon" src={ ResumeIcon } alt="Resume icon" />
          Resume
        </a>
      </button>
    )
}

export default ResumeButton
