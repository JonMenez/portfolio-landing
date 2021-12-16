import * as React from 'react';
import '@styles/formContact.scss'


const FormContact = () => {
    return (
        <form className='contact__form'>
           <div className="contact__basic">
            <div className='contact__name'>
                  <input 
                  className='contact__input' 
                  type="text" 
                  name="name" 
                  aria-label="name"
                  autoComplete='off'
                  required/>
                  <label className='contact__label' 
                  htmlFor="name">Full Name
                  </label>
            </div>
            <div className='contact__name'>
                  <input 
                  className='contact__input' 
                  type="name" 
                  name="email" 
                  aria-label="email"
                  inputmode="text"
                  autoComplete='off'
                  required />
                  <label 
                  htmlFor="email"
                  className='contact__label'
                  >Email Address</label>
               </div>
            </div>
               <div className='contact__field'>
                  <textarea 
                  name="comment" 
                  className="contact__comment"
                  type="text"
                  required
                    >
                  </textarea>
                  <label 
                  className="contact__label--text"
                  htmlFor="comment"
                  >What do you need?</label>
                </div>
                <button className='contact__button' type="submit">Send !</button>
        </form>
    )
}

export default FormContact
