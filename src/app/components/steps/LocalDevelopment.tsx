import { redirectToGithubOauth } from "../../services/api_service";

export default function LocalDevelopment() {
    return (
        <div className="local-development h-full flex flex-col justify-between border border-common-gray rounded-[15px] shadow-sm">
            <div className="local-development-title flex h-20 pl-5 pr-5 border-b rounded-tl-[1rem] rounded-tr-[1rem] bg-ll-gray">
                <div className="flex items-center">
                    <div className="step-order">3</div>
                    <div className="local-development-text ml-3 text-ddd-gray md:text-xl lg:text-2xl">Local development configuration</div>
                </div>
            </div>
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="connect-to-github flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div className="connect-to-github-text flex items-center">Github Account</div>
                    <button className="border p-1 pl-3 pr-3 border-common-gray rounded-lg active:bg-common-gray" type="button" onClick={ redirectToGithubOauth }>Connect to Github</button>
                </div>
            </div>
            <div className="next-step flex justify-end h-16 p-3 border-t rounded-bl-[1rem] rounded-br-[1rem] bg-ll-gray">
                <div className="step flex items-center mr-3 text-dark-gray">3/4</div>
                <button className="next-button pl-3 pr-3 border border-common-gray rounded-lg active:bg-common-gray" type="button">Next</button>
            </div>
        </div>
    );
}