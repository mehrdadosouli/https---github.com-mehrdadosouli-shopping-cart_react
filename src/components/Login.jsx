import React, { useEffect, useState } from 'react'
import  styles  from './login.module.css'
import { FaUserAlt } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { validation } from './validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const [inputsval,setInputs]=useState({
        text:'',
        password:'',
        checkbox:false,
    })
    const [swallprops,setSwall]=useState({})
    const [focus,setFocus]=useState({
        names:false,
        emails:false,
        checked:false
    })
    const changeHandler=(e)=>{
       if(e.target.type=='checkbox'){
           setInputs({...inputsval,checkbox:!inputsval.checkbox})
       }else{
        setInputs({...inputsval,[e.target.type]:e.target.value})
       }
    }
    const submitHandler=()=>{
        setFocus({
            names:true,
            emails:true,
            checked:true,
        });
        if(!Object.keys(swallprops).length){
            toast('you login successfuly')
        }else{
            toast('please checkd inputs')
        }
    }
    useEffect(()=>{
        setSwall(validation(inputsval))
    },[inputsval])

    const focusHandler=(e)=>{
        setFocus({
            ...focus,[e.target.name]:true
        })
    }
  return (
    <>
       <ToastContainer />
        <div className={styles.container}>
            <div className={styles.form}>
                <span><FaCircleUser className={styles.logo}/></span>
                <div className={styles.svg}>
                    <span className={styles.userIcon}><FaUserAlt /></span>
                    <input type="text" name='names' onFocus={focusHandler} placeholder='Enter UserName' value={inputsval.text} onChange={changeHandler}/>
                </div>
                    <span className={styles.error}>{swallprops && focus.names && swallprops.username }</span>
                <div className={styles.svg}>
                    <span className={styles.passwordIcon}><RiLockPasswordLine /></span>
                    <input type="password" name='emails' onFocus={focusHandler} placeholder='Enter Password' value={inputsval.password} onChange={changeHandler} />
                </div>
                <span className={styles.error}>{swallprops && focus.emails && swallprops.userpass}</span>

                <div className={styles.check}>
                    <label htmlFor="checked">Remember Me</label>
                    <input type="checkbox" name="checked" id="checkbox" onFocus={focusHandler} onChange={changeHandler}/>
                </div>
                    <span className={styles.error}>{swallprops && focus.checked && swallprops.ckeckboxes}</span>
                <input type="submit" value="Login" onClick={submitHandler}/>
            </div>
        </div>
    </>
  )
}
