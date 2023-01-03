import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import Button from "../../../component/button/Button";
import {updateUserDetails} from "../../../actions/currentUser";
import {useParams} from "react-router-dom";

const EditUserProfile=({setSwitch,Switch})=>{
    const dispatch=useDispatch()
    const {id}=useParams()
    const[name,setName]=useState('')
    const[about,setAbout]=useState('')
    const[tags,setTags]=useState([])
    function handleSubmit(e) {
         e.preventDefault()
        dispatch(updateUserDetails(setSwitch,Switch,id,{name,about,tags}))
    }

    return(
        <div>
            <h1 className={'edit-profile-title'}>Edit Your Profile</h1>
            <h1 className={'edit-profile-title'}>Public Information</h1>
            <form className={'edit-profile-form'} onSubmit={handleSubmit}>
                <label htmlFor={'name'}>
                    <h3>UserName: </h3>
                    <input  onChange={(e)=>setName(e.target.value)} type={'text'} name={'name'} id={'name'}/>
                </label>
                <label htmlFor={'about'}>
                    <h3>About :</h3>
                    <textarea onChange={(e)=>setAbout(e.target.value)} rows={20} cols={30} name={'about'} id={'email'}/>
                </label>
                <label htmlFor={'tags'}>
                    <h3>Watched Tags</h3>
                    <p>Add Tags Seperated By 1 space</p>
                    <input onChange={(e)=>setTags(e.target.value.split(' '))} type={'text'} name={'tags'} id={'tags'}/>
                </label>
                <br/>
                <Button type={'submit'} children={'Save Profile'} className={'user-submit-btn'}/>
                <Button type={'button'} onClick={()=>setSwitch(!Switch)} className={'user-cancel-btn'} children={'Cancel'}/>
            </form>
        </div>
    )
}
export default EditUserProfile