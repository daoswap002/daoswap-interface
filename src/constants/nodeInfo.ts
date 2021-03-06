import { JSBI } from '@daoswapdex/daoswap-dex-sdk'

// Node Type
export const USDT_DAO_PAIR_ADDRESS = '0x1dbCac9E084A25d542893B14128a5910dF43a6b7'
export const USDT_DAO_STAKING_REWARDS_ADDRESS = [
  '0xAe7184fcCCFc096f5F48Fffe384Cce8433FCE0E0',
  '0xb04161cba8501b14fF302F1800AA96453e75941c',
  '0x64521114F1d6cc11443A3323D62B78C1a6f219De',
  '0x79438C8e9660C98845E7Fc8A136D1ff92a75F3Ec',
  '0xcA691423C64fa6B24CD54e45353A236521D2C7f5'
]
export const STAKING_LIMIT_FOR_LP_CONTRACT_ADDRESS = [
  '0xC6f7f50a18D1071FE08b4E3EEE4db7c8A49faEA0',
  '0xab5f0c81b2216c803AF6173d898a121314235dc5',
  '0x63f84cc9474f47f50784A98F498d0E236e982dc1',
  '0x655E6BD4742e04029a024dBA516b3ddb671AF017',
  '0xD21f4AE786aEFf05fC1717773DbA68aca2054D75',
  '0xE326AF702d311613C4614791b135E3703D15b948'
]

export const NODE_TYPE_STELLAR_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(10000),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 10000
export const NODE_TYPE_PLANETARY_MIN_USD_VALUE = JSBI.multiply(
  JSBI.BigInt(1000),
  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
) // 1000
