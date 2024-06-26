import { useState } from "react"
import { classNames } from "shared/lib/classnames/classNames";
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed})}>
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            {/* LangSwicher */}
          </div>
        </div>
    )
}