import { getVideosByCategory } from "@/data/videos";
import { Locale } from "@/i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface VideosSectionProps {
  t: any;
  tDynamic: any;
  loc: Locale;
}

const VIDEO_CATEGORIES = ["setup", "tutorials", "tips"] as const;

export function VideosSection({ t, tDynamic, loc }: VideosSectionProps) {
  return (
    <section id="videos" className="border-b-2 border-black dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          {t("home.videos.title")}
        </h2>
        {VIDEO_CATEGORIES.map((category) => {
          const categoryVideos = getVideosByCategory(category);
          if (categoryVideos.length === 0) return null;
          return (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-sm font-bold mb-4 font-mono dark:text-gray-300">
                [ {tDynamic(`videos.categories.${category}`).toUpperCase()} ]
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categoryVideos.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title[loc]}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 dark:text-white">
                        {video.title[loc]}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {video.description[loc]}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

