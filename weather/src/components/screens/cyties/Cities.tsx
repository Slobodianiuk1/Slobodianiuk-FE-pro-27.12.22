import {cities} from "@/mocks/cities.mock";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const Cities = () => {
  return (
    <Layout title={"Cities"} description={'Some text'}>
      <ul className='flex gap-20 mt-5'>
        {
          cities.map(city => (
            <li key={city} className="hover:text-amber-700">
              <Link href={`/cities/${city}`}>{city}</Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export default Cities;