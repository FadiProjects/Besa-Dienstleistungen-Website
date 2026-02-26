'use client';
import React, { useState, useEffect } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isValid, setIsValid] = useState(false);
  
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (key) {
      console.log("Key geladen");
    } else {
      console.error("Key fehlt!");
    }
  }, []);

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setIsValid(form.checkValidity());

    const emailField = form.elements.namedItem('email') as HTMLInputElement;
    if (emailField) {
      setEmailError(emailField.value.length > 0 && !emailField.validity.valid);
    }

    const phoneField = form.elements.namedItem('telefon') as HTMLInputElement;
    if (phoneField) {
      setPhoneError(phoneField.value.length > 0 && !phoneField.validity.valid);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("Web3Forms Access Key fehlt!");
      setStatus('error');
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Neue Kontaktanfrage - Besa Dienstleistungen");
    formData.append("from_name", `${formData.get('vorname')} ${formData.get('nachname')}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setIsValid(false);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("API Fehler Details:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Netzwerk Fehler:", error);
      setStatus('error');
    }
  }

  const baseInputClass = "w-full border px-4 py-3 bg-white rounded-[8px] outline-none focus:ring-1 transition-all duration-500 ease-in-out";

  return (
    <form onChange={handleFormChange} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <input type="text" name="botcheck" style={{ display: 'none' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="vorname">Vorname*</label>
          <input id="vorname" name="vorname" placeholder="Vorname" required className={`${baseInputClass} border-[#D9D9D9] ring-primary`} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="nachname">Nachname*</label>
          <input id="nachname" name="nachname" placeholder="Nachname" required className={`${baseInputClass} border-[#D9D9D9] ring-primary`} />
        </div>
      </div>

      <div>
        <label htmlFor="telefon" className="flex justify-between text-sm mb-1">
          Telefonnummer*
          {phoneError && <span className="text-red-500 text-xs animate-pulse">Nur Zahlen erlaubt</span>}
        </label>
        <input 
          id="telefon" 
          name="telefon" 
          type="tel" 
          placeholder="Telefon" 
          required 
          pattern="[0-9\s\+\-\/]*"
          className={`${baseInputClass} ${phoneError ? 'border-red-500 ring-red-500' : 'border-[#D9D9D9] ring-primary'}`} 
        />
      </div>

      <div>
        <label htmlFor="email" className="flex justify-between text-sm mb-1">
          E-Mail* 
          {emailError && <span className="text-red-500 text-xs animate-pulse">Ungültiges Format</span>}
        </label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="E-Mail" 
          required 
          className={`${baseInputClass} ${emailError ? 'border-red-500 ring-red-500' : 'border-[#D9D9D9] ring-primary'}`} 
        />
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="nachricht">Ihre Nachricht*</label>
        <textarea id="nachricht" name="nachricht" placeholder="Ihre Nachricht an uns..." rows={4} required className={`${baseInputClass} border-[#D9D9D9] ring-primary resize-none`} />
      </div>
      
      <button 
        type="submit" 
        disabled={!isValid || status === 'loading'}
        className="mt-2 flex items-center justify-center gap-[8px] bg-black text-white p-4 rounded-[8px] hover:bg-zinc-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht absenden'}
      </button>
      
      {status === 'success' && <p className="text-green-600 font-medium text-center">Nachricht erfolgreich gesendet!</p>}
      {status === 'error' && <p className="text-red-600 font-medium text-center">Fehler beim Senden. Bitte anrufen.</p>}
    </form>
  );
};