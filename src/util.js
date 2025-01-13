export default function detectLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage; 
    const primaryLanguage = browserLanguage.split('-')[0].toLowerCase(); 
   
    return primaryLanguage === 'pt' ? 'pt' : 'en';
  }
  