import SearchBar from './SearchBar/SearchBar';
import styles from '../../styles/MainSection/TopNavigation.module.css';
import Logo from '../icons/logo/Logo';
import MoonIcon from '../icons/other/MoonIcon';

type Props = {
  location: string;
  status: number;
};

const TopNavigation = ({ location, status }: Props) => {
  return (
    <nav className={styles.Wrapper}>
      <Logo width={200} height={50} />
      <div className={styles.SearchBarWrapper}>
        <SearchBar location={location} status={status} />
        <MoonIcon />
      </div>
    </nav>
  );
};

export default TopNavigation;
