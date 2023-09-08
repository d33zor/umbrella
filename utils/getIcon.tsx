import { ReactNode } from 'react';
import CloudIcon from '../components/icons/weather/CloudIcon';
import SunIcon from '../components/icons/weather/SunIcon';
import RainIcon from '../components/icons/weather/RainIcon';
import SnowIcon from '../components/icons/weather/SnowIcon';
import ThunderIcon from '../components/icons/weather/ThunderIcon';
import SunAndCloudIcon from '../components/icons/weather/SunAndCloudIcon';
import FogIcon from '../components/icons/weather/FogIcon';
import styles from '../styles/MainSection/Content/BottomSection/BottomContent.module.css';

export default function getIcon(id: number): ReactNode {
  return id && id >= 802 && id <= 804 ? (
    <CloudIcon svgSize={40} parentClass={styles.IconParent} />
  ) : id && id === 800 ? (
    <SunIcon svgSize={40} parentClass={styles.IconParent} />
  ) : id && id >= 300 && id <= 531 ? (
    <RainIcon svgSize={40} parentClass={styles.IconParent} />
  ) : id && id >= 600 && id <= 622 ? (
    <SnowIcon svgSize={40} parentClass={styles.IconParent} />
  ) : id && id >= 200 && id <= 232 ? (
    <ThunderIcon svgSize={40} parentClass={styles.IconParent} />
  ) : id && id === 801 ? (
    <SunAndCloudIcon svgSize={40} parentClass={styles.IconParent} />
  ) : (
    <FogIcon svgSize={40} parentClass={styles.IconParent} />
  );
}
