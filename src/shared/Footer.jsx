

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex justify-center md:justify-start mt-4">
            <a href="#" className="mr-4 hover:text-gray-300">Facebook</a>
            <a href="#" className="mr-4 hover:text-gray-300">Twitter</a>
            <a href="#" className="mr-4 hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2">123 Main Street, City, Country</p>
          <p>+123 456 7890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
