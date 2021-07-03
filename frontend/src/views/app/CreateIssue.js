

const CreateIssue = ({ newIssue, type, priority, addIssue, handleIssueChange, handlePriorityChange, handleTypeChange, toggle }) => {
  return (
    <div className='modal'>
      <div className='modal_content'>
        <form onSubmit={addIssue}>
          <span className='close' onClick={toggle}>&times;</span>
          <h2>Create a New Issue</h2>
          <textarea value={newIssue} onChange={handleIssueChange} />
          <select name='type' value={type} onChange={handleTypeChange}>
            <option value='Bug'>Bug</option>
            <option value='Feature'>Feature</option>
          </select>
          <select name='priority' value={priority} onChange={handlePriorityChange}>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
            <option value='Critical'>Critical</option>
          </select>
          <input type='submit' name='submit' value='Save Issue' />
        </form>
      </div>
    </div>
  )
}

export default CreateIssue