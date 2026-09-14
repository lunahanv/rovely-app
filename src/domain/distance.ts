import type {GeoPoint} from './models';
export const clampRadius=(km:number)=>Math.min(50,Math.max(1,Math.round(km)));
export function distanceKm(a:GeoPoint,b:GeoPoint){const r=6371;const rad=(v:number)=>v*Math.PI/180;const dLat=rad(b.latitude-a.latitude);const dLon=rad(b.longitude-a.longitude);const x=Math.sin(dLat/2)**2+Math.cos(rad(a.latitude))*Math.cos(rad(b.latitude))*Math.sin(dLon/2)**2;return r*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
export const approximateDistance=(km:number)=>km<1?'1 km’den yakın':`yaklaşık ${Math.max(1,Math.round(km))} km`;
