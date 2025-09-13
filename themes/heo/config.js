const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示,若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2019-01-01', // 建站日期,用于计算网站运行的第几天

  // 首页顶部通知条滚动内容,如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '一切以学生为根本！', url: 'https://blog.x1ao.shop'  }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享教学用品',
  HEO_HERO_TITLE_2: '与行业资讯',
  HEO_HERO_TITLE_3: 'BLOG.X1AO.SHOP',
  HEO_HERO_TITLE_4: '新品上线',
  HEO_HERO_TITLE_5: '最新教学用品资讯分享',
  HEO_HERO_TITLE_LINK: 'https://blog.x1ao.shop',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: {title:'行业资讯',url:'/tag/文章'},HEO_HERO_CATEGORY_2: {title:'学具产品',url:'/tag/学具'},HEO_HERO_CATEGORY_3: {title:'教具产品',url:'/tag/教具'},

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '初中',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  
  HEO_INFOCARD_GREETINGS:[
    '你好！我是',
    '生本教具'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/xiao103',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://blog.x1ao.shop',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://blog.x1ao.shop',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:', 
}
export default CONFIG
