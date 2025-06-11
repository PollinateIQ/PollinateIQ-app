import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";
import "../../styles/dropdown.css";

interface ContactFormProps {
  showMap?: boolean;
  showInfo?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  showMap = true,
  showInfo = true
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Project Quote', label: 'Project Quote' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Branding & Design', label: 'Branding & Design' },
    { value: 'Partnership', label: 'Partnership' },
    { value: 'Support', label: 'Support' },
    { value: 'Careers', label: 'Careers' }
  ];

  const handleSubjectSelect = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
    setIsDropdownOpen(false);
    if (formErrors.subject) {
      setFormErrors(prev => ({ ...prev, subject: '' }));
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-pollinate-yellow" />,
      title: "Email Us",
      details: "info@pollinateiq.co.za",
      link: "mailto:info@pollinateiq.co.za"
    },
    {
      icon: <Phone className="w-5 h-5 text-pollinate-yellow" />,
      title: "Call Us",
      details: "+27 81 325 6906",
      link: "tel:+27813256906"
    },
    {
      icon: <MapPin className="w-5 h-5 text-pollinate-yellow" />,
      title: "Visit Us",
      details: "67th on 7th, 7th Ave, Edenvale, Gauteng, 1609",
      link: "https://maps.google.com/?q=67th+on+7th,+7th+Ave,+Edenvale,+Gauteng,+1609"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Subject and message are now optional - no validation required
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, this would be an API call to submit the form
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to submit form');
      // }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn(
      "py-16 md:py-24",
      isDark ? "bg-pollinate-black" : "bg-gray-200"
    )}>
      <div className="container mx-auto px-4">
        {showInfo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <a 
                href={item.link}
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300 flex flex-col items-center text-center",
                  isDark 
                    ? "bg-white/5 border-white/10 hover:bg-white/10" 
                    : "bg-white border-gray-100 hover:border-pollinate-yellow/30 hover:shadow-lg",
                  "group"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                  isDark 
                    ? "bg-pollinate-yellow/20 group-hover:bg-pollinate-yellow/30" 
                    : "bg-pollinate-yellow/10 group-hover:bg-pollinate-yellow/20"
                )}>
                  {item.icon}
                </div>
                <h3 className={cn(
                  "text-lg font-semibold mb-2",
                  isDark ? "text-white" : "text-pollinate-black"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  {item.details}
                </p>
              </a>
            ))}
          </div>
        )}
        
        <div className={cn(
          "rounded-2xl overflow-hidden",
          isDark 
            ? "bg-white/5 border border-white/10" 
            : "bg-white shadow-lg"
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map */}
            {showMap && (
              <div className="h-[300px] lg:h-auto relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5267!2d28.1503!3d-26.1329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9507c68f0406a51%3A0x238ac9d9b1d34041!2s67th%20on%207th%2C%207th%20Ave%2C%20Edenvale%2C%20Gauteng%2C%201609%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pollinate IQ Location - 67th on 7th, Edenvale"
                  className="absolute inset-0"
                ></iframe>
              </div>
            )}
            
            {/* Contact form */}
            <div className="p-8">
              <h3 className={cn(
                "text-2xl font-bold mb-6",
                isDark ? "text-white" : "text-pollinate-black"
              )}>
                Send Us a Message
              </h3>
              
              {submitStatus === 'success' ? (
                <div className={cn(
                  "p-6 rounded-lg flex items-start",
                  "bg-green-100/20 border border-green-200/30"
                )}>
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">Message Sent Successfully!</h4>
                    <p className="mt-1 text-green-600 dark:text-green-300">
                      Thank you for reaching out. We've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-4 text-sm font-medium text-pollinate-yellow hover:text-yellow-600 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div className={cn(
                      "p-4 rounded-lg flex items-start mb-4",
                      "bg-red-100/20 border border-red-200/30"
                    )}>
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={cn(
                          "block text-sm font-medium mb-1",
                          isDark ? "text-gray-200" : "text-gray-700"
                        )}
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all",
                          isDark 
                            ? "bg-white/10 border-white/20 text-white focus:ring-pollinate-yellow/50" 
                            : "bg-white border-gray-200 focus:border-pollinate-yellow focus:ring-pollinate-yellow/30",
                          formErrors.name ? "border-red-500 focus:ring-red-500/50" : ""
                        )}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className={cn(
                          "block text-sm font-medium mb-1",
                          isDark ? "text-gray-200" : "text-gray-700"
                        )}
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all",
                          isDark 
                            ? "bg-white/10 border-white/20 text-white focus:ring-pollinate-yellow/50" 
                            : "bg-white border-gray-200 focus:border-pollinate-yellow focus:ring-pollinate-yellow/30",
                          formErrors.email ? "border-red-500 focus:ring-red-500/50" : ""
                        )}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className={cn(
                          "block text-sm font-medium mb-1",
                          isDark ? "text-gray-200" : "text-gray-700"
                        )}
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all",
                          isDark 
                            ? "bg-white/10 border-white/20 text-white focus:ring-pollinate-yellow/50" 
                            : "bg-white border-gray-200 focus:border-pollinate-yellow focus:ring-pollinate-yellow/30"
                        )}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject" 
                        className={cn(
                          "block text-sm font-medium mb-1",
                          isDark ? "text-gray-200" : "text-gray-700"
                        )}
                      >
                        Subject (Optional)
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                            "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all text-left flex items-center justify-between",
                          isDark 
                              ? "bg-white/10 border-white/20 text-white focus:ring-pollinate-yellow/50 focus:border-pollinate-yellow" 
                              : "bg-white border-gray-200 text-pollinate-black focus:border-pollinate-yellow focus:ring-pollinate-yellow/30",
                          formErrors.subject ? "border-red-500 focus:ring-red-500/50" : ""
                        )}
                      >
                          <span className={cn(
                            formData.subject ? "" : "text-gray-400"
                          )}>
                            {formData.subject || "Select a subject"}
                          </span>
                          <ChevronDown 
                            className={cn(
                              "w-5 h-5 transition-transform text-pollinate-yellow",
                              isDropdownOpen ? "rotate-180" : ""
                            )} 
                          />
                        </button>
                        
                        {isDropdownOpen && (
                          <div 
                              className={cn(
                                "absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-xl z-50 max-h-60 overflow-y-auto backdrop-blur-sm custom-dropdown-scroll",
                                isDark 
                                  ? "bg-gray-900/95 border-pollinate-yellow/30 shadow-black/50" 
                                  : "bg-white/95 border-pollinate-yellow/20 shadow-gray-500/20"
                              )}
                              style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: isDark 
                                  ? '#F59E0B80 transparent' 
                                  : '#F59E0B60 transparent'
                              }}>
                            {subjectOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => handleSubjectSelect(option.value)}
                                className={cn(
                                  "w-full px-4 py-3 text-left hover:transition-colors first:rounded-t-lg last:rounded-b-lg",
                                  isDark 
                                    ? "text-white hover:bg-pollinate-yellow/20" 
                                    : "text-gray-900 hover:bg-pollinate-yellow/10",
                                  option.value === "" && "text-gray-400",
                                  formData.subject === option.value && (
                                    isDark 
                                      ? "bg-pollinate-yellow/30 text-white" 
                                      : "bg-pollinate-yellow/20 text-pollinate-black"
                                  )
                                )}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      {formErrors.subject && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={cn(
                        "block text-sm font-medium mb-1",
                        isDark ? "text-gray-200" : "text-gray-700"
                      )}
                    >
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={cn(
                        "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all",
                        isDark 
                          ? "bg-white/10 border-white/20 text-white focus:ring-pollinate-yellow/50" 
                          : "bg-white border-gray-200 focus:border-pollinate-yellow focus:ring-pollinate-yellow/30",
                        formErrors.message ? "border-red-500 focus:ring-red-500/50" : ""
                      )}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="w-4 h-4 rounded border-gray-300 text-pollinate-yellow focus:ring-pollinate-yellow/30"
                      required
                    />
                    <label 
                      htmlFor="privacy" 
                      className={cn(
                        "text-sm",
                        isDark ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      I agree to the <a href="/privacy-policy" className="text-pollinate-yellow hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center",
                      "bg-pollinate-yellow text-pollinate-black hover:bg-yellow-600 hover:text-white",
                      "disabled:opacity-70 disabled:cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
