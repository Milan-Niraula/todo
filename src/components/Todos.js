import React, { useEffect, useState } from 'react'
import { databases } from '../appwrite/appwriteConfig'


function Todos() {
  const [todos, setTodos] = useState()
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    const getTodos = databases.listDocuments("646c55f7295daeb200a7", "646c59bcbd87d2956e7d")

    getTodos.then(
      function (response) {
        setTodos(response.documents);
      },
      function (error) {
        console.log(error);
      }
    )
    setLoader(false)
  }, [])

  const deleteTodo = (id) => {
    const promise = databases.deleteDocument("646c55f7295daeb200a7", "646c59bcbd87d2956e7d", id)
    promise.then(
      function (response) {
        console.log(response);

      },
      function (error) {
        console.log(error);
      }
    )
    window.location.reload();

  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <p className='text-3xl font-bold mb-2 text-center'>Todo list</p>
        {loader ? (
          <p>...loading</p>
        ) : (
          <div>
            {todos &&
              todos.map(item => (
                <div key={item.$id}>
                  <div className="p-3 flex items-center justify-between shadow-md ">
                    <div>
                      <p>{item.todo}</p>
                    </div>
                    <span onClick={() => { deleteTodo(item.$id) }} className='text-red-500 cursor-pointer'>
                      Delete
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Todos
