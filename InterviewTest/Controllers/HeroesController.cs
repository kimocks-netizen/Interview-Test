﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InterviewTest.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewTest.Controllers
{
    // [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private Hero[] heroes = new Hero[] {
               new Hero()
               {
                   name= "Hulk",
                   power="Strength from gamma radiation",
                   stats=
                   new List<KeyValuePair<string, int>>()
                   {
                       new KeyValuePair<string, int>( "strength", 5000 ),
                       new KeyValuePair<string, int>( "intelligence", 50),
                       new KeyValuePair<string, int>( "stamina", 2500 )
                   }
               }

               //
        };

        // GET: api/Heroes
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return this.heroes;
        }

        // GET: api/Heroes/5
        [HttpGet("{id}", Name = "Get")]
        public Hero Get(int id)
        {
            return this.heroes.FirstOrDefault();
        }

        // POST: api/Heroes
        [HttpPost]
       [Route("evolve")]
        //The `post` method should read an `action` parameter which defaults to `none`
        public IEnumerable<Hero> Evolve([FromBody] evolveRequest request)
        {
            //if the action is evolve it should evolve the hero and return the hero with its new stats.
            if (request.action == "evolve")
            {
                heroes.Where(x => x.name == request.heroName).FirstOrDefault().evolve();
            }
            return heroes;
        }

        // PUT: api/Heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
