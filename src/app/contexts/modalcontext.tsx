"use client"
import {createContext, PropsWithChildren, useContext, useState} from "react";

interface ModalContextProps {
    open: boolean
    setOpen: (open: boolean) => void
    setTargetNodeId: (target: string | null) => void
    targetNodeId: string | null
}

const ModalContext = createContext<ModalContextProps>({
    open: false,
    setOpen: (_: boolean) => {},
    setTargetNodeId: (_: string | null) => {},
    targetNodeId: null
})

const ModalProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false);
    const [targetNodeId, setTargetNodeId] = useState<string | null>(null);
    return (<ModalContext.Provider value={{ open, setOpen, setTargetNodeId, targetNodeId }}>
        {children}
    </ModalContext.Provider>)
}

const useModal = () => useContext(ModalContext)

export { ModalContext, ModalProvider, useModal }