import React from 'react'
import { ButtonProps } from '@/lib/types'

const PrimaryButton = ({ name, number, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className="bg-[#2A2A2A] text-white py-3 sm:py-[15px] px-[15px] sm:px-5  text-[14px] sm:text-[16px] leading-[1] tracking-[0] rounded-full border border-[#A2A2A2] hover:bg-[#3A3A3A] transition-colors duration-200 cursor-pointer">
            {name}
            {number && <span >{number}</span>}
        </button>
    )
}

export default PrimaryButton;