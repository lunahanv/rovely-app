export type VerificationStatus='pending'|'verified'|'rejected';
export interface GeoPoint{latitude:number;longitude:number}
export interface Profile{id:string;name:string;age:number;bio:string;photoUrl:string;distanceKm:number;verified:boolean;city:'Denizli'}
export interface UserProfile extends Omit<Profile,'distanceKm'>{phoneVerified:boolean;selfieStatus:VerificationStatus;adultConfirmed:boolean;locationSharing:boolean;radiusKm:number}
export interface Match{id:string;profile:Profile;matchedAt:string;lastMessage?:string}
export interface Message{id:string;matchId:string;senderId:string;text:string;createdAt:string}
export interface SafetyReport{profileId:string;reason:'fake'|'harassment'|'underage'|'other';details?:string}
