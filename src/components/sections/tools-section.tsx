import { Tool } from "@/data/tools";
import { Locale } from "@/i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ToolsSectionProps {
  t: any;
  loc: Locale;
  availableTools: Tool[];
  comingSoonTools: Tool[];
}

export function ToolsSection({ t, loc, availableTools, comingSoonTools }: ToolsSectionProps) {
  return (
    <section className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {t("home.tools.title")}
        </h2>
        <div className="space-y-6 mb-6">
          {availableTools.map((tool) => (
            <div key={tool.slug} className="border-2 border-black dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
                  <span className="text-xs border border-black dark:border-gray-600 px-1 dark:text-gray-300">SUPPORTED</span>
                </div>
                {tool.homepageUrl && (
                  <a href={tool.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-sm border border-black dark:border-gray-600 px-2 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300" title={tool.name}>↗</a>
                )}
              </div>
              {tool.tagline && (
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono mb-3">{tool.tagline[loc]}</div>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tool.description[loc]}</p>
              {tool.strengths && tool.bestFor && (
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-xs font-bold mb-2 dark:text-gray-300">{t("tools.strengths")}</h4>
                    <ul className="space-y-1">
                      {tool.strengths[loc].map((s, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold mb-2 dark:text-gray-300">{t("tools.bestFor")}</h4>
                    <ul className="space-y-1">
                      {tool.bestFor[loc].map((b, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400">• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {tool.products && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.products.map((product) => (
                    <span key={product} className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-0.5 dark:text-gray-400">{product}</span>
                  ))}
                </div>
              )}
              <a href={tool.gatewayUrl || "https://viber.vn"} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm hover:bg-gray-800 dark:hover:bg-gray-200">
                {t("tools.accessGateway")} →
              </a>
            </div>
          ))}
        </div>
        {/* Coming Soon */}
        <div className="space-y-6">
          {comingSoonTools.map((tool) => (
            <div key={tool.slug} className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 opacity-60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold dark:text-white">{tool.name}</h3>
                  <span className="text-xs border border-gray-400 dark:border-gray-600 px-1 text-gray-400 dark:text-gray-500">COMING SOON</span>
                </div>
                {tool.homepageUrl && (
                  <a href={tool.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-sm border border-gray-300 dark:border-gray-600 px-2 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400" title={tool.name}>↗</a>
                )}
              </div>
              {tool.tagline && (
                <div className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-3">{tool.tagline[loc]}</div>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{tool.description[loc]}</p>
              {tool.strengths && tool.bestFor && (
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-xs font-bold mb-2 dark:text-gray-400">{t("tools.strengths")}</h4>
                    <ul className="space-y-1">
                      {tool.strengths[loc].map((s, i) => (
                        <li key={i} className="text-xs text-gray-500 dark:text-gray-500">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold mb-2 dark:text-gray-400">{t("tools.bestFor")}</h4>
                    <ul className="space-y-1">
                      {tool.bestFor[loc].map((b, i) => (
                        <li key={i} className="text-xs text-gray-500 dark:text-gray-500">• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {tool.products && (
                <div className="flex flex-wrap gap-2">
                  {tool.products.map((product) => (
                    <span key={product} className="text-xs border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-gray-400 dark:text-gray-500">{product}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

