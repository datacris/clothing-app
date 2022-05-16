
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sing-up-form/sign-up-form.component';

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
     <SignUpForm />
 </div>)
}
export default SignIn;