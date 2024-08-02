import { Alert, Button, Label, Radio, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

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
    if (!formData.email || !formData.ageGroup || !formData.gender || !formData.password) {
      return setErrorMessage('All fields are required');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
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
        navigate('/sign-in');
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
          This is South Wales Social Well-Being Survey. It helps to assess the social well-being of an individual and provide a score based on the responses. To take the survey, please sign up.
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
                <fieldset className="flex max-w-md flex-col gap-4 mt-5">
            <legend className="mb-4">Choose your Gender</legend>
            <div className="flex items-center gap-2">
              <Radio id="gender" name="gender" value="male" defaultChecked onChange={handleRadioChange}/>
              <Label htmlFor="gender">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="gender" name="gender" value="female" onChange={handleRadioChange}/>
              <Label htmlFor="gender">Female</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="gender" name="gender" value="Prefer not to say" onChange={handleRadioChange}/>
              <Label htmlFor="">Prefer not to say</Label>
            </div>
    </fieldset>
          </div>
          <div>
                <fieldset className="flex max-w-md flex-col gap-4 mt-5">
            <legend className="mb-4">Select your age group</legend>
            <div className="flex items-center gap-2">
              <Radio id="ageGroup" name="ageGroup" value="16 to 24" defaultChecked onChange={handleRadioChange}/>
              <Label htmlFor="16 to 24">16 to 24</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="ageGroup" name="ageGroup" value="25 to 34" onChange={handleRadioChange}/>
              <Label htmlFor="25 to 34">25 to 34</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="ageGroup" name="ageGroup" value="35 to 44" onChange={handleRadioChange}/>
              <Label htmlFor="35 to 44">35 to 44</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="ageGroup" name="ageGroup" value="45 to 54" onChange={handleRadioChange}/>
              <Label htmlFor="45 to 54">45 to 54</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="ageGroup" name="ageGroup" value="55 & above" onChange={handleRadioChange}/>
              <Label htmlFor="55 & above">55 & above</Label>
            </div>
    </fieldset>
          </div>   
          <div>
            <Label className='mt-5'>Your password</Label>
              <TextInput
              type='password' 
              placeholder='Enter your password' id='password' onChange={handleChange}
              />
          </div>
          <Button style={{backgroundColor : 'rgba(202, 5, 57, 255)'}} type='submit' disabled={loading} outline> 
          { loading ? (
            <>
            <Spinner size='sm' />
              <span className='pl-3'>Loading... </span>
              </>
              ) : 'Sign Up'}
        </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'> Sign In</Link>
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
