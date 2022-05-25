import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import CouncilTitle from '../components/CouncilTitle';
import BotNavBar from '../components/BotNavBar';
import ReportCard from '../components/ReportCard';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../Firebase';


export default function CouncilHome() {

    const user = auth.currentUser;
    const nav = useNavigate();

    //simple check. if user is not signed in (a public member), redirect to nav
    useEffect(() => {
        if (user === null) {
            nav('/')
        }
    }, [auth])

    const [output, setOutput] = useState([]);

    function reload() {
        async function LoadCards() {
            const q = query(collection(db, "records"), where("status", "==", 'pending'));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setOutput(prevOutput => [...prevOutput, { 'id': doc.id, ...doc.data() }])
                console.log(doc.id, " => ", doc.data());
            });
        }
        //repopulate after every refresh
        setOutput([]);
        LoadCards();
    }

    useEffect(() => {
        reload()
    }, []);

    return (
        <div className='w-screen h-screen px-12 flex flex-col z-10 py-4 no-scrollbar'>
            <div className='flex flex-grow flex-col justify-between h-full no-scrollbar'>
                {/* Title */}
                <CouncilTitle text='New' />

                {/* Main section */}

                <div className='no-scrollbar overflow-auto flex flex-col flex-grow my-4 h-full'>
                    {output.length > 0 ? output.map(
                        el => {
                            console.log(el, 'rendering');
                            return <ReportCard data={el} key={el.id} reload={reload} />
                        }
                    ) : <div className='font-xl text-gray-400 flex flex-grow flex-col justify-center items-center'>No new reports</div>}
                </div>


                {/* Bottom NavBar */}
                <BotNavBar tabIndex={1} />
            </div>
        </div>
    )
}
