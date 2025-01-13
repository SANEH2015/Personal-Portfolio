import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>

              {/* Render languages */}
              {item.languages && (
                <div className="skills--section--languages">
                  <h4>Languages</h4>
                  <ul>
                    {item.languages.map((lang, idx) => (
                      <li key={idx}>
                        <img src={lang.icon} alt={lang.name} title={lang.name} />
                        <span>{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render frameworks */}
              {item.frameworks && (
                <div className="skills--section--frameworks">
                  <h4>Frameworks</h4>
                  <ul>
                    {item.frameworks.map((framework, idx) => (
                      <li key={idx}>
                        <img
                          src={framework.icon}
                          alt={framework.name}
                          title={framework.name}
                        />
                        <span>{framework.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render tools for UI/UX */}
              {item.tools && (
                <div className="skills--section--tools">
                  <h4>Tools</h4>
                  <ul>
                    {item.tools.map((tool, idx) => (
                      <li key={idx}>
                        <img src={tool.icon} alt={tool.name} title={tool.name} />
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
