interface ExperienceProps {
  company: string;
  period: [string, string];
  location: string;
  title: string;
  responsibilities: string[];
}

const Experience = ({
  company,
  period: [startTime, endTime],
  location,
  title,
  responsibilities,
}: ExperienceProps) => (
  <li>
    <h3>{company}</h3>
    <span className="location">{location}</span>
    <time>{startTime}</time>-<time>{endTime}</time>
    <p>{title}</p>
    <ul>
      {responsibilities.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  </li>
);

const WorkHistory = () => (
  <ul>
    <Experience
      company="Hopper Inc."
      period={["November 2020", "Now"]}
      title="Senior Software Engineer - Full Stack"
      location="New York City, NY"
      responsibilities={[
        "Technical owner for Hopper Cloud Price Freeze product",
        "Develop publicly facing APIs for business partners to access Hopper fintech product suite. Scala, Akka, Cats, OpenAPI",
        "Built Hopper-Kayak white-labeled Price Freeze product, with flight inventory fulfilled by Hopper. Typescript, React + Redux, MaterialUI",
        "Mentored junior engineers on software engineering best practices, software architecture, team dynamics",
      ]}
    />
    <Experience
      company="Hopper Inc."
      period={["May 2019", "November 2020"]}
      title="Software Engineer - Backend"
      location="New York City, NY"
      responsibilities={[
        "Developed Price Freeze and Price Drop features, from MVP stage to feature growth phase. Scala, Finagle, HBase, Kafka",
        "Work with stakeholders to determine requirements and technical specifications",
        "Onboard new team members to the engineering stack and travel industry",
      ]}
    />
    <Experience
      company="Truveris"
      period={["December 2017", "April 2019"]}
      title="Software Engineer - Backend"
      location="New York City, NY"
      responsibilities={[
        "Utilize agile processes to enhance client facing web application, asynchronous data ingestion and processing tasks.",
        "Lead initiatives to modernize legacy codebase, improving scalability, readability, and unit test coverage",
        "Mentor junior employees by pair programming, code review, and preparing presentations to educate on coding best practices",
      ]}
    />
    <Experience
      company="Revintu"
      period={["February 2017", "November 2017"]}
      title="Software Engineer - Backend"
      location="Stamford, CT"
      responsibilities={[
        "Developed customer management system for video game arcade, powering two stores. React, Redux, Django, Celery, MySQL",
        "Developed online bill pay platform for medical healthcare systems. Built with React, Django, PHP, MySQL",
        "Integrate applications with Stripe, Square, Mailgun, and Twilio APIs",
        "Manage application deployments on DigitalOcean, monitoring using Unix tools, NewRelic, Sentry",
        "Implement system integrations with proprietary client healthcare systems for medical billing application",
      ]}
    />
    <Experience
      company="MedPilot"
      period={["June 2014", "February 2017"]}
      title="Co-Founder, Chief Technical Officer"
      location="New York City, NY"
      responsibilities={[
        "Leadership role on a team of 3 developers, utilizing AGILE, test driven development, continuous integration with CircleCI",
        "Coordinated system integration efforts with proprietary client healthcare systems using CSV/Excel files, XML API endpoints",
        "Integrate applications with Stripe, Mailgun, Lob, Twilio APIs",
        "Designed stack running on Docker containers, Nginx, PostgreSQL, Django, Django REST Framework, Celery, React, ES6",
        "Setup system monitoring using Pingdom, Kibana, Elasticsearch, Logstash, Rollbar, Sentry, internal monitoring scripts",
        "Identified and secured vulnerabilities in company policy, company systems and application stack",
      ]}
    />
    <Experience
      company="Polytechnic Institute of NYU"
      period={["May 2012", "May 2014"]}
      title="Software Engineer Intern"
      location="Brooklyn, NY"
      responsibilities={[
        "Contributor to Seattle, an open-source cloud computing platform powered by Python, running on OSX, Windows, Linux, Android",
        "Added plugin support to CLI virtual machine provisioning tool “SeaSH”, powered by Python",
        "Created a filter-based virtual machine provisioning tool for Seattle project “SeleXor”, powered by Debian, MySQL, Python and jQuery",
        "Troubleshoot and maintain existing Python, RePy (secure subset of Python), Java codebase",
        "Familiarize new team members with system architecture, Debian, Apache, MySQL, Python, Django",
      ]}
    />
  </ul>
);

export default WorkHistory;
