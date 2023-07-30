import json
# test example:
# https://3c9e7sa4sl.execute-api.us-east-2.amazonaws.com/dev/calculator?x=5&y=9&op=multiply
# event is proxied from Api Gateway
def lambda_handler(event, context):
    # get the input from param
    x = event['queryStringParameters']['x']
    y = event['queryStringParameters']['y']
    op = event['queryStringParameters']['op']
    
    # log input and operations
    print(f"x:{x}, y:{y} op:{op}")
    
    # prepare for the respond body
    res_body = {}
    res_body['x'] = int(x)
    res_body['y'] = int(y)
    res_body['op'] = op
    res_body['ans'] = handle(int(x), int(y), op) 

    # prepare the http response
    http_res = {}
    http_res['statusCode'] = 200
    # mandatory heade format
    http_res['headers'] = {}
    http_res['headers']['Content-Type'] = 'application/json'
    http_res['headers']['Access-Control-Allow-Origin'] = '*'
    http_res['isBase64Encoded'] = False
    http_res['body'] = json.dumps(res_body)    
    
    return http_res

def handle(x, y, op):
    if(op == 'add'):
        return x + y
    elif(op == 'minus'):
        return x - y
    elif(op == 'multiply'):
        return x * y
    elif(op == 'divide'):
        return x / y
