import React from 'react';
import { ExternalLink, Code, Newspaper, GraduationCap, Music, Gamepad2, ShoppingCart, Heart, Presentation, Icon, ShieldQuestion, RectangleVertical } from 'lucide-react';
import { title } from 'process';

const WebsiteLinks = () => {
  const linkGroups = [
    {
      title: "Presentations & Articles",
      icon: <Presentation className="w-6 h-6" />,
      color: "bg-blue-500",
      links: [
        { name: "GitHub", url: "https://github.com", description: "Code hosting platform" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", description: "Developer Q&A community" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "Web development documentation" },
        { name: "CodePen", url: "https://codepen.io", description: "Front-end code playground" }
      ]
    },{
      title : "App building",
      Icon : <Code className="w-6 h-6" />,
      color: "bg-green-500",
      links: [
        { name: "Natively", url: "https://natively.dev", description: "Build native mobile apps with React Native" },
      ]
    },{
      title : "Security",
      Icon: <ShieldQuestion className="w-6 h-6" />,
      color: "bg-red-500",
      links: [
        { name: "HackerAi" , url:"" ,description:""}
      ]
    },{
      title : "React",
      Icon : <RectangleVertical className='w-6 h-6'/>,
      color: "bg-purple-500",
      links:[{
        name: "React bits" ,url: "reactbits.dev" ,description:""
      }]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">Organized Website Directory</h1>
          <p className="text-slate-600 text-lg">Curated links organized by topic</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {linkGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className={`${group.color} p-4 flex items-center gap-3`}>
                <div className="text-white">{group.icon}</div>
                <h2 className="text-xl font-bold text-white">{group.title}</h2>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-500 mt-0.5">
                            {link.description}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Click any link to visit the website in a new tab</p>
        </footer>
      </div>
    </div>
  );
};

export default WebsiteLinks;