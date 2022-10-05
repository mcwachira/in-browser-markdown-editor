import React, { useState } from 'react';
import { SignAuthUserWithEmailAndPassword, db } from '../../utils/firebase';
import { SignInContainer, ButtonContainer } from './SingIn.styles';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDoc, serverTimestamp, setDoc,doc } from 'firebase/firestore';

const SignIn = () => {
	const [formFields, setFormFields] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formFields;
	const auth = getAuth();
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const resetFormFields = () => {
		setFormFields(formFields);
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			const { user } = SignAuthUserWithEmailAndPassword(auth, email, password);
			toast.success('successful log in with email');
			resetFormFields();
			navigate('/');
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					toast.error('incorrect password');
					break;
				case 'auth/user-not-found':
					toast.error('user with that email does not exits');
					break;
				default:
					console.log('error:', error);
			}
		}
	};

    const handleGoogleSignIn = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();

            const results = await signInWithPopup(auth, googleProvider);
        
            const user = results.user;
            console.log(user.uid);
            //creating our document reference
            const docRef = doc(db, 'users', user.uid);

            //creating a snapshot

            //will create the user if  the user does not exist
            const userSnapshot = await getDoc(docRef);

            if (!userSnapshot.exists()) {
                await setDoc( docRef, {
                    name: user.displayName,
                    email: user.email,
                    createdAt: serverTimestamp(),
                });
            }
            toast.success('successfully authenticated using google');
            navigate('/');
        } catch (error) {
            toast.error('error signing in with google');
            console.log('error', error);
        }
    };
	return (
		<SignInContainer>
			<h2>Sign In</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<ButtonContainer>
					<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>
						Submit{' '}
					</Button>

					{/* passed the firebase signInWithGooglePopup method directly on the onclick method 
                    instead of passing another function to help us sign in with google */}
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={() => handleGoogleSignIn()}>
					
						Google
					</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
}

export default SignIn;
