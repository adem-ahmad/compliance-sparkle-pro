import flowerImage from '../../assets/images/flower_orange.png';
import { useIsMobile } from '../../hooks/use-mobile';

interface FlowerProps {
  className?: string;
  style?: React.CSSProperties;
  mobileStyle?: React.CSSProperties;
  size?: number;
  fixed?: boolean;
}

const Flower = ({ className = "", style = {}, mobileStyle = {}, size = 50, fixed = false }: FlowerProps) => {
  const isMobile = useIsMobile();

  const finalStyle = {
    width: size,
    height: size,
    backgroundImage: `url(${flowerImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    ...style,
    ...(isMobile ? mobileStyle : {}),
  };

  return (
    <div
      className={`${fixed ? 'fixed' : 'absolute'} ${className}`}
      style={finalStyle}
    />
  );
};

export default Flower;