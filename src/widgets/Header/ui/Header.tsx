import cn from 'classnames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Header.module.scss';

interface NavbarProps {
    className?: string;
}
export const Header: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    return <header className={cn(cls.Header, className)}>{t('test')}</header>;
});
