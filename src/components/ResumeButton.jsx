import  * as React  from 'react';
import ResumeIcon from '@icons/resume.svg';
import '@styles/resumeButton.scss';

const ResumeButton = () => {
    return (
        <button className="resume__button">
        <a className="nav__icon" className="resume__link" href="#">
          <img  src={ ResumeIcon } alt="Resume icon" />
          Resume
        </a>
      </button>
    )
}

export default ResumeButton
