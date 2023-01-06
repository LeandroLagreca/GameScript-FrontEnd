import axios from 'axios'

export default async function signWithGoogle(user) {
  const { email, displayName, uid, photoURL, emailVerified  } = user
  
  await axios.post('https://gamescript-backend-production.up.railway.app/login?google=true', {
      id: uid,
      email,
      name: displayName,
      image: photoURL,
      emailVerified,
      password: Math.random() * 1209847 + 'secretoGameScript'
  })
}
