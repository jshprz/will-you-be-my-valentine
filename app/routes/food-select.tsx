import { Link } from "@remix-run/react";

export default function FoodSelect() {
  return (
    <div className="flex items-center justify-center min-h-screen sm:h-screen bg-pink-100">
      <div className="text-center font-courier">
        <div id="foodquestion" className="mb-12 text-pink-600">
          <b className="text-2xl">What food would you like to eat?</b>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-pink-600 mb-12">
          {[
            { src: "/maki.jpeg", alt: "Maki", value: "Maki", label: "Maki" },
            { src: "/siomai.jpeg", alt: "Siomai", value: "Siomai", label: "Siomai" },
            { src: "/koreanfood.jpeg", alt: "koreanfood", value: "Korean food", label: "Korean Food" },
            { src: "/langka.jpeg", alt: "Langka", value: "Langka", label: "Ginataang Langka" },
            { src: "/steak.jpeg", alt: "Steak", value: "Steak", label: "Steak" },
            { src: "/kare-kare.jpeg", alt: "Kare-kare", value: "Kare-kare", label: "Kare-Kare" },
            { src: "/pata.jpg", alt: "Paksiw Pata", value: "Paksiw Pata", label: "Paksiw Pata" },
            { src: "/henlin.jpeg", alt: "Henlin", value: "Henlin", label: "Henlin" },
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
          to="/todo-after"
          className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-800 transition duration-300"
        >
          Click me cuz
        </Link>
      </div>
    </div>
  );
}