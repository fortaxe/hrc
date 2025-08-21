export interface ButtonProps {
    name: string;
    number?: string;
    onClick?: () => void;
}

export interface ImageCardProps {
    image: string;
}

export interface TextCardProps {
    heading: string;
    description: string;
    secondHeading: string;
    secondDescription: string;
    thirdHeading: string;
    thirdDescription: string;
}

export interface SmartCardProps {
    heading: string;
    description: string;
    secondHeading: string;
    secondDescription: string;
    thirdHeading: string;
    thirdDescription: string;
}
