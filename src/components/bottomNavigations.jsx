import { BarChart, CreditCard, Group, Home, Settings, Wallet } from "lucide-react";
import { useState } from "react";


const BottomNavigations = ()=>{

    const [activeTab, SetActiveTab] = useState("home")
    return(
        <nav className="lg:hidden fixed bottom-0 w-full flex items-center justify-center gap-7 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-white">
            <span 
                onClick={()=>SetActiveTab("home")}
                className="flex flex-col items-center justify-center">
                <Home className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Home</span>
            </span>
            <span 
                onClick={()=>SetActiveTab("wallet")}
                className="flex flex-col items-center justify-center">
                <Wallet className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Wallet</span>
            </span>
            <span 
                onClick={()=>SetActiveTab("bills")}
                className="flex flex-col items-center justify-center">
                <CreditCard className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Bills</span>
            </span>
            <span className="flex flex-col items-center justify-center">
                <Group className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Ajo</span>
            </span>
            <span className="flex flex-col items-center justify-center">
                <BarChart className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Analytics</span>
            </span>
            <span className="flex flex-col items-center justify-center">
                <Settings className="w-6 h-6"/>
                <span className="text-xs text-gray-600">Settings</span>
            </span>
        </nav>
    );
}

export default BottomNavigations;