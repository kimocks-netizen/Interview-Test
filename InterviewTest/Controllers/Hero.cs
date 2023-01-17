using System;
//using InterviewTest.Interface;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewTest.Controllers
{
    public class Hero:IHero
       
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats {get;set;}
        public void evolve(int statIncrease = 5)
        {
            List<KeyValuePair<string, int>> arrr = new List<KeyValuePair<string, int>>();
            foreach(KeyValuePair<string, int>acct in stats)
            {
                //var newStats = new KeyValuePair<string, int>(arrr.Key,(int));
            }


        }
    }
}
