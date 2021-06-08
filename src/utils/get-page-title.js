import defaultSettings from '@/settings'

const title = defaultSettings.title || '中科天玑 - 信息管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
