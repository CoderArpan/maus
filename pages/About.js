// pages/about.js
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Wrapper>
                <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">About Us</h1>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam euismod metus in sapien vehicula, at ultricies nisi tempus. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                        Integer quis consequat magna. Suspendisse potenti.
                    </p>
                    <div className="mt-6">
                        <Link href="/">
                            <a className="text-blue-500 hover:underline">Back to Home</a>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default About;
