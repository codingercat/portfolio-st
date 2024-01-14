import React, { Suspense, useRef, useState } from 'react';
import emailjs  from '@emailjs/browser';

import Loader from '../components/Loader'; 

import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm ] = useState({name: "", email: "", message: ""})
  const [loading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  
  const { alert, showAlert, hideAlert } = useAlert();
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsLoading(true);  
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Shambhavi",
        from_email: form.email,
        to_email: "21001001105shambhavi@dcrustm.org",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: Show sucess msg
      showAlert({show: true, text:"Message delivered😊",
      type: 'success'
    })
      // TODO: Hide alert

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: ''});
      }, [3000])

    }).catch((error) =>{
      setIsLoading(false);
      setCurrentAnimation('sad')
      console.log(error);
      showAlert({show: true, text:"Message not sent!😢",
      type: 'danger'})
      // TODO: Show error msg
    })
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  
  return (  
    <section className="relative flex lg:flex-row flex-col
    max-container h-[100vh]">
      { alert.show && <Alert{...alert} />}


      <div className="flex-1 min-w=[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form 
          className="w-full flex flex-col gap-7 mt-14" 
          onSubmit={handleSubmit}
          >
          <label className="text-black-500 font-semibold">
            Name
            < input 
            type="text"
            name= "name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur ={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            < input 
            type="email"
            name= "email"
            className="input"
            placeholder="john@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur ={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            < textarea 
            name= "message"
            row='4'
            className='textarea'
            placeholder="Let me know how I can help you!"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur ={handleBlur}
            />
          </label>

          <button
            type = "submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur} 
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

       <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]
      ">
        <Canvas
          camera={{
            position: [0,0,5],
            fov: 75,  //field of view
            near:0.1,
            far: 1000
          }}
          >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader/>}>
              <Fox 
              currentAnimation={currentAnimation}
                position = {[0.5,0.35,0]}
                rotation = {[12.625,-0.6,0]}
                scale= {[0.5,0.5,0.5]}
              />
            </Suspense>
        </Canvas>
      </div> 
    </section>
  )
}

export default Contact