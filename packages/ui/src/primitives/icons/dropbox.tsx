import { Icon, type IconProps } from './icon';

export default function Dropbox(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox='0 0 20 20'>
        <path
          d='M10.0129 5.19379L5.00647 8.38757L10.0129 11.5814L5.00647 14.7751L0 11.5641L5.00647 8.37031L0 5.19379L5.00647 2L10.0129 5.19379ZM4.98058 15.8023L9.98705 12.6085L14.9935 15.8023L9.98705 18.9961L4.98058 15.8023ZM10.0129 11.5641L15.0194 8.37031L10.0129 5.19379L14.9935 2L20 5.19379L14.9935 8.38757L20 11.5814L14.9935 14.7751L10.0129 11.5641Z'
          fill='#0061FF'
        />
      </svg>
    </Icon>
  );
}
