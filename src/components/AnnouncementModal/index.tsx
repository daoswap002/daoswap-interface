import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Text } from 'rebass'
import { CloseIcon } from '../../theme/components'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { useAnnouncementInfoToggle, useAnnouncementInfoVisible } from '../../state/announcement/hooks'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  overflow-y: auto;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`

function ConfirmationContent({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={16}>
            {t('Announcement')}
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <AutoColumn gap="auto" justify={'start'}>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('1, Invitation release.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Will be implemented on January 23rd, 2022 at 11#58;00 am, after this time.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Directly invite planetary stellar, the inviting party gets DST according to 20% of the pledged LP value.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Directly inviting single coin DAO pledges, the pledged volume will be calculated according to 60% of the DAO pledged volume, and the inviting party will receive DST according to 20% of the pledged volume.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                "The DST reward of the invitation unlock will be transferred directly to the inviter's wallet address when the pledge party pledges."
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Phase 5 Node Pledge and Phase 3 Single Coin Pledge.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('It will be opened on January 23rd, 2022 at 11#58;00 am.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The fifth node pledge with a cap of 300,000 and an annualized rate of 114% (30% DAO, 70% DST)')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Phase 3 single coin pledge, cap 100,000, 58% annualized rate (30% DAO, 70% DST)')}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('3, Task 6.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Starting with the 5th period of arithmetic and competitive mining, perform task 6#58; reward the number of new nodes within the team according to the team of node identity wallet address (except for existing Genesis and seed nodes.)'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Task 6 rewards only pledged 1-year planets and stars, and those still unpledged are automatically counted as rewards in the next period after pledging. If you need to unlock mission 6, please pledge as soon as possible during the node pledge period, missing the pledge period will not count towards the mission 6 reward.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Collection address.')}{' '}
              <StyledLink href={'https://www.daoswap.cc/task-6'}>https://www.daoswap.cc/task-6</StyledLink>
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('4, Hask and Competitive Mining#58;')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Phase 8 of Hask & Competition Mining has ended on March 4, 2022 at 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The 9th period of Arithmetic and Competition Mining has started on March 4, 2022 at 11#58;00 and will end on March 18, 2022 at 11#58;00.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The number of single coin pledges will also continue to count towards the count. The new part of the arithmetic value is calculated at 200%, and the unincreased or reduced arithmetic remains unchanged at 100% statistics.'
              )}
            </Text>
          </Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default function AnnouncementModal() {
  const toggleAnnouncementInfo = useAnnouncementInfoToggle()
  const showAnnouncementInfo = useAnnouncementInfoVisible()

  return (
    <Modal isOpen={!showAnnouncementInfo} onDismiss={toggleAnnouncementInfo} maxHeight={90}>
      <ConfirmationContent onDismiss={toggleAnnouncementInfo} />
    </Modal>
  )
}
