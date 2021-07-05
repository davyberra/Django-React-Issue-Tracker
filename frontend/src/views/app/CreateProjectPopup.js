import React from 'react'


const CreateProjectPopup = ({ toggle, newProject, addProject, handleProjectChange }) => {

  return (
    <div className='modal'>
      <div className='modal_content'>
        <form onSubmit={addProject}>
          <span className='close' onClick={toggle}>&times;</span>
          <h2>Create a New Project</h2>
          <div className='row'>
            <div className='col-lg-9'>
              <input className='form-control' value={newProject} onChange={handleProjectChange} />
            </div>
            <div className='col-lg-3'>
              <input className='form-control btn btn-success' type='submit' name='submit' value='Save Project' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProjectPopup