import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChildComponentProps {
    toggleAIAssistantVisibility: () => void;
}

export default function TopBar({ toggleAIAssistantVisibility }: ChildComponentProps) {
    return (
        <div className="top-bar flex justify-between ml-5">
            <div className="top-bar-left flex">
                <div className="top-bar-back mt-auto mb-auto">
                    <FontAwesomeIcon className="iconfont w-4 text-dark-gray" icon="arrow-left"/>
                </div>
                <div className="top-bar-title mt-auto mr-3 mb-auto ml-3 font-bold">Test Project</div>
                <div className="top-bar-deployed mt-auto mb-auto p-1 border border-dark-gray rounded-lg text-xs">Not Deployed</div>
            </div>
            <div className="top-bar-right flex">
                <button className="top-bar-assistant flex items-center justify-center mt-auto mr-4 mb-auto w-12 h-9 border border-light-orange rounded-lg bg-ll-orange active:bg-light-orange" onClick={ toggleAIAssistantVisibility }>
                    <FontAwesomeIcon className="iconfont h-6 text-common-orange" icon="wand-magic-sparkles"/>
                </button>
                <button className="top-bar-deploy mt-auto mr-5 mb-auto w-20 h-9 border border-dark-orange rounded-lg text-white bg-common-orange active:bg-dark-orange">Deploy</button>
            </div>
        </div>
    );
}