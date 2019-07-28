const Mock = require('mockjs');
let Random = Mock.Random;
let data = Mock.mock({
  'data|3': [
    {
      id: '@id',
      pic () {
        return Mock.Random.image('750x250',Random.color())
      },
    },
  ],
  'total': 3
})




export default {
  '/api/v1/banner': {
    "code": 200,
     "data": data
  }
}
