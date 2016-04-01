import Index from './components/Exchange/index.vue'
import Exchange from './components/Exchange/Index/exchange.vue'
import Tid from './components/Exchange/Tid/index.vue'
import Test from './components/Exchange/Test/index.vue'
import Quote from './components/Exchange/Quote/index.vue'
import Message from './components/Message/index.vue'
import Sns from './components/SNS/index.vue'
import Explorer from './components/Explorer/index.vue'
import Me from './components/Me/index.vue'

export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: Index,
      subRoutes: {
        '/': {
          name: 'exchange',
          component: Exchange
        },
        '/index': {
          name: 'exchange',
          component: Exchange
        },
        '/tid': {
          name: 'tid',
          component: Tid
        },
        '/test': {
          name: 'test',
          component: Test
        },
        '/quote': {
          name: 'quote',
          component: Quote
        }
      }
    },
    '/message': {
      name: 'message',
      component: Message
    },
    '/sns': {
      name: 'sns',
      component: Sns
    },
    '/explorer': {
      name: 'explorer',
      component: Explorer
    },
    '/me': {
      name: 'me',
      component: Me
    }
  })

  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}
