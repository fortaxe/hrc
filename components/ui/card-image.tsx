const CardImage = () => {
    return (
        <div className="flex justify-center items-center max-w-[1440px] mx-auto px-4 sm:px-[30px]  sm:pt-[90px] pt-[50px]">
            <img 
            
            src={"/card.png"}
            className="hidden sm:block"
            alt="card-image" />

<img 
            src={"/mobile-card.png"}
           
            className="block sm:hidden"
            alt="card-image" />
        </div>
    )
}

export default CardImage;