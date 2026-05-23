import { Button, Card, DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import Logo from "../components/logo";
import BottomNavigations from "../components/bottomNavigations";
import ms2dwrld from "../assets/ms2dwrld.jpg"
import { useState } from "react";
import { Home, Wallet, BarChart, FileText, Phone, CreditCard, GroupIcon, TimerIcon, Calendar1Icon, HandCoins, Plus, Users, Settings, BadgeCheck, LogOut } from "lucide-react";

const DashBoard = ()=>{


    const [activeTab, SetActiveTab] = useState("Home")
    const [ammt, setammt] = useState(1000)
    const [enabled, setEnabled] = useState(false)

    return(
        <div className="min-h-screen bg-gray-100 overflow-hidden">
{/* ===========Dashboard starts=================== */}
            <div className="lg:flex block lg:pb-0 pb-10">
                <div className="lg:h-screen pb-30 shadow-b shadow-lg bg-white flex-[0.23] lg:block hidden">
                    <div className="p-5 flex gap-3 shadow-b shadow-lg">
                        <Logo/>
                        <div>
                            <h1 className="text-xl font-bold">Ajo Biller</h1>
                            <p className="text-gray-500">Smart Banking</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <ul className="w-full flex flex-col gap-1 text-gray-600">
                            <li 
                                onClick={()=>SetActiveTab("Home")}
                                className={`cursor-pointer flex gap-2 hover:bg-green-100 hover:text-green-900 p-3 rounded-lg ${activeTab==="Home" ? "bg-green-100" : "bg-trasnparent"}`}>
                                <Home className="w-5 h-5"/>
                                Home</li>
                            <li 
                                onClick={()=>SetActiveTab("wallet")}
                                className={`cursor-pointer flex gap-2 hover:bg-green-100 hover:text-green-900 p-3 rounded-lg ${activeTab==="wallet" ? "bg-green-100" : "bg-trasnparent"}`}>
                                <Wallet className="w-5 h-5"/>
                                Wallet</li>
                            <li 
                                onClick={()=>SetActiveTab("bills")}
                                className={`cursor-pointer flex gap-2 hover:bg-green-100 hover:text-green-900 p-3 rounded-lg ${activeTab==="bills" ? "bg-green-100" : "bg-trasnparent"}`}>
                                <FileText className="w-5 h-5"/>
                                Bills</li>
                            <li 
                                onClick={()=>SetActiveTab("ajoGroups")}
                                className={`cursor-pointer flex gap-2 hover:bg-green-100 hover:text-green-900 p-3 rounded-lg ${activeTab==="ajoGroups" ? "bg-green-100" : "bg-trasnparent"}`}>
                                <Users className="w-5 h-5"/>
                                Ajo Groups</li>
                            <li 
                                onClick={()=>SetActiveTab("settings")}
                                className={`cursor-pointer flex gap-2 hover:bg-green-100 hover:text-green-900 p-3 rounded-lg ${activeTab==="settings" ? "bg-green-100" : "bg-trasnparent"}`}>
                                <Settings className="w-5 h-5"/>
                                Settings</li>
                        </ul>
                    </div>
                </div>
                {
                    activeTab === "Home" && 
                <div className="flex flex-col flex-1 gap-2 py-20 lg:py-0">
                    <div className="fixed z-2000 w-full top-0 lg:relative lg:p-5 p-3 flex items-center justify-between bg-white shadow-b shadow-lg">
                        <div>
                            <h1 className="lg:text-xl font-bold">Dashboard</h1>
                            <p className="text-gray-500 lg:text-lg text-sm">Welcome back, Hammed!</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="text-xl ri-notification-2-fill"></i>
                            <img src={ms2dwrld} className="w-8 h-8 rounded-full"/>
                            <div className="lg:flex hidden items-end flex-col">
                                <h1 className="text-xl font-bold">Hammed Omoniyi</h1>
                                <p className="text-gray-500">Premium User</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 text-white">
                        <div className="flex w-full justify-between bg-gradient-to-tr from-green-900 via-cyan-800 to-green-900 p-5 rounded-xl">
                            <div>
                                <p className="text-white">Total Balance</p>
                                <h1 className="lg:text-4xl text-xl font-bold">₦245,680.50</h1>
                            <div className="flex gap-7 mt-3">
                                    <div>
                                        <p className="text-white">Available</p>
                                        <h1 className="font-medium">₦240,680.50</h1>
                                    </div>

                                    <div>
                                        <p className="text-white">Pending</p>
                                        <h1 className="font-medium">₦5,000.00</h1>
                                    </div>
                            </div>
                            </div>

                            <div className="flex flex-col gap-3 items-cener justify-center text-center">
                                <i className="bg-gradient-to-tr from-green-600 via-cyan-500 to-green-600 py-2 px-2 rounded-full text-5xl ri-wallet-3-line"></i>
                                <p className="text-white">****4521</p>
                            </div>
                        </div>
                    </div>
{/* =============quick actions start====================== */}
                    <div className="p-5 py-0">
                        <h1 className="text-xl font-medium mb-4">Quick Actions</h1>
                        <div className="grid lg:grid-cols-4 gap-5">
                            <div className="p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-green-100 text-green-800 rounded-xl px-4 ri-add-line"></i>
                                <h1 className="text-xl font-medium">Fund Wallet</h1>
                                <p className="text-gray-500">Add money to wallet</p>
                            </div>

                            <div className="p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-orange-100 text-orange-800 rounded-xl px-4 ri-arrow-up-line"></i>
                                <h1 className="text-xl font-medium">Withdraw</h1>
                                <p className="text-gray-500">Transfer to Bank</p>
                            </div>

                            <div className="p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-purple-100 text-purple-800 rounded-xl px-4 ri-bill-fill"></i>
                                <h1 className="text-xl font-medium">Pay Bills</h1>
                                <p className="text-gray-500">Utilities & Services</p>
                            </div>

                            <div className="p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-indigo-100 text-indigo-800 rounded-xl px-4 ri-group-2-fill"></i>
                                <h1 className="text-xl font-medium">Join Ajo</h1>
                                <p className="text-gray-500">Savings groups</p>
                            </div>
                        </div>
                    </div>
{/* ==============quick actions end========================= */}
                    <div className="p-5">
                        <div className="lg:flex gap-8">
                            <Card
                                className="flex-1"
                                title={<span className="text-xl font-medium">Recent Transactions</span>}
                            >
                                <p className="text-gray-500 text-xl text-center">Coming Soon!</p>
                            </Card>

                            <div className="flex-1 flex flex-col gap-5 mt-5 lg:mt-0">
                                <Card
                                title={<span className="text-xl font-medium">Savings Summary</span>}
                            >
                                <p className="text-gray-500 text-xl text-center">Coming Soon!</p>
                            </Card>
                            <Card
                                title={<span className="text-xl font-medium">Upcoming Bills</span>}
                            >
                                <p className="text-gray-500 text-xl text-center">Coming Soon!</p>
                            </Card>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {
                    activeTab === "wallet" && 
                    <div className="flex flex-col flex-1 gap-2 py-20 lg:py-0">
                    <div className="fixed z-2000 w-full top-0 lg:relative lg:p-5 p-3 flex items-center justify-between bg-white shadow-b shadow-lg">
                        <div>
                            <h1 className="lg:text-xl font-bold">Wallet</h1>
                            <p className="text-gray-500 lg:text-lg text-sm lg:block hidden">Manage your wallet balance and transactions</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="text-xl ri-notification-2-fill"></i>
                            <img src={ms2dwrld} className="w-8 h-8 rounded-full"/>
                            <div className="lg:flex hidden items-end flex-col">
                                <h1 className="text-xl font-bold">Hammed Omoniyi</h1>
                                <p className="text-gray-500">Premium User</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 text-white">
                        <div className="flex w-full justify-between bg-gradient-to-tr from-green-900 via-cyan-800 to-green-900 p-5 rounded-xl">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <Wallet className="w-20 h-20 text-green-100 bg-gradient-to-tr from-green-800 p-3 via-cyan-700 to-green-800 rounded-full"/>
                                    <div>
                                        <h1 className="text-xl">Main Wallet</h1>
                                        <p>Account: ****4521</p>
                                    </div>
                                </div>
                                <p className="text-white text-xl">Available Balance</p>
                                <h1 className="lg:text-6xl text-xl font-bold mb-5">₦245,680.50</h1>
                            <div className="flex gap-7 mt-3">
                                    <div>
                                        <p className="text-white">Total Inflow</p>
                                        <h1 className="font-medium text-xl text-green-200">+ ₦240,680.50</h1>
                                    </div>

                                    <div>
                                        <p className="text-white">Total Outflow</p>
                                        <h1 className="font-medium text-xl text-rose-200">- ₦5,000.00</h1>
                                    </div>
                            </div>
                            </div>

                            <div className="flex flex-col gap-3 items-cener justify-center text-center">
                               <BarChart className="text-xl w-20 h-20 rounded-full p-4 bg-gradient-to-tr from-green-600 via-cyan-500 to-green-600" />
                                <p className="text-white">****4521</p>
                            </div>
                        </div>

                        <div className="flex gap-4 text-black mt-7">
                             <div className="w-[250px] p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-green-100 text-green-800 rounded-xl px-4 ri-add-line"></i>
                                <h1 className="text-xl font-medium">Fund Wallet</h1>
                                <p className="text-gray-500">Add money to wallet</p>
                            </div>

                            <div className="w-[250px] p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-orange-100 text-orange-800 rounded-xl px-4 ri-arrow-up-line"></i>
                                <h1 className="text-xl font-medium">Withdraw</h1>
                                <p className="text-gray-500">Transfer to Bank</p>
                            </div>
                        </div>

                        <Card
                            className="!mt-6"
                            title={
                                <div className="flex justify-between p-5">
                                    <div>
                                        <span className="text-xl font-bold">Transactions</span>
                                        <p className="text-gray-400">All your wallet transactions</p>
                                    </div>
                                    <Select 
                                    size="large"
                                    placeholder="All Transactions">
                                        <Select.Option value="thisWeek">This week</Select.Option>
                                        <Select.Option value="thisWeek">This Month</Select.Option>
                                    </Select>
                                </div>
                            }
                        >

                        </Card>
                    </div>
                    </div>
                }
                {
                    activeTab === "bills" &&
                    <div className="flex flex-col flex-1 gap-2 py-20 lg:py-0">
                    <div className="fixed z-2000 w-full top-0 lg:relative lg:p-5 p-3 flex items-center justify-between bg-white shadow-b shadow-lg">
                        <div>
                            <h1 className="lg:text-xl font-bold">Bill Payments</h1>
                            <p className="text-gray-500 lg:text-lg text-sm lg:block hidden">Pay your bills quickly and securely</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="text-xl ri-notification-2-fill"></i>
                            <img src={ms2dwrld} className="w-8 h-8 rounded-full"/>
                            <div className="lg:flex hidden items-end flex-col">
                                <h1 className="text-xl font-bold">Hammed Omoniyi</h1>
                                <p className="text-gray-500">Premium User</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 text-white">
                        <div className="flex w-full justify-between bg-gradient-to-tr from-green-900 via-cyan-800 to-green-900 p-5 rounded-xl">
                            <div>
                                <p className="text-white text-xl">Available Balance</p>
                                <h1 className="lg:text-4xl text-xl font-bold mb-5">₦245,680.50</h1>
                            </div>

                            <div className="flex flex-col gap-3 items-cener justify-center text-center">
                               <i className="text-4xl py-3 bg-gradient-to-tr from-green-800 via-cyan-700 to-green-800 rounded-full px-4 ri-wallet-line"></i>
                            </div>
                        </div>

                        <div className="flex gap-4 text-black mt-7">
                             <div className="w-[200px] p-5 flex gap-1 flex-col items-center justify-center text-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-green-100 text-green-800 rounded-xl px-4 ri-smartphone-line"></i>
                                <h1 className="text-lg font-medium">Airtime</h1>
                                <p className="text-gray-500">Buy airtime for any network</p>
                            </div>

                            <div className="w-[200px] text-center justify-center p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-indigo-100 text-indigo-800 rounded-xl px-4 ri-wifi-line"></i>
                                <h1 className="text-lg font-medium">Data</h1>
                                <p className="text-gray-500">Purchase data bundles</p>
                            </div>

                            <div className="w-[200px] text-center justify-center p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-yellow-100 text-yellow-500 rounded-xl px-4 ri-flashlight-fill"></i>
                                <h1 className="text-lg font-medium">Electricity</h1>
                                <p className="text-gray-500">Pay electricity bills</p>
                            </div>

                            <div className="w-[200px] text-center justify-center p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-violet-100 text-violet-800 rounded-xl px-4 ri-tv-2-line"></i>
                                <h1 className="text-lg font-medium">TV</h1>
                                <p className="text-gray-500">Cable TV subscriptions</p>
                            </div>

                            <div className="w-[200px] text-center justify-center p-5 flex gap-1 flex-col items-center bg-white rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                                <i className="text-2xl p-3 bg-rose-100 text-rose-800 rounded-xl px-4 ri-global-line"></i>
                                <h1 className="text-lg font-medium">Internet</h1>
                                <p className="text-gray-500">Internet subscriptions</p>
                            </div>
                        </div>

                        <div className="flex mt-6 gap-5">
                            <div className="text-black bg-white w-fit p-5 rounded-xl">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-lg font-medium">Airtime Purchase</h1>
                                <p className="text-sm text-gray-500 mb-3">Select Network</p>
                            </div>
                            <Form>
                                <div className="flex gap-5 items-center">
                                    <div className="hover:border-violet-500 cursor-pointer flex flex-col items-center justify-center gap-1 border border-gray-200 p-5 rounded-lg px-13 w-fit">
                                        <div className="w-10 h-10 bg-rose-500 rounded-lg"></div>
                                        <p className="text-gray-500 text-sm font-medium">Airtel</p>
                                    </div>

                                    <div className="hover:border-violet-500 cursor-pointer flex flex-col items-center justify-center gap-1 border border-gray-200 p-5 rounded-lg px-13 w-fit">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg"></div>
                                        <p className="text-gray-500 text-sm font-medium">MTN</p>
                                    </div>

                                    <div className="hover:border-violet-500 cursor-pointer flex flex-col items-center justify-center gap-1 border border-gray-200 p-5 rounded-lg px-13 w-fit">
                                        <div className="w-10 h-10 bg-yellow-500 rounded-lg"></div>
                                        <p className="text-gray-500 text-sm font-medium">Glo</p>
                                    </div>

                                    <div className="hover:border-violet-500 cursor-pointer flex flex-col items-center justify-center gap-1 border border-gray-200 p-5 rounded-lg px-13 w-fit">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
                                        <p className="text-gray-500 text-sm font-medium">9mobile</p>
                                    </div>
                                </div>
                                <Form.Item>
                                    <label className="font-medium">Phone Number</label>
                                    <div className="flex items-center border border-gray-200 p-1 rounded-lg">
                                        <Phone className="w-4 h-4 ml-2 text-gray-500"/>
                                        <Input 
                                            className="!w-full"
                                            placeholder="+234 907 584 1361"
                                            bordered={false}
                                        />
                                    </div>
                                </Form.Item>

                                 <Form.Item>
                                    <label className="font-medium">Ammount</label>
                                    <div className="flex items-center border border-gray-200 p-1 rounded-lg">
                                        <span className="text-lg font-medium text-gray-500 ml-2">₦</span>
                                        <InputNumber 
                                            placeholder="1,000"
                                            value={ammt}
                                            className="!w-full"
                                            bordered={false}
                                        />
                                    </div>
                                    <div className="flex gap-4 mt-3">
                                        <div 
                                            onClick={()=>setammt(100)}
                                            className="bg-gray-200 w-fit p-2 py-1 cursor-pointer">₦100</div>
                                        <div 
                                            onClick={()=>setammt(500)}
                                            className="bg-gray-200 w-fit p-2 py-1 cursor-pointer">₦500</div>
                                        <div 
                                            onClick={()=>setammt(1000)}
                                            className="bg-gray-200 w-fit p-2 py-1 cursor-pointer">₦1000</div>
                                        <div 
                                            onClick={()=>setammt(2000)}
                                            className="bg-gray-200 w-fit p-2 py-1 cursor-pointer">₦2000</div>
                                    </div>
                                </Form.Item>

                                <Button 
                                    size="large"
                                    bordered={false}
                                    className="w-full !text-white !bg-blue-600 rounded-lg flex items-center gap-2"
                                    htmlType="submit">
                                    <CreditCard className="w-6 h-6"/>
                                    Pay Bill
                                </Button>
                            </Form>
                            </div>

                            <div className="flex gap-6 flexx-1 flex-col w-full">
                                <Card
                                    className="h-fit"
                                    title={<span>Recent Bills</span>}
                                    >
                                    <p className="text-gray-500 text-center">Coming soon!</p>
                                 </Card>

                                 <Card
                                    className="h-fit"
                                    title={<span>This Month</span>}
                                    >
                                    <p className="text-gray-500 text-center">Coming soon!</p>
                                 </Card>
                            </div>
                        </div>
                    </div>
                    </div>
                }

                {
                    activeTab === "ajoGroups" &&
                <div className="flex flex-col flex-1 gap-2 py-20 lg:py-0">
                    <div className="fixed z-2000 w-full top-0 lg:relative lg:p-5 p-3 flex items-center justify-between bg-white shadow-b shadow-lg">
                        <div>
                            <h1 className="lg:text-xl font-bold">Ajo Groups</h1>
                            <p className="text-gray-500 lg:text-lg text-sm">Join savings groups and grow your money together</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="text-xl ri-notification-2-fill"></i>
                            <img src={ms2dwrld} className="w-8 h-8 rounded-full"/>
                            <div className="lg:flex hidden items-end flex-col">
                                <h1 className="text-xl font-bold">Hammed Omoniyi</h1>
                                <p className="text-gray-500">Premium User</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="grid lg:grid-cols-4">
                            <div className="bg-white w-[250px] p-5 rounded-lg flex justify-between">
                               <div className="flex flex-col items-start gap-2">
                                    <GroupIcon className="p-1 rounded-lg w-10 h-10 text-violet-500 bg-violet-100"/>
                                    <h1 className="text-2xl font-bold">8</h1>
                                    <p className="text-gray-500 font-medium">Active Groups</p>
                               </div>
                               <p className="text-green-500 text-sm font-medium">+2 This month</p>
                            </div>

                            <div className="bg-white w-[250px] p-5 rounded-lg flex justify-between">
                               <div className="flex flex-col items-start gap-2">
                                    <HandCoins className="p-1 rounded-lg w-10 h-10 text-green-500 bg-green-100"/>
                                    <h1 className="text-2xl font-bold">₦485,000</h1>
                                    <p className="text-gray-500 font-medium">Total Savings</p>
                               </div>
                               <p className="text-green-500 text-sm font-medium">+₦45k</p>
                            </div>

                            <div className="bg-white w-[250px] p-5 rounded-lg flex justify-between">
                               <div className="flex flex-col items-start gap-2">
                                    <Calendar1Icon className="p-1 rounded-lg w-10 h-10 text-yellow-500 bg-yellow-100"/>
                                    <h1 className="text-2xl font-bold">₦120,000</h1>
                                    <p className="text-gray-500 font-medium">Next payout</p>
                               </div>
                               <p className="text-yellow-500 text-sm font-medium">In 5 days</p>
                            </div>

                            <div className="bg-white w-[250px] p-5 rounded-lg flex justify-between">
                               <div className="flex flex-col items-start gap-2">
                                    <TimerIcon className="p-1 rounded-lg w-10 h-10 text-rose-500 bg-rose-100"/>
                                    <h1 className="text-2xl font-bold">₦25,000</h1>
                                    <p className="text-gray-500 font-medium">Contribution Due</p>
                               </div>
                               <p className="text-rose-500 text-sm font-medium">Due today!</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-xl font-bold">Available Ajo Groups</h1>
                                    <p className="text-gray-500">Join existing groups or create your own</p>
                                </div>
                                <Button className="flex gap-1 items-center !font-medium !bg-violet-800 !text-white" 
                                    bordered={false}
                                    size="large">
                                    <Plus className="w-5 h-5"/>
                                    Create New Ajo Group
                                </Button>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6">
                                <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i className="text-xl bg-gradient-to-br from-rose-500 to-violet-600 text-white p-2 rounded-xl px-3 py-2 ri-briefcase-fill"></i>
                                            <div>
                                                <h1 className="tex-xl font-bold">Office Colleagues</h1>
                                                <p className="text-gray-500 text-sm">Created by ms2dwrld</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-green-500 bg-green-100 p-2 rounded-lg px-2">Active</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Contribution</p>
                                        <h1 className="font-bold">₦15,000</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Frequency</p>
                                        <h1 className="font-bold">Monthly</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Members</p>
                                        <h1 className="font-bold">8/10</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Duration</p>
                                        <h1 className="font-bold">10 months</h1>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Progress</p>
                                            <h1 className="font-bold text-sm">3/10 rounds</h1>
                                        </div>
                                        <div className="bg-gray-300 rounded-lg w-full rounded-lg h-[6px]">
                                            <div 
                                                style={{width: `30%`}}
                                                className="w-full h-full bg-violet-600 w-[100px] rounded-lg"></div>
                                        </div>
                                    </div>

                                    <Button
                                        className="mt-3 !bg-violet-100 !text-violet-600 !font-medium"
                                        size="large"
                                    >View Details</Button>
                                </div>

                                <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i className="text-xl bg-green-600 text-white p-2 rounded-xl px-3 py-2 ri-briefcase-fill"></i>
                                            <div>
                                                <h1 className="tex-xl font-bold">Family Savings</h1>
                                                <p className="text-gray-500 text-sm">Created by Mary Smith</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-green-500 bg-green-100 p-2 rounded-lg px-2">Active</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Contribution</p>
                                        <h1 className="font-bold">₦25,000</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Frequency</p>
                                        <h1 className="font-bold">Monthly</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Members</p>
                                        <h1 className="font-bold">6/6</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Duration</p>
                                        <h1 className="font-bold">6 months</h1>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Progress</p>
                                            <h1 className="font-bold text-sm">4/6 rounds</h1>
                                        </div>
                                        <div className="bg-gray-300 rounded-lg w-full rounded-lg h-[6px]">
                                            <div 
                                                style={{width: `30%`}}
                                                className="w-full h-full bg-green-600 w-[100px] rounded-lg"></div>
                                        </div>
                                    </div>

                                    <Button
                                        className="mt-3 !bg-green-100 !text-green-600 !font-medium"
                                        size="large"
                                    >View Details</Button>
                                </div>

                                <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i className="text-xl bg-violet-600 text-white p-2 rounded-xl px-3 py-2 ri-briefcase-fill"></i>
                                            <div>
                                                <h1 className="tex-xl font-bold">University Friends</h1>
                                                <p className="text-gray-500 text-sm">Created by Alex Johnson</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-yellow-500 bg-gray-100 p-2 rounded-lg px-2">Recruiting</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Contribution</p>
                                        <h1 className="font-bold">₦10,000</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Frequency</p>
                                        <h1 className="font-bold">Bi-Weekly</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Members</p>
                                        <h1 className="font-bold">4/8</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Duration</p>
                                        <h1 className="font-bold">16 Weeks</h1>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Progress</p>
                                            <h1 className="font-bold text-sm">4/8 members</h1>
                                        </div>
                                        <div className="bg-gray-300 rounded-lg w-full rounded-lg h-[6px]">
                                            <div 
                                                style={{width: `30%`}}
                                                className="w-full h-full bg-yellow-500 w-[100px] rounded-lg"></div>
                                        </div>
                                    </div>

                                    <Button
                                        className="mt-3 !bg-yellow-100 !text-yellow-600 !font-medium"
                                        size="large"
                                    >View Details</Button>
                                </div>

                                <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i className="text-xl bg-rose-600 text-white p-2 rounded-xl px-3 py-2 ri-heart-fill"></i>
                                            <div>
                                                <h1 className="tex-xl font-bold">Ladies Circle</h1>
                                                <p className="text-gray-500 text-sm">Created by Grace Adebayo</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-yellow-500 bg-gray-100 p-2 rounded-lg px-2">Recruiting</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Contribution</p>
                                        <h1 className="font-bold">₦20,000</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Frequency</p>
                                        <h1 className="font-bold">Monthly</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Members</p>
                                        <h1 className="font-bold">12/12</h1>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500 text-sm">Duration</p>
                                        <h1 className="font-bold">12 months</h1>
                                    </div>

                                    <div className="mt-5 flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Progress</p>
                                            <h1 className="font-bold text-sm">7/12 members</h1>
                                        </div>
                                        <div className="bg-gray-300 rounded-lg w-full rounded-lg h-[6px]">
                                            <div 
                                                style={{width: `30%`}}
                                                className="w-full h-full bg-rose-500 w-[100px] rounded-lg"></div>
                                        </div>
                                    </div>

                                    <Button
                                        className="mt-3 !bg-rose-100 !text-rose-600 !font-medium"
                                        size="large"
                                    >View Details</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {
                    activeTab === "settings" &&
                    <div className="flex flex-col flex-1 gap-2 py-20 lg:py-0">
                    <div className="fixed z-2000 w-full top-0 lg:relative lg:p-5 p-3 flex items-center justify-between bg-white shadow-b shadow-lg">
                        <div>
                            <h1 className="lg:text-xl font-bold">Profile & Settings</h1>
                            <p className="text-gray-500 lg:text-lg text-sm lg:block hidden">Manage your account preferences and security</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="text-xl ri-notification-2-fill"></i>
                            <img src={ms2dwrld} className="w-8 h-8 rounded-full"/>
                            <div className="lg:flex hidden items-end flex-col">
                                <h1 className="text-xl font-bold">Hammed Omoniyi</h1>
                                <p className="text-gray-500">Premium User</p>
                            </div>
                        </div>
                    </div>

                        <div className="p-5">
                            <div className="flex items-center justify-between bg-white p-7 rounded-lg">
                                <div className="flex gap-4 items-center">
                                    <div className="flex items-center flex-col relative">
                                        <img src={ms2dwrld} className="w-23 h-23 rounded-full"/>
                                        <i className="bg-violet-600 text-white rounded-full absolute cursor-pointer bottom-[-6px] right-[-1px] py-1 px-2 text-xl ri-camera-fill"></i>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start">
                                        <h1 className="text-xl font-bold">Hammed Omoniyi Omotosho</h1>
                                        <p className="text-gray-500 font-medium">ms2dwrld@gmail.com</p>
                                        <div className="flex gap-3">
                                            <p className="flex items-center gap-1 text-green-600 bg-green-100 rounded-lg font-medium py-1 px-3">
                                                <BadgeCheck className="text-green-500 w-4 h-4"/>
                                                Verified Account</p>
                                            <p className="text-violet-600 bg-violet-100 rounded-lg font-medium py-1 px-5">Premium Member</p>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    size="large"
                                    className="!bg-violet-600 !text-white !font-medium"
                                >Edit Profile</Button>
                            </div>
                            <div className="mt-6 flex gap-4">
                                <div className="flex flex-col gap-6">
                                    <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-xl font-bold">Personal Infomation</h1>
                                        <p className="text-violet-600 font-medium">Edit</p>
                                    </div>
                                    <Form className="grid grid-cols-2 gap-x-6">
                                        <Form.Item>
                                            <label htmlFor="fname" className="font-medium">First Name</label>
                                            <Input 
                                                size="large"
                                                value="Hammed"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <label htmlFor="lname" className="font-medium">Last Name</label>
                                            <Input 
                                                size="large"
                                                value="Omotosho"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <label htmlFor="email" className="font-medium">Email Address</label>
                                            <Input 
                                                size="large"
                                                value="ms2dwrld@gmail.com"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <label htmlFor="pnumber" className="font-medium">Phone Number</label>
                                            <Input 
                                                size="large"
                                                value="+234 907 584 1361"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <label htmlFor="dob" className="font-medium">Date of Birth</label>
                                            <DatePicker size="large" className="w-full"/>
                                        </Form.Item>

                                        <Form.Item>
                                            <label htmlFor="gender" className="font-medium">Gender</label>
                                            <Select size="large" 
                                                value="male">
                                                <Select.Option value="female">Female</Select.Option>
                                                <Select.Option value="male">Male</Select.Option>
                                                <Select.Option value="custom">Custom</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Form>
                                </div>

                                <div className="bg-white p-6 rounded-lg flex flex-col gap-7">
                                    <h1 className="text-xl font-bold">Security Settings</h1>
                                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                                        <div>
                                            <h1 className="font-medium">Change Password</h1>
                                            <p className="text-gray-500 text-sm">Update your password to keep your account secure</p>
                                            <p className="text-gray-500 mt-2 text-sm">Last changed: 2 months ago</p>
                                        </div>
                                        <Button
                                            size="large"
                                            className="!bg-violet-600 !rounded-lg !text-white !font-medium"
                                        >Change</Button>
                                    </div>

                                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                                        <div>
                                            <h1 className="font-medium">Two-Factor Authentication</h1>
                                            <p className="text-gray-500 text-sm">Add an extra layer of security to your account</p>
                                        </div>
                                        <Switch
                                            className="!bg-violet-600"
                                            checked={enabled}
                                            onChange={(checked)=>setEnabled(checked)}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                                        <div>
                                            <h1 className="font-medium">Login Alerts</h1>
                                            <p className="text-gray-500 text-sm">Get notified of suspicious login attempts</p>
                                        </div>
                                        <Switch
                                            className="!bg-violet-600"
                                            checked={enabled}
                                            onChange={(checked)=>setEnabled(checked)}
                                        />
                                    </div>
                                </div>
                                </div>

                                <div className="flex flex-col gap-6 h-fit flex-1">
                                    <div className="bg-white w-full rounded-lg p-5 flex flex-col gap-5">
                                        <h1 className="text-xl font-bold">KYC Verification</h1>
                                        <div className="flex w-full items-center justify-between  border border-gray-300 rounded-lg p-3">
                                            <div className="flex gap-2">
                                                <i className="text-2xl bg-green-100 text-green-500 py-2 px-3 rounded-lg ri-id-card-fill"></i>
                                                <div>
                                                    <h1 className="font-medium">Identity</h1>
                                                    <p className="text-green-500 text-sm">Verified</p>
                                                </div>
                                            </div>
                                            <i className="text-green-500 text-xl ri-verified-badge-fill"></i>
                                        </div>
                                        <div className="flex w-full items-center justify-between  border border-gray-300 rounded-lg p-3">
                                            <div className="flex gap-2">
                                                <i className="text-2xl bg-green-100 text-green-500 py-2 px-3 rounded-lg ri-home-fill"></i>
                                                <div>
                                                    <h1 className="font-medium">Address</h1>
                                                    <p className="text-green-500 text-sm">Verified</p>
                                                </div>
                                            </div>
                                            <i className="text-green-500 text-xl ri-verified-badge-fill"></i>
                                        </div>
                                        <div className="flex w-full items-center justify-between bg-yellow-100  border border-gray-300 rounded-lg p-3">
                                            <div className="flex gap-2">
                                                <i className="text-2xl bg-yellow-200 text-yellow-500 py-2 px-3 rounded-lg ri-bill-fill"></i>
                                                <div>
                                                    <h1 className="font-medium">Income</h1>
                                                    <p className="text-yellow-500 text-sm">Pending</p>
                                                </div>
                                            </div>
                                            <p className="text-sm font-medium text-violet-600 cursor-pointer">Upload</p>
                                        </div>

                                        <div className="flex w-full items-center justify-between bg-violet-100  border border-gray-300 rounded-lg p-3">
                                            <div className="flex gap-2">
                                                <i className="text-2xl bg-violet-200 text-violet-500 py-2 px-3 rounded-lg ri-shield-check-fill"></i>
                                                <div>
                                                    <h1 className="font-medium">Level 2 verified </h1>
                                                    <p className="text-violet-600 text-sm">Transaction limit: ₦1,000,000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
                                        <h1 className="text-xl font-bold">Account Statistics</h1>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Member Since</p>
                                            <h1 className="font-medium">Jan 2025</h1>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Total Transations</p>
                                            <h1 className="font-medium">1,247</h1>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Success Rate</p>
                                            <h1 className="font-medium text-green-600">99.8%</h1>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Account Type</p>
                                            <h1 className="font-medium text-violet-600">Premium</h1>
                                        </div>
                                    </div>

                                    <div className="bg-white p-5 rounded-lg flex flex-col gap-4">
                                        <h1 className="text-xl font-bold">Preferences</h1>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Email Notifications</p>
                                        <Switch
                                            className="!bg-violet-600"
                                            checked={enabled}
                                            onChange={(checked)=>setEnabled(checked)}
                                        />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">SMS Alerts</p>
                                        <Switch
                                            className="!bg-violet-600"
                                            checked={enabled}
                                            onChange={(checked)=>setEnabled(checked)}
                                        />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-sm">Marketing Emails</p>
                                        <Switch
                                            className="!bg-violet-600"
                                            checked={enabled}
                                            onChange={(checked)=>setEnabled(checked)}
                                        />
                                        </div>

                                        <Button
                                            className="!font-medium !text-rose-600"
                                            size="large"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Sign Out</Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                }

            </div>
{/* ====================Dashboard ends======================== */}
            <BottomNavigations/>
        </div>
    );
}

export default DashBoard;