import echarts from './echarts'
import trueInstall from './install'

export default function install (proxyMPX) {
  trueInstall(proxyMPX, { echarts })
}
