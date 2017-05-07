const createColorLogger = (background: string, text: string) => {
    return function (out: string, ...rest:any[]) {
        console.log.apply(null, [`%c ${out} `, `background-color:${background}; color:${text || "#ffffff"}`,...rest])
    };
}


export const green = createColorLogger("#16bb21","#ffffff")
