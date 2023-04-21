import datos from './datos.json';

if (typeof window !== "undefined") {
    if(JSON.parse(localStorage.getItem("documentListData")) == null || undefined)
    {
        let listOpen = [];
        let temporalGroupElement = [];

        datos.map(( element ) => {
            for (let index = 0; index < element.grupos.length; index++) {
                temporalGroupElement.push(false);
            }
            listOpen.push({area: false, grupos: temporalGroupElement});
            temporalGroupElement = [];
        })
        localStorage.setItem("documentListData", JSON.stringify(listOpen));
    }
}

export const changeList = (selector, areaPos, grupoPos) => {
    if (typeof window !== "undefined") {
        let documentListData = JSON.parse(localStorage.getItem("documentListData"));
        if(selector === "area")
        {
            if(documentListData[areaPos].area == true)
            {
                documentListData[areaPos].area  = false;
            }else{
                documentListData[areaPos].area  = true;
            }
        }
        if(selector === "grupo")
        {
            if(documentListData[areaPos].grupos[grupoPos] == true)
            {
                documentListData[areaPos].grupos[grupoPos]  = false;
            }else{
                documentListData[areaPos].grupos[grupoPos]  = true;
            }
        }

        localStorage.setItem("documentListData", JSON.stringify(documentListData));
    }
}