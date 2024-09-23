import React from "react";

const newsItems = [
  {
    id: 1,
    title: "New Recipe Trends for 2024",
    img_url:
      "https://smakota.pl/wp-content/uploads/w_images/2024/04/przepis-13040-1600x900.webp",
  },
  {
    id: 2,
    title: "Top 10 Dishes to Try This Fall",
    img_url:
      "https://smakota.pl/wp-content/uploads/w_images/2024/04/przepis-13040-krok-2-800x450.webp",
  },
  {
    id: 3,
    title: "Why Homemade is Better",
    img_url:
      "https://smakota.pl/wp-content/uploads/w_images/2024/04/przepis-13040-krok-3-800x450.webp",
  },
  {
    id: 4,
    title: "The Rise of Plant-Based Foods",
    img_url:
      "https://smakota.pl/wp-content/uploads/w_images/2024/04/przepis-13040-krok-4-800x450.webp",
  },
];

const NewsSidebar = () => {
  return (
    <div className="p-6 bg-[#f8f9d1] dark:bg-[#1a1a1a]  hidden lg:block">
      <h2 className="text-xl font-bold mb-4 p-4 pl-0 tex">Food News</h2>
      <div className="space-y-8">
        {newsItems.map((news) => (
          <div key={news.id} className="flex items-start space-x-4">
            <img
              src={news.img_url}
              alt={news.title}
              className="w-40 h-30 object-cover "
            />
            <span className="text-lg font-semibold">{news.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSidebar;
