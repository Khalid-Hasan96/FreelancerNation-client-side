import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCamera, FaStar, FaTrashAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Skeleton from '../Shared/Skeleton/Skeleton';


const SellerDashboard = () => {
    const { user } = useContext(AuthContext);


    const photo = user?.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'


    const { data: gigs = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/seller/gig`)
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })


    const handleDeletingGig = _id => {

        const agree = window.confirm('Are you sure delete this buyer !!!')

        if (agree) {
            // console.log(_id);
            fetch(`http://localhost:5000/gig/delete/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Seller Gig deleted successfully`)
                        refetch();
                    }

                })

        }


    };



    if (isLoading) {
        return <Skeleton></Skeleton>
    };

   


    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16 bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start'>
                <div className='xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300'>

                    <div className='w-48 h-48 rounded-full relative'>
                        <img className='w-full h-full rounded-full' src={photo} alt="user" />
                        <div className='absolute top-[153px] left-[120px]'>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center mt-5'>
                        <h2 className='font-bold text-lg'>{user?.displayName}</h2>

                        {/* set expert  */}
                        <h3 className='italic'>Front-end Developer</h3>


                        <div className='flex gap-2 justify-center'>
                            {
                                [1, 2, 3, 4, 5].map((start, index) => {
                                    return <div key={index}>
                                        <FaStar className='text-yellow-500 font-bold text-lg' />

                                    </div>
                                })
                            }
                            <span className='text-base'>{`6 ( reviews )`}</span>
                        </div>


                    </div>
                    <div className='w-full border-t-[0.2px]'></div>

                    <div className='grid grid-cols-2 gap-2 text-slate-500 py-5'>
                        <div className='flex gap-10'>
                            <FaMapMarkerAlt />
                            <h3 className='text-end'>From</h3>
                        </div>
                        <h3 className='text-end'>Bangladesh</h3>
                        <div className='flex gap-10'>
                            <FaUser />
                            <h3 className='text-end'>Member Since</h3>
                        </div>
                        <h3 className='text-end'>Feb 2023</h3>
                        <div className='flex gap-10'>
                            <FaPaperPlane />
                            <h3 className='text-end'>Last Delivery</h3>
                        </div>
                        <h3 className='text-end'>3 months</h3>
                    </div>
                            
                    <div className='w-full border-t-[0.2px]'></div>
                </div>
                <div className='xl:col-span-8'>
                    <div>
                        <div className='bg-white p-3 border border-slate-300'>
                            <h2 className='uppercase font-bold text-sm text-start'>Active gigs</h2>
                        </div>

                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5 xl:mt-10'>
                            {
                                gigs?.map((gig, index) => {
                                    return <div key={index}>
                                        <div className="w-full overflow-hidden bg-white border border-slate-300 rounded-md hover:shadow-2xl">

                                            <img className="object-cover w-full h-36" src={gig?.serviceImage} alt="avatar" />

                                            <div className="py-5 px-3 text-star">
                                                <span className="text-sm text-slate-600">{gig?.title}</span>

                                                <div className='mt-5 flex justify-between flex-row-reverse items-center'>
                                                    <h3 className='font-semibold uppercase text-green-600'>starting at <strong className='text-black'>
                                                        ${gig?.price}
                                                    </strong></h3>

                                                    <button>
                                                        <FaTrashAlt
                                                            onClick={() => handleDeletingGig(gig._id)}
                                                            className='text-red-500' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                })
                            }



                            <Link to='/seller_dashboard/create-gig' className="w-full overflow-hidden bg-white border border-slate-300 flex flex-col justify-center items-center py-7">
                                <div className='w-24 text-green-600'>
                                    <FaPlusCircle className='w-full text-8xl' />
                                </div>
                                <h3 className='font-semibold'>Create a new gig</h3>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;