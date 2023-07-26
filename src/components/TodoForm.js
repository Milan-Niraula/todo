import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '../appwrite/appwriteConfig'

function TodoForm() {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const promise = databases.createDocument("646c55f7295daeb200a7", "646c59bcbd87d2956e7d", uuidv4(), {
      todo
    })
    console.log(promise);
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    )
    window.location.reload()  // to handle for the different way
    // e.target.reset();
  }
  return (<>
    <div className="max-w-7xl mx-auto mt-10">
      <form action=''
        onSubmit={handleSubmit}
        className="flex justify-center mb-10">

        <input
          id='input'
          name='input'
          type='input'
          placeholder='To Do list'
          className='border p-2 w-2/3 rounded-md bg-neutral-100	text-black'
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button
          type='submit'
          className='bg-purple-500 p-2 text-white ml-2 rounded-md hover:bg-purple-400'
        >
          ADD TODO
        </button>
      </form>
    </div>
  </>
  )
}

export default TodoForm
