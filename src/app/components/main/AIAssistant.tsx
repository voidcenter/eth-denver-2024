import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import AIImg from '../../../../public/ai.png';

export default function AIAssistant() {
    return (
        <div className="ai-assistant flex flex-col justify-between mr-5 mb-5 p-4 border border-common-gray rounded-[15px] shadow-sm">
            <div className="ai-assistant-title flex ml-2 mr-2 pb-5 border-b border-light-gray">
                <Image className="w-7 h-auto" src={AIImg} alt="AI Assistant icon" />
                <div className="ml-2 font-semibold">AI Assistant</div>
            </div>
            <div className="ai-assistant-dialog h-full p-3 overflow-y-auto">
                <div className="ai-assistent-dialog-reminder text-center text-dark-gray text-s">
                    Start typing here to get help from AI Assistant
                </div>
            </div>
            <div className="ai-assistant-input p-2 border border-dark-gray rounded-[10px]">
                <form className="flex justify-between">
                    <textarea className="w-full" rows={1} placeholder="Type here..."></textarea>
                    <button className="flex justify-center items-center w-7" type="submit">
                        <FontAwesomeIcon className="iconfont w-4 text-dd-gray" icon="paper-plane"/>
                    </button>
                </form>
            </div>
        </div>
    );
}