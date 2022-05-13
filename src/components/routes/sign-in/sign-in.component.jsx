import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utils';

const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        // signInWithGooglePopup response has the Google response with user data for authentication purposes
        //console.log(response)
    }
 return (<div>SignIn page
     <button onClick={logGoogleUser}>
         Sign in with google Popup
     </button>
 </div>)
}
export default SignIn;