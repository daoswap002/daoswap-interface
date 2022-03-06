import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForLP'
import { NodeTabs } from '../../components/NavigationTabs/node'
// import { useActiveWeb3React } from '../../hooks'

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

export default function StakingLP() {
  const { t } = useTranslation()
  // const { account } = useActiveWeb3React()

  // // TODO: is display staking rewards info list for specical address
  // const whiteList = [
  //   '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
  //   '0xBdB9BD48CDCF075D66f81f083b9Ab618a0530c31',
  //   '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de'
  // ]
  // const inWhiteList = whiteList.filter(item => item.toLowerCase() === account?.toLowerCase())

  const stakingList: any[] = [
    {
      period: 6,
      name: 'StakingLPPeriod6',
      capAmount: 300000,
      apr: 112,
      aprDAO: 0,
      aprDST: 112,
      openStatus: true,
      display: 'normal'
      // display: inWhiteList.length > 0 ? 'normal' : 'none'
    },
    {
      period: 5,
      name: 'StakingLPPeriod5',
      capAmount: 300000,
      apr: 114,
      aprDAO: 34.2,
      aprDST: 79.8,
      openStatus: false,
      display: 'normal'
    },
    {
      period: 4,
      name: 'StakingLPPeriod4',
      capAmount: 300000,
      apr: 116,
      aprDAO: 34.8,
      aprDST: 81.2,
      openStatus: false,
      display: 'normal'
    },
    {
      period: 3,
      name: 'StakingLPPeriod3',
      capAmount: 400000,
      apr: 116,
      aprDAO: 58,
      aprDST: 58,
      openStatus: false,
      display: 'normal'
    },
    {
      period: 2,
      name: 'StakingLPPeriod2',
      capAmount: 400000,
      apr: 118,
      aprDAO: 59,
      aprDST: 59,
      openStatus: false,
      display: 'normal'
    },
    {
      period: 1,
      name: 'StakingLPPeriod1',
      capAmount: 500000,
      apr: 120,
      aprDAO: 60,
      aprDST: 60,
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
                <TYPE.white fontWeight={600}>{t('Hash Node Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>
                  {t('Stake DAO/USDT LP, share 1/3 fee.')}
                  <br />
                  <TYPE.white fontSize={9}>0xa9bB710996d6ed61B83a5EAB583bAe683199c2de</TYPE.white>
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-lp'} />

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <PoolSection>
          {stakingList?.length === 0
            ? t('No active staking')
            : stakingList?.map(stakingInfo => {
                return <PoolCard key={stakingInfo.period} stakingInfo={stakingInfo} />
              })}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
