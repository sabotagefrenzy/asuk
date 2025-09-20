import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-[var(--fg-100)]'>Subscribe now & get 20% off</p>
        <p className='text-grey-400 mt-3'>Lorem Ipsum</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[var(--border)] bg-[var(--bg-800)] pl-3 rounded-md'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none bg-transparent' />
            <button type='submit' className='btn btn-primary text-xs' >SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox