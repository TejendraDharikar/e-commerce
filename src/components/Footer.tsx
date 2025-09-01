const Footer = () => {
  return (
    <div className="bg-black text-white mt-150 flex  justify-around">
      <div>
        <h1 className="font-bold text-lg m-1 pl-4">Get to know us</h1>
        <ul className="pl-5 text-sm">
          <li>About T-Cart</li>
          <li>Careers</li>
          <li>blog</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Digital Payments</li>
          <li>Affiliate Program</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-lg m-1 pl-4">Customer Care</h1>
        <ul className="pl-5 text-sm">
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Refunds & Returns</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
