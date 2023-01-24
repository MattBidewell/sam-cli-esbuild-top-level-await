export class Lambda {
  constructor(){}

  public handler() {
    return {
      statusCode: 200,
      body: "hello world",
    }
  }
}

const promise = Promise.resolve(() => {console.log("test")});
await promise;

const handlerClass = new Lambda();
export const lambdaHandler = handlerClass.handler.bind(handlerClass);