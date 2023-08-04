using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace AzureFunction
{
    public static class calculator
    {
        [FunctionName("calculator")] // defines the name of the function
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            double x = double.Parse(req.Query["x"]);
            double y = double.Parse(req.Query["y"]);
            string op = req.Query["op"];

            double calcResult=3;

            if (op == "add") {
                calcResult = x + y;
            } else if (op == "minus") {
                calcResult = x - y;
            }
            else if (op == "multiply") {
                calcResult = x * y;
            }
             else if (op == "divide") {
                calcResult = x / y;
            }
            
            var resDict = new Dictionary<string, string>();
            resDict.Add("x", x.ToString());
            resDict.Add("y",y.ToString());
            resDict.Add("ans", System.Math.Round(calcResult,2).ToString());
            return new OkObjectResult(resDict);
        }
    }
}

