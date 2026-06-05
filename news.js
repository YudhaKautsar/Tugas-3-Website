const newsData = {
  "crm-platform": {
    title: "New CRM Platform Launch",
    date: "June 2026",
    image: "assets/digital.webp", // Corrected image path to match index.html

    content: `
            <p>
                i-Eyes officially announced the launch of its latest
                <strong>Customer Relationship Management (CRM) Platform</strong>,
                designed to help businesses streamline customer engagement,
                improve operational efficiency, and drive data-driven decision-making.
            </p>

            <h2>Key Features</h2>

            <h3>Customer Tracking</h3>
            <p>
                Monitor customer interactions, purchase history,
                service requests, and communication records through
                a centralized dashboard.
            </p>

            <h3>Analytics Dashboard</h3>
            <p>
                Real-time reporting and visualization tools help
                management track sales performance and business growth.
            </p>

            <h3>Automation Tools</h3>
            <p>
                Automated follow-ups, lead assignment,
                task scheduling, and customer notifications.
            </p>

            <h2>Supporting Business Growth</h2>

            <blockquote>
                Businesses today need more than just customer data storage.
                They need actionable insights and intelligent automation.
            </blockquote>

            <p>
                The CRM platform was developed to address the growing demand
                for digital solutions that simplify customer relationship management.
            </p>

            <h2>Future Development</h2>

            <p>
                Future enhancements will include AI-powered customer insights,
                advanced reporting capabilities, third-party integrations,
                and mobile accessibility.
            </p>
        `,
  },
  "partnership-tech-company": {
    title: "Partnership with Technology Company",
    date: "May 2026",
    image: "assets/sales.jpg",
    content: `
            <p>Jakarta, Indonesia – June 2026 i-Eyes officially announced the launch of its latest Customer Relationship Management (CRM) Platform, a comprehensive solution designed to help businesses streamline customer engagement, improve operational efficiency, and drive data-driven decision-making.</p>
            <p>The new platform brings together customer management, analytics, and automation into a single integrated system, enabling organizations to gain deeper insights into customer behavior while reducing manual processes.</p>
            <h2>Key Features</h2>
            <h3>Customer Tracking</h3>
            <p>Businesses can monitor customer interactions, purchase history, service requests, and communication records through a centralized dashboard. This allows teams to better understand customer needs and provide more personalized services.</p>
            <h3>Analytics Dashboard</h3>
            <p>The platform offers real-time reporting and visualization tools that help management track sales performance, customer engagement metrics, and business growth trends. Interactive dashboards provide actionable insights for faster and more informed decisions.</p>
            <h3>Automation Tools</h3>
            <p>To improve productivity, the CRM includes workflow automation features such as automated follow-ups, lead assignment, task scheduling, and customer notifications. These capabilities help reduce repetitive work and allow teams to focus on higher-value activities.</p>
            <h2>Supporting Business Growth</h2>
            <p>According to i-Eyes, the CRM platform was developed to address the growing demand for digital solutions that simplify customer relationship management while improving collaboration across departments.</p>
            <blockquote>Businesses today need more than just customer data storage. They need actionable insights and intelligent automation that help teams work smarter and respond faster to customer needs, said an i-Eyes spokesperson during the product launch.</blockquote>
            <h2>Future Development</h2>
            <p>i-Eyes plans to continue enhancing the platform with additional features, including AI-powered customer insights, advanced reporting capabilities, third-party integrations, and mobile accessibility to support businesses operating in increasingly digital environments.</p>
            <p>The launch marks another milestone in i-Eyes' commitment to delivering innovative technology solutions that help organizations improve customer satisfaction, strengthen business relationships, and accelerate digital transformation.</p>
            <p>Category: Technology<br>Published: June 2026<br>Author: i-Eyes News Team<br>Tags: CRM, Customer Management, Business Technology, Digital Transformation, Analytics, Automation</p>
        `,
  },
  "mobile-app-development": {
    title: "Mobile Application Development",
    date: "April 2026",
    image: "assets/mobileapp.png",
    content: `
            <p>Our software division successfully completed a large-scale mobile application project that serves thousands of users daily with high performance and reliability.</p>
            <p>This project involved developing native applications for both Android and iOS platforms, ensuring a seamless user experience across different devices.</p>
            <p>Key aspects of the development included:</p>
            <ul>
                <li>Advanced UI/UX design for intuitive navigation.</li>
                <li>Robust backend integration for data management.</li>
                <li>Performance optimization for speed and responsiveness.</li>
                <li>Comprehensive testing to ensure reliability and stability.</li>
            </ul>
            <p>The application has received positive feedback from users and has significantly enhanced our client's digital presence and customer engagement.</p>
        `,
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const news = newsData[id];

if (news) {
  document.getElementById("newsTitle").innerHTML = news.title;
  document.getElementById("newsDate").innerHTML = news.date;
  document.getElementById("newsImage").src = news.image;
  document.getElementById("newsBody").innerHTML = news.content;

  document.title = news.title + " | iEyes";
}
