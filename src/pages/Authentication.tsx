import { useState, type SyntheticEvent } from "react";
import ArrowLeft2LightIcon from '@iconify-react/iconamoon/arrow-left-2-light';
import { Box, TextField } from "@mui/material";
import { Tab } from "@mui/material";
import { TabList,TabContext, TabPanel } from "@mui/lab";
import { AuthButtons } from "../components/reusable/AuthButtons";

export const Authentication = () => {
    const list = [1,2,3,4,5];

    const [value, setValue] = useState('1');
    const [email,setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

    const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section className="w-screen justify-center box-border flex items-end bg-linear-30 h-screen from-20% from-(--secondary-bg) to-75% to-(--secondary-light)">
        <div className="w-2/6 shadow h-screen p-20 absolute right-0 top-0 bg-white">
            <div className="w-full h-full">
                <button className="border cursor-pointer flex items-center border-gray-500 mb-8 px-3 py-1 rounded-lg">
                    <ArrowLeft2LightIcon height="1.4em" />
                    Back to home
                </button>
                <div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab className="w-1/2" label="sign in" value="1" />
                                <Tab className="w-1/2" label="create new account" value="2" />
                            </TabList>
                            </Box>
                            <TabPanel className="flex w-full flex-col gap-6" value="1">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa sed quis animi aliquid illo quidem repellendus modi? Fugit cum vero odio nobis harum blanditiis.</p>
                                <TextField value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" id="outlined-basic email-1" label="Email Address" variant="outlined" />
                                <TextField value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" id="outlined-basic password-1" label="Password" variant="outlined" />
                                <AuthButtons width={"full"} color={"white"} bg={"(--secondary-bg)"} title={"Login to Dashboard"} size={"xl"}/>

                                <div className="flex justify-center items-center w-full">
                                    <p className="border border-gray-300 flex-1"></p>
                                    <p className="px-2">or</p>
                                    <p className="border flex-1 border-gray-300 "></p>
                                </div>
                                <AuthButtons width={"full"} color={"white"} bg={"(--black-bg)"} title={"Login with Google"} size={"xl"}/>
                            </TabPanel>
                            <TabPanel className="flex w-full flex-col gap-6" value="2">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa sed quis animi aliquid illo quidem repellendus modi? Fugit cum vero odio nobis harum blanditiis.</p>
                                <TextField value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" id="outlined-basic" label="Email Address" variant="outlined" />
                                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full" id="outlined-basic" label="Phone Number" variant="outlined" />
                                <TextField value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" id="outlined-basic" label="Password" variant="outlined" />
                                <TextField value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full" id="outlined-basic" label="Confirm Password" variant="outlined" />
                                <AuthButtons width={"full"} color={"white"} bg={"(--secondary-bg)"} title={"Login to Dashboard"} size={"xl"}/>

                                <div className="flex justify-center items-center w-full">
                                    <p className="border border-gray-300 flex-1"></p>
                                    <p className="px-2">or</p>
                                    <p className="border flex-1 border-gray-300 "></p>
                                </div>
                                <AuthButtons width={"full"} color={"white"} bg={"(--black-bg)"} title={"Login with Google"} size={"xl"}/>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </div>

        <div className="w-2/3 flex h-5/6 bg-white shadow overflow-hidden rounded-t-2xl">
            <div className="w-20 bg-(--black-bg) h-full flex flex-col justify-between">
                <div>
                    {
                        list.map((x, i) => (
                            <div key={i} className="text-white">
                                <span className={`w-full flex h-20 ${x === 1 ? 'bg-(--secondary-bg)' : ''} justify-center items-center text-2xl mb-1`}>{x}</span>
                            </div>
                        ))
                    }
                </div>
                <span className="w-full flex h-20 justify-center items-center text-2xl mb-1 text-white">6</span>
            </div>
            <div className="w-full flex-col flex  items-center">
                <div className="w-full h-10 bg-(--gray-bg)">
                    
                </div>
                <br />
                <div className="w-1/2 mb-10 h-10 bg-(--gray-bg) rounded-lg border border-gray-400">

                </div>
                <div className="w-full h-full flex gap-20 px-10">
                    <div className="w-1/2 rounded-sm h-full px-8 py-8 bg-(--secondary-bg)">
                        <div className="w-full h-full bg-(--secondary-light)">
                            <p className="text-center pt-4 text-2xl">RESUME</p>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-2 rounded-sm bg-(--black-bg) py-6 px-5">
                        <div className="w-full h-40 bg-(--gray-bg)">

                        </div>
                        <div className="w-full h-40 bg-(--gray-bg)">

                        </div>
                        <div className="w-full h-40 bg-(--gray-bg)">

                        </div>
                        <div className="w-full h-40 bg-(--gray-bg)">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
