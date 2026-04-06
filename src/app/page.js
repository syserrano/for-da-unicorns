import Image from "next/image";


export default function resumePage() {
  return (
    <div className="resume-page flex min-h-screen flex-col items-center justify-between bg-pink dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <header className="header-card rounded-2xl px-10 py-10 mb-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight name-text mb-1">
            Sofia Y. Serrano
          </h1>
          <p className="text-sm uppercase tracking-widest role-text mb-5">
            Business Analytics &amp; Information Systems
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 contact-text text-sm">    
            <a href="mailto:syserrano@usf.edu" className="contact-link">Email</a>
            <a href="https://www.linkedin.com/in/sofiaserrano-y/" className="contact-link">LinkedIn</a>
            <a href="https://github.com/syserrano" className="contact-link">GitHub</a>
          </div>
        </header>  

        <div className = "flex justify-center -mt-2 mb-8">
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="border-4 border-gray-300"
            style={{ border: "4px solid #E8A0A8", objectPosition: "center top" }}
          />
        </div>

        <section className="section-card rounded-2xl px-8 py-7 mb-6">
          <h2 className="section-title text-xs uppercase tracking-widest mb-3">About</h2>
          <p className="body-text text-sm leading-relaxed">
            Business Analytics and Information Systems student at USF with a 3.8 GPA, seeking to develop
            technical expertise as a Systems Analyst or Business Analyst upon graduation. Passionate about
            expanding and maintaining a strong professional network while building toward leadership roles
            such as Project Manager or IT Director where I can contribute to strategic decision-making.
            Long-term, I aspire to mentor and guide the next generation of aspiring analysts in the field.
          </p>
        </section>  
        
         
      </main>
    </div>
  );
}
