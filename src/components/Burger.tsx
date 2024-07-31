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
  
import B from '../assets/images/burger.png'


const Burger = () => {

    const hotids = [8, 9]
    const emojids = [8,9,10,12,14]
    const burgerData = [
        {
          id: 8,
          name: 'Cheeseburger',
          description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
          img: B,
          price: 23000,
          emoji: '',
          isSpicy: false,
        },
        {
          id: 9,
          name: 'Chili burger',
          description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
          img: B,
          price: 23000,
          emoji: '🌶️',
          isSpicy: true,
        },
        {
          id: 10,
          name: 'Hamburger',
          description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
          img: B,
          price: 23000,
          emoji: '🍔',
          isSpicy: false,
        },
        {
          id: 11,
          name: 'Double Burger',
          description: 'Горячая закуска с митболами из говядины, томатами, моцареллой и соусом чипотле',
          img: B,
          price: 23000,
          emoji: '',
          isSpicy: false,
        },
    ]
    return (
        <section className="pt-[50px] pb-[53px] md:pb-[105px]">
            <div className='container'>
            <div className="flex flex-col gap-[21px] md:gap-[30px]">
                    <h2 className="font-bold text-[#222124] text-[36px] leading-[43.57px] md:text-[52px] md:leading-[62.93px]">Burger</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                    {burgerData.slice(0, 3).map((burger) => (
                        <li key={burger.id} className="md:hidden block">
                        <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                            <CardHeader className="pl-[21px] pt-1 pb-2">
                                <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                    {burger.name} {emojids.includes(burger.id) && (
                                    <span className="ml-4">{burger.emoji}</span>
                                    )}
                                </CardTitle>
                                <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                    {burger.description}
                                </CardDescription>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{burger.price.toLocaleString()} UZS</span>
                                    
                                                <Button
                                                    
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                            
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 w-full relative">
                                <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={burger.img} height={127} width={127} alt={burger.description} />
                                {hotids.includes(burger.id) && (
                                    <span className="absolute top-0 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                )}
                            </CardContent>
                        </Card>
                    </li>
                    ))}
                    {burgerData.map((burger) => (
                        <li key={burger.id} className="hidden md:block">
                        <Card className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                            <CardHeader className="pl-[21px] pt-1 pb-2">
                                <CardTitle className="md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                    {burger.name} {emojids.includes(burger.id) && (
                                    <span className="ml-4">{burger.emoji}</span>
                                    )}
                                </CardTitle>
                                <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                    {burger.description}
                                </CardDescription>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{burger.price.toLocaleString()} UZS</span>
                                    <Button
                                        className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 w-full relative">
                                <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={burger.img} height={127} width={127} alt={burger.description} />
                                {hotids.includes(burger.id) && (
                                    <span className="absolute top-0 md:h-[50px] md:w-[50px] w-[35.37px] h-[35.37px] drop-shadow-[0px_7px_40px_0px_rgba(238,39,68,0.36)] bg-[rgba(238,39,69,0.36)] rounded-full flex items-center justify-center md:text-[24px] text-[17px]">🔥</span>
                                )}
                            </CardContent>
                        </Card>
                    </li>
                    ))}
                    </ul>
                    <Collapsible>
                    <CollapsibleContent className="md:hidden grid grid-cols-1 gap-y-6 md:gap-y-[30px] md:gap-x-[30px]">
                        {burgerData.slice(3, 4).map((burger) => (
                            <Card key={burger.id} className="rounded-[12px] pt-4 pr-[30px] pl-[21px] pb-[22px] flex flex-row-reverse border-[#9797972E]">
                                <CardHeader className="pl-[21px] pt-1">
                                    <CardTitle className="font-medium md:text-[24px] md:leading-[29px] text-[#222124] md:mb-[11px] mb-[7px]">
                                        {burger.name} <span className="ml-4">{burger.emoji}</span>
                                    </CardTitle>
                                    <CardDescription className="font-medium text-[12px] leading-[15px] md:leading-[17px] md:text-[14px] text-[#222124] opacity-40 md:mb-[44px] mb-[15px] md:pr-4">
                                        {burger.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold md:text-[24px] md:leading-[29px] text-[#222124] text-[18px] leading-[22px]">{burger.price.toLocaleString()} UZS</span>
                                        <Button
                                                    
                                                    className="rounded-full md:text-[24px] p-[13px] pb-[15px] md:w-[50px] flex items-center justify-center md:h-[50px] w-[35.37px] h-[35.37px] text-[17px]"
                                                >
                                                    +
                                                </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 w-full relative">
                                    <img className="md:w-[180px] md:h-[180px] w-[127px] h-[127px]" src={burger.img} height={127} width={127} alt={burger.description} />
                                </CardContent>
                            </Card>
                        ))}
                    </CollapsibleContent>
                    <CollapsibleTrigger className="mt-6 md:hidden block py-[14px] w-full text-[16px] bg-[#F1F1F1] text-[#222124] leading-[19.36px] font-normal rounded-[27px]">Ko‘proq ko‘rish</CollapsibleTrigger>
                </Collapsible>
            </div>
            </div>
        </section>
    )
}

export default Burger