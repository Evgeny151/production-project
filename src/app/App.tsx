import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'

const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <AppRouter />
        </div>
    )
}

export default App