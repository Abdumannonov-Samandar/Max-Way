// import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  



const Burger = () => {
    return (
        <section className="py-[50px]">
            <div className="container">
                <div className="flex flex-col max-w-[1110px] mx-auto">
                    <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] mb-[21px] md:mb-[30px] md:text-[52px] md:leading-[62.93px]">Burger</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                        <li>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1 pb-2">
                                    <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px] after:content-['🧀'] after:w-6 after:h-6 after:ml-4 text-[18px] leading-[22px] font-medium">Cheeseburger</CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">23,000 UZS</span>
                                        <Button onClick={() => alert('Cheeseburger Add')} className='rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]'> + </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full relative">
                                    <img className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]" src="/images/burger.png" height={192} width={209} 
                                        alt="Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле"
                                        />
                                        <span className="absolute top-3 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                </CardContent>
                            </Card>
                        </li>
                        <li className="hidden md:block">
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px] after:content-['🌶️'] after:w-6 after:h-7 after:ml-4 text-[18px] leading-[22px]">Chili burger</CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">23,000 UZS</span>
                                        <Button className='rounded-full md:text-[24px] pb-[15px] p-[13px] md:w-[50px] md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]'> + </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full">
                                    <img className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]" src="/images/burger.png" height={192} width={209} 
                                        alt="Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле"
                                        />
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[18px] leading-[22px] text-[#222124] md:mb-[11px] mb-[7px]">Hamburger</CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">23,000 UZS</span>
                                        <Button className='rounded-full md:text-[24px] pb-[15px] p-[13px] md:w-[50px] md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]'> + </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full relative">
                                    <img className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]" src="/images/burger.png" height={192} width={209} 
                                        alt="Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле"
                                        />
                                        <span className="absolute top-3 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                </CardContent>
                            </Card>
                        </li>
                        <li>
                            <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[18px] leading-[22px] text-[#222124] md:mb-[11px] mb-[7px]">Double Burger</CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">23,000 UZS</span>
                                        <Button className='rounded-full md:text-[24px] pb-[15px] p-[13px] md:w-[50px] md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]'> + </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full relative">
                                    <img className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]" src="/images/burger.png" height={192} width={209} 
                                        alt="Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле"
                                        />
                                        <span className="absolute top-3 hidden md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                </CardContent>
                            </Card>
                        </li>
                    </ul>
                    <Collapsible>
                        <CollapsibleContent className="mt-6">
                            <Card className="flex md:hidden rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px] after:content-['🌶️'] after:w-6 after:h-7 after:ml-4 text-[18px] leading-[22px]">Chili burger</CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">23,000 UZS</span>
                                        <Button className='rounded-full md:text-[24px] pb-[15px] p-[13px] md:w-[50px] md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]'> + </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full">
                                    <img className="md:w-[209px] md:h-[192px] w-[147.85px] h-[135.82px]" src="/images/burger.png" height={192} width={209} 
                                        alt="Горячая закуска с митболами
                                        из говядины, томатами,
                                        моцареллой и соусом чипотле"
                                        />
                                </CardContent>
                            </Card>
                        </CollapsibleContent>
                        <CollapsibleTrigger className="mt-6 md:hidden block py-[14px] w-full text-[16px] bg-[#F1F1F1] text-[#222124] leading-[19.36px] font-normal rounded-[27px]">
                            Ko‘proq ko‘rish
                        </CollapsibleTrigger>
                        
                    </Collapsible>

                </div>
            </div>
        </section>
    )
}

export default Burger