

const CreateIssue = ({ newIssue, type, priority, addIssue, handleIssueChange, handlePriorityChange, handleTypeChange, toggle }) => {
  return (
    <div className='modal'>
      <div className='modal_content'>
        <form className='form-group' onSubmit={addIssue}>
          <span className='close' onClick={toggle}>&times;</span>
          <h2>Create a New Issue</h2>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <label htmlFor='issue-text' className='form-label'>Describe the issue.</label>
              <textarea id='issue-text' className='form-control' value={newIssue} onChange={handleIssueChange} />
            </div>
            <div className='col-lg-2'>
              <label htmlFor='type-select' className='form-label'>Type</label>
              <select id='type-select' className='form-control' name='type' value={type} onChange={handleTypeChange}>
                <option value='Bug'>Bug</option>
                <option value='Feature'>Feature</option>
              </select>
            </div>
            <div className='col-lg-2'>
              <label htmlFor='priority-select' className='form-label'>Priority</label>
              <select id='priority-select' className='form-control' name='priority' value={priority} onChange={handlePriorityChange}>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
                <option value='Critical'>Critical</option>
              </select>
            </div>
            <div className='col-lg-2'>
              <input className='form-control btn btn-success' type='submit' name='submit' value='Save Issue' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateIssue