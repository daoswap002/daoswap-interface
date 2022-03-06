import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForSingle'
import { NodeTabs } from '../../components/NavigationTabs/node'
import { useActiveWeb3React } from '../../hooks'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

export default function StakingSingle() {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const isHecoNetwork = chainId === ChainId.HECO_MAINNET || chainId === ChainId.HECO_TESTNET

  // // TODO: is display staking rewards info list for specical address
  // const whiteList = [
  //   '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
  //   '0xBdB9BD48CDCF075D66f81f083b9Ab618a0530c31',
  //   '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de'
  // ]
  // const inWhiteList = whiteList.filter(item => item.toLowerCase() === account?.toLowerCase())

  const stakingList: any[] = [
    {
      period: 3,
      name: 'StakingDAOPeriod3',
      capAmount: 100000,
      apr: 58,
      aprDAO: 17.4,
      aprDST: 40.6,
      openStatus: true,
      display: 'normal'
      // display: inWhiteList.length > 0 ? 'normal' : 'none'
    },
    {
      period: 2,
      name: 'StakingDAOPeriod2',
      capAmount: 100000,
      apr: 58,
      aprDAO: 29,
      aprDST: 29,
      openStatus: false,
      display: 'normal'
    },
    {
      period: 1,
      name: 'StakingDAOPeriod1',
      capAmount: 100000,
      apr: 60,
      aprDAO: 30,
      aprDST: 30,
      openStatus: false,
      display: 'normal'
    }
  ]

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t('DAO Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>{t('Stake DAO to get extra income.')}</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      {isHecoNetwork ? (
        <>
          <NodeTabs active={'staking-single'} />
          <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
            <PoolSection>
              {stakingList?.length === 0
                ? t('No active staking')
                : stakingList?.map(stakingInfo => {
                    return <PoolCard key={stakingInfo.period} stakingInfo={stakingInfo} />
                  })}
            </PoolSection>
          </AutoColumn>
        </>
      ) : (
        <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
          <PoolSection>{t('Please connect to HECO Network')}</PoolSection>
          <PoolSection>
            {t('Node is only available on HECO. Switch your network to HECO Mainnet to view Staking LP and DAO.')}
          </PoolSection>
        </AutoColumn>
      )}
    </PageWrapper>
  )
}
