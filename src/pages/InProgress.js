import React, { useEffect } from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
import CouncilTitle from '../components/CouncilTitle';
import BotNavBar from '../components/BotNavBar';
import ReportCard from '../components/ReportCard';

export default function CouncilHome() {

    const user = auth.currentUser;
    const nav = useNavigate();

    //simple check. if user is not signed in (a public member), redirect to nav
    useEffect(() => {
        if (user === null) {
            nav('/')
        }
    }, [auth])


    return (
        <div className='w-screen h-screen px-12 flex flex-col z-10 py-4'>
            <div className='flex flex-grow flex-col justify-between h-full'>
                {/* Title */}
                <CouncilTitle text='In Progress' />

                {/* Main section */}
                <div className='no-scrollbar overflow-auto flex flex-col flex-grow my-4 h-full'>
                    {/* TODO: FutureBuilder based on Firebase data that is streamed */}
                    <ReportCard status='approved' />
                    <ReportCard status='approved' />
                    <ReportCard status='mantaining' />
                    <ReportCard status='approved' />
                    <ReportCard status='approved' />
                    <ReportCard status='mantaining' />
                    <ReportCard status='mantaining' />
                </div>

                {/* Bottom NavBar */}
                <BotNavBar tabIndex={0} />
            </div>
        </div>
    )
}
