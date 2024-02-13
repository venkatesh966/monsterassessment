import { environment } from '../../environment/environment';

export const encrypt = (text: string): string => {
   let encryptedText = '';
   for(let i = 0; i < environment.secretNumber; i++) {
     encryptedText += text;
   }
   return encryptedText;
}
  
export const decrypt = (text: string): string => {
  const chunkLength = Math.ceil(text.length / environment.secretNumber);
  
  return text.substring(0, chunkLength);
}
