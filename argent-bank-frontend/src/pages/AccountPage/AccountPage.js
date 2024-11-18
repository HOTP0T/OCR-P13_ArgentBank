import React from 'react'
import { useParams } from "react-router-dom"

import Header from '../../components/Header/Header'
import TransactionHeader from '../../components/TransactionHeader/TransactionHeader'
import TransactionDashboard from '../../components/TransactionDashboard/TransactionDashboard'
import Footer from '../../components/Footer/Footer'

import '../AccountPage/AccountPage.css'

/**
 * Component React which displays the account's info of the user
 * @component
 */

const AccountPage = () => {

    const { accountId } = useParams()

    return (
        <div className='accountPageSection'>
            <Header />
            <div className='accountInfos'>
                <TransactionHeader accountId={accountId} />
                <TransactionDashboard accountId={accountId} />
            </div> 
            <Footer />
        </div>
    )    
}

export default AccountPage