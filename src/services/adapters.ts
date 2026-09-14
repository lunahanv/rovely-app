import * as Location from 'expo-location';import type {GeoPoint,SafetyReport,UserProfile} from '../domain/models';
export interface VerificationAdapter{sendOtp(phone:string):Promise<void>;verifyOtp(code:string):Promise<boolean>;verifyLiveSelfie(uri:string):Promise<boolean>}
export interface DatingApi{saveProfile(profile:UserProfile):Promise<void>;like(profileId:string):Promise<{matched:boolean}>;pass(profileId:string):Promise<void>;block(profileId:string):Promise<void>;report(report:SafetyReport):Promise<void>}
export const mockVerification:VerificationAdapter={async sendOtp(){},async verifyOtp(code){return code==='123456'},async verifyLiveSelfie(){return true}};
export const mockApi:DatingApi={async saveProfile(){},async like(id){return {matched:id==='p1'}},async pass(){},async block(){},async report(){}};
export async function getConsentedLocation():Promise<GeoPoint|null>{const permission=await Location.requestForegroundPermissionsAsync();if(permission.status!=='granted')return null;const p=await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Balanced});return {latitude:p.coords.latitude,longitude:p.coords.longitude};}
