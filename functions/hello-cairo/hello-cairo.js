async function hello (name) {
  if (name) {
    return Promise.resolve(`Hello, ${name}`)
  } else {
    return Promise.resolve(`Hello, Nobody`)
  }
}

exports.handler = async function (event, context) {
  try {
    const name = event['queryStringParameters'].name
    const body = await hello(name)
    return { statusCode: 200, body }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
