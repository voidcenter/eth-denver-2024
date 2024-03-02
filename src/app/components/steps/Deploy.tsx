export default function Deploy() {
    return (
        <div className="deploy h-full flex flex-col justify-between border border-common-gray rounded-[15px] shadow-sm">
            <div className="deploy-title flex h-20 pl-5 pr-5 border-b rounded-tl-[1rem] rounded-tr-[1rem] bg-ll-gray">
                <div className="flex items-center">
                    <div className="step-order">4</div>
                    <div className="deploy-text ml-3 text-ddd-gray md:text-xl lg:text-2xl">Deploy</div>
                </div>
            </div>
            <div className="flex flex-col h-full overflow-y-auto">
                
            </div>
            <div className="next-step flex justify-end h-16 p-3 border-t rounded-bl-[1rem] rounded-br-[1rem] bg-ll-gray">
                <div className="step flex items-center mr-3 text-dark-gray">4/4</div>
                <button className="next-button pl-3 pr-3 border border-dark-orange rounded-lg text-white bg-common-orange active:bg-dark-orange" type="button">Deploy</button>
            </div>
        </div>
    );
}