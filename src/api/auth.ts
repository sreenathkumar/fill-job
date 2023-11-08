import * as Realm from 'realm-web'

//initializing the MongoDB App
export const app = new Realm.App({ id: process.env.REACT_APP_ID! });
//register new user
export const registerUser = async (email: string, password: string) => {
  try {
    // Authenticate the user
    await app.emailPasswordAuth.registerUser({ email, password });
  } catch (error) {
    return { status: 'error', message: error.error }
  }
  return { status: 'success', message: 'successfully registered' };
}

//login user
export const loginUser = async (email: string, password: string) => {
  // Create an email/password credential
  const credentials = Realm.Credentials.emailPassword(email, password);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    //set the user in local storage
    localStorage.setItem('token', JSON.stringify({ token: user.refreshToken, expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30 }));
  } catch (error) {
    return { status: 'error', message: error.error }
  }
  return {
    status: 'success',
    message: 'successfully logged in'
  };
}

//logout user
export const logoutUser = async () => {
  try {
    await app.currentUser?.logOut();
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    }
  }
  return {
    status: 'success',
    message: 'successfully logged out'
  }
}

export async function getValidAccessToken(user: Realm.User) {
  // An already logged in user's access token might be stale. To guarantee that the token is valid, refresh it if necessary.
  try {
    await user.refreshAccessToken();
    return user.accessToken;
  } catch (error) {
    return error
  }
}