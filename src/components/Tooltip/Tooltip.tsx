import { CircleHelp, Info } from "lucide-react";
import { useState } from "react";

type TooltipProps = {
    text: string;
};

const Tooltip = ({ text }: TooltipProps) => {
    const [showTip, setShowTip] = useState(false);

    return (
        <div className="relative">
            {showTip && 
                <div className={"absolute text-center z-[1000] rounded border-[#D6D6D6] border p-2 text-xs overflow-hidden left-0 shadow-md w-[15.625rem] max-w-[25rem] max-h-[13.5rem] bottom-7"}>
                    {text}
                </div>
            }
            <span
                onMouseEnter={() => setShowTip(true)}
                onMouseLeave={() => setShowTip(false)}
                className="cursor-pointer"
            >
                <Info size={16} color="#ccc"/>
            </span>
        </div>
    );
};

export default Tooltip;