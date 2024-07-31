import { Button, Label, Radio, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left side */}
      <div className='flex-1'>
      <Link to='/' className='sm:text-xl font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-red-600 rounded-lg text-white'>USW</span>Survey
        </Link>
        <p className='text-sm mt-5'>
          This is South Wales Social Well-Being Survey. It helps to assess the social well-being of an individual and provide a score based on the responses. To take the survey, please sign up.
        </p>
      </div>
      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label className='mt-5 '>Your email</Label>
              <TextInput
              type='email' 
              placeholder='name@domain.com' id='email' 
              />
          </div>
                <div>
                <fieldset className="flex max-w-md flex-col gap-4 mt-5">
            <legend className="mb-4">Choose your Gender</legend>
            <div className="flex items-center gap-2">
              <Radio id="male" name="gender" value="male" defaultChecked />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="female" name="gender" value="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="prefer not to say" name="gender" value="Prefer not to say" />
              <Label htmlFor="">Prefer not to say</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="other" name="gender" value="Other" />
              <Label htmlFor="other">Other</Label>
            </div>
    </fieldset>
          </div>
          <div>
                <fieldset className="flex max-w-md flex-col gap-4 mt-5">
            <legend className="mb-4">Select your age group</legend>
            <div className="flex items-center gap-2">
              <Radio id="16 to 24" name="ageGroup" value="16 to 24" defaultChecked />
              <Label htmlFor="16 to 24">16 to 24</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="25 to 34" name="ageGroup" value="25 to 34" />
              <Label htmlFor="25 to 34">25 to 34</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="35 to 44" name="ageGroup" value="35 to 44" />
              <Label htmlFor="35 to 44">35 to 44</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="45 to 54" name="ageGroup" value="45 to 54" />
              <Label htmlFor="45 to 54">45 to 54</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="55 & above" name="ageGroup" value="55 & above" />
              <Label htmlFor="55 & above">55 & above</Label>
            </div>
    </fieldset>
          </div>   
          <div>
            <Label className='mt-5'>Your password</Label>
              <TextInput
              type='password' 
              placeholder='Enter your password' id='password' 
              />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'> Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'> Sign In</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
