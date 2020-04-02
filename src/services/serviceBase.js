import Axios from 'axios';
const BASEURL='http://localhost:5000'
const ServiceBase={

postPutDelete: async (url,method,request)=>{
const options={
    method:method,
    data:request,
    url:`${BASEURL}${url}`,
}
const response= await Axios(options);
return response
},
post:(url,request)=>ServiceBase.postPutDelete(url,'POST',request),
get:(url,request)=>{ServiceBase.postPutDelete(url,'GET',request)}
}
export default ServiceBase;