import style from '../styles/modules/app.module.scss'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import PageTitle from './PageTitle'
import '../styles/GlobalStyles.css'

function App() {
  return (
    <div className="container">
      <PageTitle>to do list</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  )
}

export default App
