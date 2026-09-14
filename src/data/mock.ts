import type {Match,Profile,UserProfile} from '../domain/models';
export const profiles:Profile[]=[
{id:'p1',name:'Ece',age:27,bio:'Kahve, trekking ve analog fotoğraf.',photoUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900',distanceKm:3.4,verified:true,city:'Denizli'},
{id:'p2',name:'Mert',age:30,bio:'Yeni rotalar, iyi müzik, bolca kitap.',photoUrl:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900',distanceKm:8.2,verified:true,city:'Denizli'},
{id:'p3',name:'Selin',age:25,bio:'Tasarımcı. Hafta sonu doğadayım.',photoUrl:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900',distanceKm:19.1,verified:false,city:'Denizli'}];
export const me:UserProfile={id:'me',name:'Deniz',age:26,bio:'Yeni insanlarla tanışmak için buradayım.',photoUrl:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900',verified:true,city:'Denizli',phoneVerified:true,selfieStatus:'verified',adultConfirmed:true,locationSharing:true,radiusKm:50};
export const initialMatches:Match[]=[{id:'m1',profile:profiles[0]!,matchedAt:new Date().toISOString(),lastMessage:'Merhaba 👋'}];
