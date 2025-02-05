import { Link } from "@remix-run/react";

export default function TodoAfter() {
  return (
    <div className="flex items-center justify-center min-h-screen sm:h-screen bg-pink-100">
        <div className="text-center font-courier">
            <div id="foodquestion" className="mb-12 text-pink-600">
                <b className="text-2xl">What do we do afterward?</b>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-pink-600 mb-12">
                {[
                    { src: "/stargazing.jpeg", alt: "Stargazing", value: "Stargazing", label: "Stargazing" },
                    { src: "/movie.jpg", alt: "Watch movie", value: "Watch movie", label: "Watch movie" },
                    { src: "/dance.jpg", alt: "Dance", value: "Dance", label: "Dance" },
                    { src: "/museum.jpeg", alt: "Museum", value: "Museum", label: "Museum" },
                    { src: "/takestwo.jpg", alt: "Play", value: "Play", label: "Play" },
                    { src: "/paint.jpeg", alt: "Paint", value: "Paint", label: "Paint" },
                    { src: "/arcade.jpeg", alt: "Arcade", value: "Arcade", label: "Arcade" },
                    { src: "/rest.jpeg", alt: "Rest", value: "Rest", label: "Rest" },
                ].map((food, index) => (
                    <div key={index} className="food-item flex flex-col items-center">
                        <img src={food.src} alt={food.alt} className="w-32 h-32 object-cover rounded-full mb-2" />
                        <label className="text-lg">
                            <input type="checkbox" name="food" value={food.value} className="mr-2" />
                            {food.label}
                        </label>
                    </div>
                ))}
            </div>
            <Link
                to="/last"
                className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-800 transition duration-300"
            >
                Last Page
            </Link>
        </div>
    </div>
  );
}