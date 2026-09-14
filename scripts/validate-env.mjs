/* global process, console */
const required=['EXPO_PUBLIC_SUPABASE_URL','EXPO_PUBLIC_SUPABASE_ANON_KEY','EXPO_PUBLIC_EAS_PROJECT_ID'];
const real=process.env.EXPO_PUBLIC_USE_REAL_SERVICES==='true';
if(real){const missing=required.filter((key)=>!process.env[key]?.trim());if(missing.length){console.error('Missing production environment variables: '+missing.join(', '));process.exit(1)}if(process.env.EXPO_PUBLIC_SELFIE_PROVIDER==='mock'||!process.env.EXPO_PUBLIC_SELFIE_PROVIDER){console.error('Production requires a non-mock selfie provider');process.exit(1)}}
console.log(real?'Production environment is complete':'Mock environment validated; real services remain disabled');
