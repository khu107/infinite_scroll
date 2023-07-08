import { useEffect, useState } from 'react';
import './App.css';
import { getAPI } from './api/scroll';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dog from './assets/dog.gif';
import Header from './components/Header';
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchNextPage();
  }, []);

  const fetchNextPage = async () => {
    try {
      const newData = await getAPI();
      setItems((prevItems) => [...prevItems, ...newData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Header />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchNextPage}
        hasMore={true}
        loader={<img style={{ margin: '0 auto' }} src={Dog} />}
      >
        <div className="px-10 py-20 m-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {items.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col bg-white shadow-xl drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
                >
                  <img
                    src={e.url}
                    alt="Fiction Product"
                    className="h-56 object-cover rounded-tl-md rounded-tr-md"
                  />
                  <div className="flex  items-center gap-2 px-3 py-2">
                    <img
                      src={e.url}
                      className="w-12 rounded-full rounded-full"
                      alt="Avatar"
                    />
                    <h1 className="font-semibold text-black text-base">
                      Adorable puppies!
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default App;
