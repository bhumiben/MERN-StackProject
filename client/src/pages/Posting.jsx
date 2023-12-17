import  { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules';
import { FaMapMarkerAlt } from 'react-icons/fa';

import 'swiper/css/bundle';

export default function Posting() {
    SwiperCore.use([Navigation]);
    const [posting, setPosting] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    useEffect(() => {
        const fetchPosting = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/posting/get/${params.postingId}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                return;
            }
            setPosting(data);
            setLoading(false);
            setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);

            }           
        };
        fetchPosting();

    }, [params.postingId]);
    console.log(loading);
  return(
    <main>
     {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
     {error && ( <p className='text-center my-7 text-2xl'>Something went wrong!</p>)}
     {posting && !loading && !error && (
  <div>
    <Swiper navigation>
      {posting.imageUrls.map((url) => (
        <SwiperSlide key={url}>
          <div
            className='h-[550px]'
            style={{ background: `url(${url}) center no-repeat`,
            backgroundSize:'auto' }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='flex flex-col max-w-4xl mx-auto p-3 my-1 gap-1'>
                        <div className='flex items-center ml-20 gap-2 text-slate-600 text-sm'>
                            <FaMapMarkerAlt className='text-green-700' />
                            <p className='ml-2'>{posting.location}</p>
                        </div>
                        <p className='text-slate-800 mt-4 ml-20'>
                            <span className='font-semibold text-black'>Description - </span>
                            {posting.description}
                        </p>
                    </div>
                </div>
)}

    </main>
  );
}
