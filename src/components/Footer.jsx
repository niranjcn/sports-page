import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-blue-900 bg-opacity-70 text-white py-6 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 text-center md:text-left">
            
                <div>
                    <h3 className="text-center font-bold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-center">
                        <a
                            href="https://www.instagram.com/stm_kannur_official_?igsh=ODdmYm1ja2JnNHF3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                                className="w-6 h-6 inline"
                            />
                        </a>

                    </div>
                </div>
            </div>

            <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Copyright STM. All Rights Reserved.</p>
                <p>Designed By</p> 
                <a
                    href="https://www.vblazeatstm.tk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-blue-600 hover:text-blue-800"
                >
                    Vblaze
                </a>
            </div>
        </footer>
    );
};

export default Footer;
