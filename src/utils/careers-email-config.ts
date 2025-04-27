import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const initEmailJs = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
};

// Function to send job application
export const sendJobApplication = async (formData: JobApplicationFormData) => {
  try {
    initEmailJs();
    
    // Make sure these parameter names EXACTLY match the template variables in EmailJS
    // Common variable names would be {{to_name}}, {{from_name}}, {{message}}, etc.
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      position: formData.position,
      resume_link: formData.resumeLink || 'No resume link provided',
      cover_letter: formData.coverLetter || 'No cover letter provided',
      portfolio_link: formData.portfolio || 'No portfolio provided',
      to_name: "Hiring Team",  // This could be any name you want the email addressed to
      subject: `Job Application for ${formData.position}`,
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Position: ${formData.position}
        Resume: ${formData.resumeLink || 'No resume link provided'}
        Cover Letter: ${formData.coverLetter || 'No cover letter provided'}
        Portfolio: ${formData.portfolio || 'No portfolio provided'}
        Date: ${new Date().toLocaleDateString()}
      `,
      // Adding raw data as a backup to ensure information gets through
      application_data: JSON.stringify(formData, null, 2)
    };
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_JOB_TEMPLATE_ID || '', 
      templateParams
    );

    return {
      success: true,
      message: 'Application submitted successfully!',
      response
    };
  } catch (error) {
    console.error('Error sending job application:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again later.',
      error
    };
  }
};

// Function to send general inquiry (simplified to use same template)
export const sendGeneralInquiry = async (formData: GeneralInquiryFormData) => {
  try {
    initEmailJs();
    
    // Make sure these match your template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      position: 'General Inquiry',
      to_name: "Hiring Team",
      subject: formData.subject || "General Employment Inquiry",
      message: formData.message,
      // Adding raw data fields to ensure information gets through
      application_data: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Message: ${formData.message}
        Date: ${new Date().toLocaleDateString()}
      `
    };
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_JOB_TEMPLATE_ID || '',
      templateParams
    );

    return {
      success: true,
      message: 'Message sent successfully!',
      response
    };
  } catch (error) {
    console.error('Error sending general inquiry:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error
    };
  }
};

// TypeScript interfaces for form data
export interface JobApplicationFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resumeLink?: string;
  coverLetter?: string;
  portfolio?: string;
}

export interface GeneralInquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}