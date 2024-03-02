import { use, useState, useEffect } from 'react';
import Switcher from "../util/Switcher";
import DropDownMenu from '../util/DropDownMenu';
import IntInput from '../util/IntInput';
import { deployRollUpConfiguration } from '../../services/api_service';

export default function RollUpConfiguration() {
    // const [isSingleOrMulti, setIsSingleOrMulti] = useState<string>("Single Player"); 
    // const [isSameContinent, setIsSameContinent] = useState<string>("ON");
    const [playerNumber, setPlayerNumber] = useState<string>("10"); // [1, 16]
    const [minBlockTime, setMinBlockTime] = useState<string>("50"); // [1, 9999]

    useEffect(() => {
        const formData =  document.getElementById("roll-up-form");
        const handleSubmit = (event: Event) => {
            event.preventDefault();

            const formData = new FormData(event.target as HTMLFormElement);
            const formProps: { [key: string]: any } = {};

            for (let [key, value] of formData.entries()) {
                formProps[key] = value;
            }
            formProps["min_block_time"] = minBlockTime;
            formProps["max_player_count"] = playerNumber;
            
            deployRollUpConfiguration(formProps)
            .then((data) => console.log("Data:", data))
            .catch((error) => console.error("Error:", error));
        };

        formData?.addEventListener("submit", handleSubmit);

        return () => formData?.removeEventListener("submit", handleSubmit);
    }, []);
    
    return (
        <form id="roll-up-form" className="roll-up-configuration h-full flex flex-col justify-between border border-common-gray rounded-[15px] shadow-sm">
            <div className="roll-up-title flex h-20 pl-5 pr-5 border-b rounded-tl-[1rem] rounded-tr-[1rem] bg-ll-gray">
                <div className="flex items-center">
                    <div className="step-order">1</div>
                    <div className="roll-up-configuration-text ml-3 text-ddd-gray md:text-xl lg:text-2xl">Rollup configuration</div>
                </div>
            </div>
            <div className="options flex flex-col h-full overflow-y-auto">
                <div className="select-chain-engin m-5 mb-0 pb-5 border-b">
                    <div className="select-chain flex justify-between">
                        <div className="select-chain-text flex items-center">Select Chain</div>
                        <select className="p-2 border rounded-[0.7rem]" name="chain" id="chain-select">
                            <option value="SEPOLIA">Sepolia</option>
                            <option value="GOERLI">Goerli</option>
                            <option value="ETH_MAINNET">ETH Mainnet</option>
                            <option value="LOCAL">Local</option>
                            <option value="ARBITRUM">Arbitrum</option>
                            <option value="POLYGON">Polygon</option>
                        </select>
                    </div>
                    <div className="select-engine flex justify-between mt-1 ml-1 pt-6 pl-5 border-l">
                        <div className="select-engine-text">Main-chain engine integration</div>
                        <select className="p-2 border rounded-[0.7rem]" name="onchain_engine" id="onchain_engine-select">
                            <option value="MUD">MUD</option>
                            <option value="DOJO">DOJO</option>
                        </select>
                    </div>
                </div>
                <div className="min-block-time flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="min-block-time-text">Minimal Blocktime</div>
                        <div className="options-description text-sm text-dark-gray">Smaller -&gt; faster rollup, more intensive to prove</div>
                    </div>
                    <IntInput 
                        value={minBlockTime}
                        setValue={setMinBlockTime}
                        minValue={1}
                        maxValue={9999}
                        units="ms"
                        name="min_block_time"
                    />
                </div>
                <div className="max-num-player flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="max-num-player-text">Global Max Number of Players</div>
                        <div className="options-description text-sm text-dark-gray">(Max. players supported is 16)</div>
                    </div>
                    <IntInput 
                        value={playerNumber}
                        setValue={setPlayerNumber}
                        minValue={1}
                        maxValue={16}
                        units="players"
                    />
                </div>
                <div className="frontend-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="frontend-options-text">Frontend</div>
                        <div className="frontend-options-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="front_end" id="front_end-select">
                        <option value="UNITY">Unity</option>
                        <option value="ZOOM">Zoom</option>
                        <option value="GODOT">Godot</option>
                        <option value="BROWSER">Browser</option>
                        <option value="PHASER">Phaser</option>
                    </select>
                </div>
                <div className="consensus-layer-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="consensus-layer-text">Consensus Layer</div>
                        <div className="consensus-layer-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="consensus_layer" id="consensus_layer-select">
                        <option value="SINGLE_SERVER">Single Server</option>
                        <option value="POS">POS</option>
                    </select>
                </div>
                <div className="prover-paradigm-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="prover-paradigm-text">Prover Paradigm</div>
                        <div className="prover-paradigm-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="prover_paradigm" id="prover_paradigm-select">
                        <option value="ZK">ZK</option>
                        <option value="OPTIMISTIC">Optimistic</option>
                    </select>
                </div>
                <div className="zk-prover-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="zk-prover-text">ZK Prover</div>
                        <div className="zk-prover-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="zk_prover" id="zk_prover-select">
                        <option value="ZKWASM">zkWASM</option>
                        <option value="SNARKJS">snarkjs</option>
                    </select>
                </div>
                <div className="data-availability-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="data-availability-text">Data Availability</div>
                        <div className="data-availability-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="data_availability" id="data_availability-select">
                        <option value="ONCHAIN">OnChain</option>
                        <option value="S3">S3</option>
                        <option value="IPFS">IPFS</option>
                        <option value="LOCAL">Local</option>
                    </select>
                </div>
                <div className="data-availability-options flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="data-availability-text">Repository Name</div>
                        <div className="data-availability-description text-sm text-dark-gray">(Description to be added)</div>
                    </div>
                    <div className="flex pl-1 pr-2 border rounded-[0.7rem]">
                        <input 
                            className="input rounded-[0.7rem] text-center"
                            type="text"
                            name="repo_name"
                        />
                    </div>
                </div>
                {/* <div className="select-projects-type flex justify-between m-5 mb-0 pb-5 border-b">
                    <div className="flex items-center">Select Project type</div>
                    <Switcher 
                        isActive={isSingleOrMulti}
                        setIsActive={setIsSingleOrMulti}
                        option1="Single Player"
                        option2="Multiplayer"
                    />
                </div> */}
                {/* <div className="same-continent flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="same-continent-text">Restrict players to be on the same continent</div>
                        <div className="options-description text-sm text-dark-gray">Turn this on to ensure low latency</div>
                    </div>
                    <Switcher 
                        isActive={isSameContinent}
                        setIsActive={setIsSameContinent}
                        option1="ON"
                        option2="OFF"
                    />
                </div> */}
                {/* <div className="player-authentication flex justify-between mt-5 mr-7 ml-7 pb-5 border-b">
                    <div>
                        <div className="player-authentication-text">Player Authentication</div>
                        <div className="options-description text-sm text-dark-gray">Ensuring input authenticity from the reight players</div>
                    </div>
                    <select className="p-2 border rounded-[0.7rem]" name="autehntication" id="authentication-select">
                        <option value="Sigital_Signature">Digital Signature</option>
                        <option value="Other">Other</option>
                    </select>
                </div> */}
            </div>
            <div className="next-step flex justify-end h-16 p-3 border-t rounded-bl-[1rem] rounded-br-[1rem] bg-ll-gray">
                <div className="step flex items-center mr-3 text-dark-gray">1/4</div>
                <button className="next-button pl-3 pr-3 border border-common-gray rounded-lg active:bg-common-gray" type="button">Next</button>
                <button className="generate-code-btn pl-3 pr-3 ml-3 mr-3 border border-dark-green bg-common-green text-white rounded-lg active:bg-dark-green" type="submit">Generate Code</button>
            </div>
        </form>
    );
}