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

        //The `evolve` method on the class should increment all stats of the hero with a multiple of half the original stat value.
        public void evolve()
        {
            List<KeyValuePair<String, int>> newStats = stats.Select(x =>
            new KeyValuePair<String, int>
            (
                x.Key,
                Convert.ToInt32(x.Value * 1.5)
            )).ToList();

            stats = newStats;
    
        }
    }
}
