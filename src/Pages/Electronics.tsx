import { NavLink } from "react-router-dom";
import { apidata } from "../components/apidata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Electronics = () => {
  const { data, isLoading, isError } = apidata();
  const electronics = data?.filter((item) => item.category === "electronics");
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error fetching data</div>;
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 p-6">
        {electronics?.map((item) => (
          <div
            key={item.id}
            className="p-4 text-blue-900 bg-gray-50 shadow-md rounded-md hover:shadow-blue-500 hover:bg-gray-700 hover:text-white transition curser-pointer"
          >
            <NavLink to={`/electronics/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-32 mx-auto mb-4"
              />
              <div className="mt-2 text-center font-bold text-lg">
                ${item.price}
              </div>
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
              <p className="text-sm mt-2">{item.description}</p>
            </NavLink>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Electronics;
