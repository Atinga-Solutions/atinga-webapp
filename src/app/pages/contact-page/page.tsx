import React from 'react'

const ContactPage = () => {
    return (
        <div className="relative min-h-screen">


            <div className="relative z-10">
                <main className='flex flex-col items-center justify-center min-h-screen px-4 py-8'>
                    <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510689.0284648374!2d36.62623313010158!3d-0.31496907305399285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18284729f9465441%3A0xf835476d1295cfd6!2sNyeri%20County!5e0!3m2!1sen!2ske!4v1745747775806!5m2!1sen!2ske" 
                            className="w-full h-full"
                            style={{border:0}}
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContactPage
