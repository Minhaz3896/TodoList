import React from 'react'

const Content = () => {
  return (
    <div>
        <h1>TO-DO LIST</h1>
        <div>
            <input placeholder='Add Tasks'/>
            <button>Save</button>
        </div>
        <div>
            <div>
                <input type='checkbox'/>
                <input placeholder='GetFood'/>
                <button>EDIT</button>
                <button>REMOVE</button>
            </div>
        </div>
    </div>
  )
}

export default Content