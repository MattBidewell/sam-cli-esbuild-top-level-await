export class Lambda {
  constructor(){}

  public handler() {
    return {
      statusCode: 200,
      body: "hello world2.0123456",
    }
  }
}

const promise = new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log("timeout!")
    resolve()
  }, 1000)
});

await promise;

const handlerClass = new Lambda();
export const lambdaHandler = handlerClass.handler.bind(handlerClass);