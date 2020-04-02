import ServiceBase from "./serviceBase";
const Authentication={
signUp:(data)=>ServiceBase.post('/api/auth/signup',data),
signIn:(data)=>ServiceBase.post('/api/auth/signin',data)
}
export default Authentication;