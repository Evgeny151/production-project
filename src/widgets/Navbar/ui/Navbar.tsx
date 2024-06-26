import { classNames } from "shared/lib/classnames/classNames"

import cls from './Navbar.module.scss'
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
        </div>
    </div>
  )
}
