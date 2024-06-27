import { Eye, MessageSquare, Pencil, Trash2, UserCheck, Users } from "lucide-react"
import Image from "next/image"

export default function Job() {
    return(
        <main className="flex justify-between h-full">
            {/* left */}
            <div className=" py-8  w-full">
               <div className="border-b px-8 pb-6 md:px-24">
                    <div className="flex flex-col md:flex-row md:items-center text-xs gap-4 mb-8">
                            <h1 className=" text-2xl font-semibold">
                                Senior Product Designer
                            </h1>
                            <p className="text-[#888888]">· posted 2 days ago</p>
                            <button className="bg-[#EBFDF3] text-[#067647] border rounded-full px-1 shadow-md w-fit inline-flex items-center gap-1">
                                <Image src={'/dot.svg'} width={100} height={100} alt="dot" className="w-2 h-2"/>
                                Open
                            </button>
                    </div>

                    <div className="flex items-center text-[#5D5D5D] text-base gap-4">
                        <div className="flex items-center gap-2">
                                <Image src={'/location.svg'} width={100} height={100} alt="location" className="w-4 h-4" />
                                <h1>Delware, USA</h1>
                        </div>
                        <p className="text-[#8888]">·</p>
                        <div className="flex items-center gap-2">
                            <Image src={'/coins-staked.png'} width={100} height={100} alt="location" className="w-4 h-4" />
                            <h1>$300k-$400k</h1>
                        </div>
                    </div>
               </div>

               <div className=" flex flex-col lg:flex-row gap-12 lg:gap-32  border-b px-8 py-8 md:px-24 text-[#000]">
                    <div className="inline-flex gap-3 flex-col">
                        <h1 className="text-[#6E6D6D]">Skills Required</h1>
                        <div className="inline-flex w-fit gap-2 p-1 px-2 hover:bg-[#eeeded] transition-all duration-300 hover:cursor-pointer rounded-lg items-center border border-[#c9c9c9]">
                            <Image src={'/figma.png'} width={1000} height={1000} alt="location" className="w-4 h-4" />
                            <h1>Figma</h1>
                        </div>
                        <div className="inline-flex w-fit gap-2 p-1 px-2 hover:bg-[#eeeded] transition-all duration-300 hover:cursor-pointer  rounded-lg items-center border border-[#c9c9c9]">
                            <Image src={'/adobe.png'} width={1000} height={1000} alt="location" className="w-4 h-4" />
                            <h1>Adobe Illustrator</h1>
                        </div>
                        <div className="    inline-flex w-fit gap-2 p-1 px-2 hover:bg-[#eeeded] transition-all duration-300 hover:cursor-pointer  rounded-lg items-center border border-[#c9c9c9]">
                            <Image src={'/xd.png'} width={1000} height={1000} alt="location" className="w-4 h-4" />
                            <h1>Adobe XD</h1>
                        </div>
                    </div>

                    <div className="inline-flex gap-3 flex-col">
                        <h1 className="text-[#6E6D6D]">Preferred Language</h1>
                        <h1 className="text-md font-semibold">English</h1>
                    </div>

                    <div className="inline-flex gap-3 flex-col">
                        <h1 className="text-[#6E6D6D]">Type</h1>
                        <h1 className="text-md font-semibold">Full Time</h1>
                    </div>

                    <div className="inline-flex gap-3 flex-col">
                        <h1 className="text-[#6E6D6D]">Years of Experience</h1>
                        <h1 className="text-md font-semibold">3+ Years of Experience</h1>
                    </div>
               </div>

               <div className="flex flex-col gap-4 border-b px-8 py-8 md:px-24 text-[#000]">
                    <h1 className="text-sm text-[#6E6D6D]">About the job</h1>
                    <div className="flex flex-col gap-1 text-[#3D3D3D]">
                        <p>1. Handle the UI/UX research design</p>
                        <p>2. Work on researching on latest web applications designs & trends</p>
                        <p>3. Work on conceptualizing and visualizing</p>
                        <p>4. Work on creating graphics content and other graphic related works</p>
                        <p>Benefits:</p>
                        <p className="flex items-center gap-2"> <span className="font-bold text-xl">·</span> Health insurance</p>
                        <p className="flex items-center gap-2"> <span className="font-bold text-xl">·</span>Provident Fund</p>
                        <p>Schedule:</p>
                        <p className="flex items-center gap-2"> <span className="font-bold text-xl">·</span>Day shift</p>
                        <p>Supplemental pay types:</p>
                        <p className="flex items-center gap-2"> <span className="font-bold text-xl">·</span>Performance bonus</p>
                        <p className="flex items-center gap-2"> <span className="font-bold text-xl">·</span>Yearly bonus</p>
                        <p>Work Location: In person</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 px-8 py-8 md:px-24 text-[#000]">
                    <div className="flex items-center gap-2">
                        <Image src={'/logo.png'} width={1000} height={1000} alt="logo" className="w-8"/>
                        <h1 className="text-[#4F4F4F]">Atlassian</h1>
                    </div>
                    <div className=" flex gap-24 py-2">
                        <div className=" flex flex-col gap-6">
                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Company size</h1>
                                <h1>1k - 2k Employees</h1>
                            </div>

                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Sector</h1>
                                <h1>Information Technology, Infrastructure</h1>
                            </div>

                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Founded In</h1>
                                <h1>2019</h1>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-6">
                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Type</h1>
                                <h1>Private</h1>
                            </div>

                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Funding</h1>
                                <h1>Bootstrapped</h1>
                            </div>

                            <div>
                                <h1 className="text-sm text-[#6E6D6D] pb-1">Founded By</h1>
                                <h1>Scott Farquhar, Mike Canon-Brookes</h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

{/* right */}
            <div className=" hidden lg:block px-2 border-l w-1/4 py-8">

                <div className=" flex items-center justify-center gap-8">
                    <button className="flex items-center gap-2 border border-[#DC4A2D] text-[#DC4A2D] bg-[#FEF4F2] py-2 px-4 rounded-lg">
                    <Trash2 size={15} />
                    <span>Delete job</span>
                    </button>
                    <button className="flex items-center gap-2 border border-[#DC4A2D] text-[#fff] bg-[#DC4A2D] py-2 px-4 rounded-lg">
                    <Pencil size={15}/>
                    <span>Edit job</span>
                    </button>
                </div>

                <div>
                    <div className="text-[#4F4F4F]">
                        <div className="flex  items-center justify-between border-b py-6 mx-8">
                            <div className="flex gap-2 items-center">
                                <Users size={20}/>
                                <h1>Applicants</h1>
                            </div>
                            <h1 className="text-lg font-semibold">400</h1>
                        </div>
                        <div className="flex  items-center justify-between border-b py-6 mx-8">
                            <div className="flex gap-2 items-center">
                                <UserCheck size={20}/>
                                <h1>Matches</h1>
                            </div>
                            <h1 className="text-lg font-semibold">100</h1>
                        </div>
                        <div className="flex  items-center justify-between border-b py-6 mx-8">
                            <div className="flex gap-2 items-center">
                                <MessageSquare size={20}/>
                                <h1>Messages</h1>
                            </div>
                            <h1 className="text-lg font-semibold">147</h1>
                        </div>
                        <div className="flex  items-center justify-between border-b py-6 mx-8">
                            <div className="flex gap-2 items-center">
                                <Eye size={20}/>
                                <h1>Views</h1>
                            </div>
                            <h1 className="text-lg font-semibold">800</h1>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}