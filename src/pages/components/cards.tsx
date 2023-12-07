
const Cards = ({ cards }: any) => {
    return (
        <>
            {cards?.map((item: any) => (
                <div className="relative rounded-xl bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] w-[353px] flex flex-col items-start justify-start p-5 box-border gap-[20px] text-left text-base text-grey-900 font-body">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="relative leading-[120%] font-semibold">{item.name}</div>
                        <div className="relative text-smi leading-[120%] font-medium text-gray-400">
                            {item.subname}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-text-5-">
                        <div className="relative leading-[120%] font-medium inline-block w-[313px] shrink-0">
                            {item.line}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards