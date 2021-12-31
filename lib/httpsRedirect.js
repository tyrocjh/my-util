/**
 * @desc   HTTP跳转HTTPS
 *
 * eg.
 * httpsRedirect(); // 若在`http://www.baidu.com`, 则跳转到`https://www.baidu.com`
 */
const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1])
}

module.exports = httpsRedirect
