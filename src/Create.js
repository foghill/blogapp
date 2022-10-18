import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('Ben');
const history = useHistory();




  return (
    <div>Create</div>
  )
}

export default Create