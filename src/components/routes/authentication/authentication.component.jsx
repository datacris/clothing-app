
import SignUpForm from '../../sing-up-form/sign-up-form.component';
import SignInForm from '../../sing-in-form/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = ()=>{

 return (
    <div className='authenticxation-container'>
     	<SignInForm />
     	<SignUpForm />
    </div>)
}
export default Authentication;