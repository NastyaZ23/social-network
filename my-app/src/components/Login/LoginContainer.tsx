import {connect} from "react-redux";
import {loginThunk} from "../../redux/reducer/auth-reducer";
import {Login} from "./Login";
import {loginAPIDataType} from "../../api/api";
import {stateType} from "../../redux/redux-store";

type mapDispatchToPropsType={
    loginThunk:(loginData:loginAPIDataType)=>void
}
type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps=(state:stateType):mapStateToPropsType=>({
    isAuth:state.auth.isAuth
})



export default connect<mapStateToPropsType,mapDispatchToPropsType, { },stateType>(mapStateToProps,{loginThunk})(Login)