import * as echarts from './echarts-ali'
import trueInstall from './install'

export default function install (proxyMPX) {
  trueInstall(proxyMPX, { echarts })
}
