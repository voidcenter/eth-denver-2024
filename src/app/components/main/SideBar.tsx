import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Account from './Account';
import Image from 'next/image';
import spinLogo from '../../../../public/favicon.ico';

export default function SideBar({ setActiveComponent }: any) {
    const stepList = [ "Roll Up Configuration", "Business Logic", "Local Development", "Deploy" ];
    const sideStepTabs = stepList.map((text, index) => {
        return (
            <li key={index} className={text.toLowerCase().split(" ").join("-")} onClick={() => setActiveComponent(text)}>
                <button className="side-bar-tab flex items-center w-full h-full p-2 rounded-lg">
                    <div className="step-order">{index + 1}</div>
                    <div className={`${text.toLowerCase().split(" ").join("-")}-text ml-2 text-ddd-gray`}>{text}</div>
                </button>
            </li>
        );
    });

    const optionList = [ "Data Availability", "Session Replay", "Analytics and Logs", "Monetization" ];
    const iconfontList = [ "database", "rotate", "chart-simple", "money-bill-1" ];
    const sideOptionTabs = optionList.map((text, index) => {
        return (
            <li key={index} className={text.toLowerCase().split(" ").join("-")}>
                <button className="side-bar-tab flex items-center w-full h-full p-2 rounded-lg">
                    <FontAwesomeIcon className="iconfont text-common-gray" icon={iconfontList[index] as IconProp} />
                    <div className={`${text.toLowerCase().split(" ").join("-")}-text flex items-center ml-2 text-ddd-gray`}>{text}</div>
                </button>
            </li>
        );
    });

    return (
        <div className="side-bar flex flex-col justify-between p-5 pr-0">
            <div className="spin-playground flex pb-4 border-b">
                <Image className="logo w-8" src={spinLogo} alt="Spin Logo" />
                <div className="spin-playground-title flex items-center justify-center ml-2 font-bold text-lg">Spin Playground</div>
            </div>
            <div className="side-bar-tabs flex flex-col justify-between h-full pt-3">
                <div className="deploy-and-setting">
                    <ul className="deploy-steps border-b pb-3">
                        { sideStepTabs }
                    </ul>
                    <ul className="settings pt-3">
                        { sideOptionTabs }
                    </ul>
                </div>
                <div className="resources border-b">
                    <div className="project-samples flex items-center p-2 pb-4">
                        <FontAwesomeIcon className="iconfont text-common-gray" icon="graduation-cap" />
                        <div className="project-samples-text ml-2 text-ddd-gray">Project Sample</div>
                    </div>
                    <div className="documentation flex items-center p-2 pb-4">
                        <FontAwesomeIcon className="iconfont text-common-gray" icon="book" />
                        <div className="documentation-text ml-2 text-ddd-gray">Documentation</div>
                    </div>
                </div>
            </div>
            <Account />
        </div>
    );
}