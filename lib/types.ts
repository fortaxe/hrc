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
    description?: string;
    secondHeading: string;
    secondDescription: string;
    thirdHeading: string;
    thirdDescription: string;
    firstHeading?: string;
    firstDescription?: string;
}

export interface SmartCardProps {
    heading: string;
    description?: string;
    firstHeading?: string;
    firstDescription?: string;
    secondHeading: string;
    secondDescription: string;
    thirdHeading: string;
    thirdDescription: string;
    img: string;
        }

        export interface LightWeightCardProps {
            buttonName: string;
            buttonLink: string;
            img: string;
            heading: string;
           
        }