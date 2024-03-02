import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import spinLogo from '../../../../public/favicon.ico';

export default function Account() {
    return (
        <div className="account flex mt-5">
            <div className="avatar flex flex-col justify-center mr-3">
                <Image className="w-12 rounded-full" src={spinLogo} alt="Avatar" />
            </div>
            <div className="account flex justify-between w-full">
                <div className="account-info">
                    <div className="account-name font-bold">0xRyan</div>
                    <div className="account-serrings text-sm text-dd-gray">Account Settings</div>
                </div>
                <div className="up-arrow">
                    <FontAwesomeIcon className="iconfont text-dark-gray" icon="chevron-up" />
                </div>
            </div>
        </div>
    );
}