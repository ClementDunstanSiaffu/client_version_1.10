

class Helper {

    getServiceName = (serviceUrl:string,serviceKey:string)=>{
        let serviceName = serviceKey;
        const stringArray = serviceUrl.split("/");
        const serviceIndex = stringArray.indexOf("services");
        if (serviceIndex !== -1){
            if (stringArray[serviceIndex+1]){
                serviceName = stringArray[serviceIndex+1];
            }
        }
        return serviceName;
    }
}

export default new Helper();