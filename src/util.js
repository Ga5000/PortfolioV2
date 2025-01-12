export default function detectLanguage() {
    const browserLanguage = navigator.language || navigator.userLanguage; 
    const primaryLanguage = browserLanguage.split('-')[0].toLowerCase(); 
    console.log(primaryLanguage);
  
    // Return 'pt' if Portuguese, otherwise default to 'en'
    return primaryLanguage === 'pt' ? 'pt' : 'en';
    
  }
  