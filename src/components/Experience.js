import React from 'react';
import "./experience.css"

const Experience = () => {
   return (
      <section className="experience pt-100 pb-100" id="experience">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 mx-auto text-center">
                  <div className="section-title">
                     <h4>Experience</h4>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12">
                  <ul className="timeline-list">
                     {/* <!-- Single Experience --> */}
                     <li>
                        <div className="timeline_content">
                           <span>2016 - 2016</span>
                           <h4>BulbsCanada.com Inc. – Technical Sales Representative</h4>
                           <p>Ensured the smooth functioning of computer systems and shipping software (EST 2.0).
                              Responsible for system maintenance, updates, and troubleshooting, minimizing disruptions and maximizing operational efficiency </p>
                        </div>
                     </li>
                     {/* <!-- Single Experience --> */}
                     <li>
                        <div className="timeline_content">
                           <span>2019 - 2020</span>
                           <h4>Financial Technology Certificate</h4>
                           <p>Graduated from Seneca College.Through my dedication and commitment to expanding my skill set, I have developed a strong foundation in these areas,
                              such as web application (e.g. HTML, CSS, Javascript) and mobile development (e.g. Figma).</p>
                        </div>
                     </li>
                     {/* <!-- Single Experience --> */}
                     <li>
                        <div className="timeline_content">
                           <span>2022-2023</span>
                           <h4>Meta Front-End Developer Specialization</h4>
                           <p>Obtained certification for Front-end developer and achquired a diverse range of technical skills that are essential for creating dynamic and responsive websites.
                              These skills are HTML to structure content, CSS to handle visual styles, JavaScript to develop interactive experiences, proficiency in using React, Bootstrap CSS Framework.
                              Also, hands-on experience working with GitHub repositories and utilizing version control.
                           </p>
                        </div>
                     </li>
                     {/* <!-- Single Experience --> */}
                     <li>
                        <div className="timeline_content">
                           <span>2022 - Present</span>
                           <h4>Showcase of  my Projects </h4>
                           <p>Throughout my learning journey with Meta, I successfully applied my acquired skills to build a portfolio website, a restaurant app, and a weather app.
                              These projects demonstrate my ability to create clean, responsive, and scalable applications</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience;