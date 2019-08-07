let installed = false

function install (proxyMPX, options) {
  if (installed) return
  proxyMPX.echarts = options.echarts
  installed = true
}

export default install
