import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
const url=process.env.EXPO_PUBLIC_SUPABASE_URL;const key=process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
export const realServicesEnabled=process.env.EXPO_PUBLIC_USE_REAL_SERVICES==='true';
if(realServicesEnabled&&(!url||!key))throw new Error('Supabase environment is incomplete');
export const supabase=createClient(url??'http://127.0.0.1:54321',key??'mock-anon-key',{auth:{storage:AsyncStorage,autoRefreshToken:true,persistSession:true,detectSessionInUrl:false}});
