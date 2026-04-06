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
            width={250}
            height={250}
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

        <section className="section-card rounded-2xl px-8 py-7 mb-6">
          <h2 className="section-title text-xs uppercase tracking-widest mb-3">Education</h2>
          <div className="flex justify-between items-baseline flex-wrap gap-1">
            <h3 className="entry-title text-base font-semibold">University of South Florida</h3>
            <span className="date-tag text-xs px-3 py-1 rounded-full">Expected Dec 2026</span>
          </div>
          <p className="entry-sub text-sm mt-0.5">B.S. Business Analytics and Information Systems · Tampa, FL</p>
          <p className="body-text text-sm mt-1">GPA: 3.8</p>
        </section>

        <section className="section-card rounded-2xl px-8 py-7 mb-6">
          <h2 className="section-title text-xs uppercase tracking-widest mb-5">Leadership &amp; Involvement</h2>
 
          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h3 className="entry-title text-base font-semibold">Mexican American Student Association</h3>
              <span className="date-tag text-xs px-3 py-1 rounded-full">Apr 2025 – Present</span>
            </div>
            <p className="entry-sub text-sm mt-0.5">Public Relations · USF</p>
            <ul className="body-text text-sm mt-2 space-y-1 list-none">
              <li className="bullet-item">Grew the organization's Instagram account profile activity by 773.8%.</li>
              <li className="bullet-item">Promoted Mexican culture and connected with other student organizations on USF's campus.</li>
            </ul>
          </div>
 
          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h3 className="entry-title text-base font-semibold">Association of Information Systems</h3>
              <span className="date-tag text-xs px-3 py-1 rounded-full">Jan 2025 – Present</span>
            </div>
            <p className="entry-sub text-sm mt-0.5">Member · USF</p>
            <ul className="body-text text-sm mt-2 space-y-1 list-none">
              <li className="bullet-item">Engaged in professional development, networking events, and workshops focused on information systems.</li>
            </ul>
          </div>
 
          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h3 className="entry-title text-base font-semibold">Women in Business</h3>
              <span className="date-tag text-xs px-3 py-1 rounded-full">Jan 2025 – Present</span>
            </div>
            <p className="entry-sub text-sm mt-0.5">Member · USF</p>
            <ul className="body-text text-sm mt-2 space-y-1 list-none">
              <li className="bullet-item">Participated in skill-building workshops, career development, and networking events focused on leadership.</li>
            </ul>
          </div>
 
          <div className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h3 className="entry-title text-base font-semibold">FIRST Tech Challenge</h3>
              <span className="date-tag text-xs px-3 py-1 rounded-full">Aug 2021 – May 2024</span>
            </div>
            <p className="entry-sub text-sm mt-0.5">Programmer &amp; Engineering Notebook</p>
            <ul className="body-text text-sm mt-2 space-y-1 list-none">
              <li className="bullet-item">Learned programming concepts and helped complete the teams' engineering notebook.</li>
              <li className="bullet-item">Advanced with teammates to State Competition and became finalists.</li>
            </ul>
          </div>
 
          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-1">
              <h3 className="entry-title text-base font-semibold">Washington Entrepreneurship Internship</h3>
              <span className="date-tag text-xs px-3 py-1 rounded-full">Jun 2023</span>
            </div>
            <ul className="body-text text-sm mt-2 space-y-1 list-none">
              <li className="bullet-item">Learned how to turn an innovation into a marketable product.</li>
              <li className="bullet-item">Went through the full process: ideation, product creation, patent process, and pitching to businesses.</li>
            </ul>
          </div>
        </section>

        <section className="section-card rounded-2xl px-8 py-7 mb-6">
          <h2 className="section-title text-xs uppercase tracking-widest mb-5">Honors &amp; Awards</h2>
          <ul className="body-text text-sm space-y-2 list-none">
            <li className="flex justify-between flex-wrap gap-1">
              <span className="bullet-item entry-title font-semibold">Hispanic Scholarship Fund Scholar</span>
              <span className="date-tag text-xs px-3 py-1 rounded-full self-start">Jan 2025</span>
            </li>
            <li className="flex justify-between flex-wrap gap-1">
              <span className="bullet-item">Excel Certification</span>
              <span className="date-tag text-xs px-3 py-1 rounded-full self-start">Oct 2024</span>
            </li>
            <li className="flex justify-between flex-wrap gap-1">
              <span className="bullet-item">LinkedIn "What is Business Analytics" Certification</span>
              <span className="date-tag text-xs px-3 py-1 rounded-full self-start">Sep 2024</span>
            </li>
            <li className="flex justify-between flex-wrap gap-1">
              <span className="bullet-item">Bright Futures Scholarship</span>
              <span className="date-tag text-xs px-3 py-1 rounded-full self-start">Jul 2024</span>
            </li>
            <li className="flex justify-between flex-wrap gap-1">
              <span className="bullet-item entry-title font-semibold">George Snow Scholarship</span>
              <span className="date-tag text-xs px-3 py-1 rounded-full self-start">Jun 2024</span>
            </li>
          </ul>
        </section>

        <section className="section-card rounded-2xl px-8 py-7 mb-6">
          <h2 className="section-title text-xs uppercase tracking-widest mb-5">Skills</h2>
          <div className="flex flex-col gap-3">
 
            <div className="flex flex-wrap items-center gap-2">
              <span className="skill-label text-xs font-semibold uppercase tracking-wide w-24 shrink-0">Computer</span>
              {["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Tableau", "Basic Python"].map((s) => (
                <span key={s} className="skill-tag text-xs px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
 
            <div className="flex flex-wrap items-center gap-2">
              <span className="skill-label text-xs font-semibold uppercase tracking-wide w-24 shrink-0">Languages</span>
              {["English (Fluent)", "Spanish (Fluent)"].map((s) => (
                <span key={s} className="skill-tag text-xs px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
 
            <div className="flex flex-wrap items-center gap-2">
              <span className="skill-label text-xs font-semibold uppercase tracking-wide w-24 shrink-0">Soft Skills</span>
              {["Team Collaboration", "Leadership", "Communication"].map((s) => (
                <span key={s} className="skill-tag text-xs px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
 
          </div>
        </section>
      </main>
    </div>
  );
}
