import { CircleHelp, X } from "lucide-react";
import React from "react";
import { PropsWithChildren, useRef } from "react";

interface ModalProps {
    title: string;
    close: () => void;
    modalProps?: any;
    modalKey: string | null;
    isBig?: boolean;
}

const ModalContainer = ({
    children,
    title,
    close,
    modalProps = {},
    modalKey,
    isBig = false,
}: PropsWithChildren<ModalProps>) => {
    const modalRef = useRef(null);

    return (
        <div className={`items-center ${title ? "flex" : "hidden"} flex-col justify-center overflow-hidden fixed z-[1001] inset-0`} ref={modalRef}>
            <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
            <div className={`relative flex flex-col overflow-hidden rounded ${isBig ? "max-w-[400px] max-h-[275px]" : "max-w-[1000px] max-h-[800px]"} ${window.innerWidth >= 769 && "m-auto w-[400px]"}`}>
                <header className="flex justify-between p-5 bg-white rounded-t">
                    <div className="text-modal-title-color font-medium text-lg">{title}</div>
                    <div role="button" aria-label="close" onClick={close} style={{ cursor: "pointer" }}>
                        <X className="cursor-pointer" />
                    </div>
                </header>
                <section className="flex flex-col flex-grow flex-shrink overflow-auto p-6 bg-white">
                    {modalKey && 
                        React.Children.map(children, (child: React.ReactNode) =>
                            React.cloneElement(child as React.ReactElement, {
                                close,
                                modalKey,
                                modalRef,
                                ...modalProps
                            })
                        )}
                </section>
            </div>
        </div>
    )
};

export default ModalContainer;