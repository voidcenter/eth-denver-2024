import RollUpConfiguration from "../steps/RollUpConfiguration";
import BusinessLogic from "../steps/BusinessLogic";
import LocalDevelopment from "../steps/LocalDevelopment";
import Deploy from "../steps/Deploy";

export default function FunsPanel({ activeComponent }: any) {
    let ComponentToRender;

    switch (activeComponent) {
      case "Roll Up Configuration":
        ComponentToRender = RollUpConfiguration;
        break;
      case "Business Logic":
        ComponentToRender = BusinessLogic;
        break;
      case "Local Development":
        ComponentToRender = LocalDevelopment;
        break;
      case "Deploy":
        ComponentToRender = Deploy;
        break;
      default:
        ComponentToRender = RollUpConfiguration;
    }

    return (
        <div className="funs-panel m-5 mt-0">
            <ComponentToRender />
        </div>
    );
}