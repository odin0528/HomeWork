import https from 'https'

export default function ({ $axios, $cookies, req, redirect, store, app }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.onRequest((config) => {
    if (process.client) {
      $axios.setHeader('hostname', location.hostname)
    } else {
      $axios.setHeader('hostname', req.headers.host)
    }

    if (store.state.isLogin) {
      $axios.setToken(store.state.token)
    }
  })

  $axios.onResponse((res) => {
    if (res.data.code === 401) {
      redirect('/login')
    } else if (res.data.code === 500) {
      app.$toast(
        res.data.data || '網路傳送異常，若持續發生，請點擊右下圖示連絡我們唷',
        'danger'
      )
    }
  })

  $axios.onResponseError((res) => {
    if (process.client)
      app.$toast('網路傳送異常，若持續發生，請點擊右下圖示連絡我們唷')
    else redirect('/')
  })
}
