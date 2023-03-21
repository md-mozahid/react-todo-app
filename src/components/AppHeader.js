import React, { useState } from 'react'
import style from '../styles/modules/app.module.scss'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={style.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add task
      </Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader
