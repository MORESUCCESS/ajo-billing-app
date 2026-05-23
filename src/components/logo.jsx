const bgColor = "#00C896"

const Logo =()=>{
    return(
         <div className="flex item-center w-fit h-fit justify-center text-gray-100">
                <h1 className="text-2xl font-bold p-3 px-5 rounded-2xl" 
                    style={{backgroundColor: bgColor}}>₦
                </h1>
        </div>
    );
}

export default Logo;