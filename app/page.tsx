import { trending_data } from "@/data/trending";
import { SearchForm } from "@/components/SearchForm";


export default function Home() {
  return (
    
      <main className="bg-[#013B94]">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find Your Next Stay</h2>
        <h3 className="py-5 text-xl text-white">Search low prices on hotels, homes and much more...</h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4"> 
        <SearchForm />
      </section>
      <section className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">Most Popular Choices for Travellers from around the World</p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map( item => (
             <div key={item.id}  className="space-y-1 shrink-0 cursor-pointer">
              <img  src={item.src} alt="" className="w-80 h-72 object-vover rounded-lg pb-2" />
              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
             </div>
          ))}
        </div>
      </section>
      </main>
  );
}
