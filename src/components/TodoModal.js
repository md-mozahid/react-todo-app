import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import style from '../styles/modules/modal.module.scss'
import Button from './Button'
import { addTodo } from '../slice/TodoSlice'
import { v4 as uuidv4 } from 'uuid'

function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Incomplete')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && status) {
      dispatch(addTodo({
        id: uuidv4(),
        title,
        status,
        time: new Date().toLocaleDateString()
      }))
    }
  }

  return (
    <>
      {modalOpen && (
        <div className={style.wrapper}>
          <div className={style.container}>
            <div
              className={style.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button">
              <MdOutlineClose />
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
              <h1 className={style.formTitle}>Add Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={style.buttonContainer}>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoModal
