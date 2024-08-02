import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    ageGroup: '16 to 24',
    gender : 'male',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim() });
  }

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('All fields are required');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
        setErrorMessage(error.message);
      } 
    }
 


  return (

    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left side */}
      <div className='flex-1'>
      <Link to='/' className='sm:text-xl font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 rounded-lg text-white' style={{backgroundColor : 'rgba(202, 5, 57, 255)'}}>USW</span>Survey
        </Link>
        <p className='text-sm mt-5'>
          This is South Wales Social Well-Being Survey. It helps to assess the social well-being of an individual and provide a score based on the responses. To take the survey, you can login using the email you used for signing up along with the password you set.
        </p>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label className='mt-5 '>Your email</Label>
              <TextInput
              type='email' 
              placeholder='name@domain.com' id='email' 
              rightIcon={HiMail} onChange={handleChange}
              />
          </div>
          <div>
            <Label className='mt-5'>Your password</Label>
              <TextInput
              type='password' 
              placeholder='********' id='password' onChange={handleChange}
              />
          </div>
          <Button style={{backgroundColor : 'rgba(202, 5, 57, 255)'}} type='submit' disabled={loading} outline> 
          { loading ? (
            <>
            <Spinner size='sm' />
              <span className='pl-3'>Loading... </span>
              </>
              ) : 'Sign In'}
        </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Don't have an account?</span>
          <Link to='/sign-up' className='text-blue-500'> Sign Up</Link>
        </div>
        {errorMessage && (
          <Alert color='failure' className='mt-5'> 
            {errorMessage} 
          </Alert>
        )}
      </div>
    </div>
  </div>
  )
}
