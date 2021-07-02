import React, { useState } from 'react'
import projectService from '../../services/ProjectService.js'


const CreateProjectPopup = ({ toggle, newProject, addProject, handleProjectChange }) => {

  return (
    <div className='modal'>
      <div className='modal_content'>
        <form onSubmit={addProject}>
          <span className='close' onClick={toggle}>&times;</span>
          <h2>Create a New Project</h2>
          <input value={newProject} onChange={handleProjectChange} />
          <input type='submit' name='submit' value='Save Project' />
          </form>
      </div>
    </div>
  )
}

export default CreateProjectPopup