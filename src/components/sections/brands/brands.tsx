import React from 'react'
import styles from './brands.module.scss';
import Biconomy from "../../icons/biconomy.svg";
import arcana from "../../icons/arcana.svg";
import NFTstorage from "../../icons/NFTstorage.svg";
import TableLand from "../../icons/tableland.svg";
import near from "../../icons/near.svg";
import ocean from "../../icons/ocean.svg";
import starkware from "../../icons/starkware.svg";
import devfolio from "../../icons/devfolio.svg";
import hedera from "../../icons/hedera.svg";
import filecoin from "../../icons/filecoin.svg";
import chingari from "../../icons/chingari.svg";
import chainlink from "../../icons/chainlink.svg";
import aptos from "../../icons/aptos.svg";
import ecosystem from "../../icons/ecosystem.svg";
import covalent from "../../icons/covalent.svg";
import useWindowSize from '@/components/helpers/get-window';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';






function Brands() {
    return (
        <div style={{ marginBottom: '4rem' }}>
            <div className='heading'
                style={{
                    textAlign: 'left',
                    padding: '2%'
                }}>
                Our Supporters
            </div>
            <div className={styles.brands}>
                <div className='flex py-[2rem]'>
                    <Image src={Biconomy} style={{ marginRight: "5%" }}
                        alt="Biconomy logo" />
                    <Image src={NFTstorage} style={{ marginRight: "5%" }}
                        alt="NFTstorage logo" />
                    <Image src={arcana} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={TableLand} style={{ marginRight: "5%" }}
                        alt="Biconomy logo" />
                    <Image src={near} style={{ marginRight: "5%" }}
                        alt="NFTstorage logo" />
                    <Image src={ocean} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={starkware} style={{ marginRight: "5%" }}
                        alt="NFTstorage logo" />
                    <Image src={devfolio} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={hedera} style={{ marginRight: "5%" }}
                        alt="Biconomy logo" />
                    <Image src={filecoin} style={{ marginRight: "5%" }}
                        alt="NFTstorage logo" />
                    <Image src={chingari} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={chainlink} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={aptos} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={ecosystem} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                    <Image src={covalent} style={{ marginRight: "5%" }}
                        alt="arcana logo" />
                </div>
            </div>
        </div>
    )
}

export default Brands