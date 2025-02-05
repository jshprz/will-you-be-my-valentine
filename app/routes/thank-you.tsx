import { Link } from "@remix-run/react";

export default function ThankYou() {
    return (
        <div className="flex items-center justify-center min-h-screen sm:h-screen bg-pink-100">
            <div className="text-center font-courier">
                <h1 className="text-4xl font-bold text-pink-600 mb-6">
                    Thank you for being my Valentine! 💖
                </h1>
                <img src="/exciting.gif" alt="Rizz" className="w-1/2 mx-auto rounded-lg">
                </img>
                <br/>
                <h1 className="text-4xl font-bold text-pink-600 mb-6">
                    We're not done yet! 
                </h1>
                <Link
                    to="/food-select"
                    className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-800 transition duration-300"
                >
                    Click me cuz
                </Link>
            </div>
        </div>
    );
  }