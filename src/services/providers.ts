import * as Notifications from 'expo-notifications';import Constants from 'expo-constants';
export interface SelfieVerificationProvider{verify(uri:string):Promise<{verified:boolean;ageOver18:boolean;reference?:string}>}
export const mockSelfieProvider:SelfieVerificationProvider={async verify(){return {verified:true,ageOver18:true,reference:'mock'}}};
export function selfieProvider(){if(!process.env.EXPO_PUBLIC_SELFIE_PROVIDER||process.env.EXPO_PUBLIC_SELFIE_PROVIDER==='mock')return mockSelfieProvider;throw new Error('Configured selfie provider adapter is not installed')}
export async function expoPushToken(){const p=await Notifications.requestPermissionsAsync();if(p.status!=='granted')return null;const projectId=process.env.EXPO_PUBLIC_EAS_PROJECT_ID??Constants.expoConfig?.extra?.eas?.projectId;if(!projectId)throw new Error('EAS project id is missing');return(await Notifications.getExpoPushTokenAsync({projectId})).data}
