import { signInWithGooglePopup} from '../../../utils/firebase/firebase.utils';

const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const response = await signInWithGooglePopup();
        console.log(response)
    }
 return (<div>SignIn page
     <button onClick={logGoogleUser}>
         Sign in with google Popup
     </button>
 </div>)
}
export default SignIn;