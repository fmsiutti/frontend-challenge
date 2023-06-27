
import Close from '../../assets/Close.svg'
import Image from 'next/image';

export default function CloseButton({className = '' }) {

    return (<Image className={className} src={Close} alt="Reset Filters" width={24} height={24} />)
}