"use strict";
namespace core{
    export class Router{


        //public properties
        private m_activeLink: string;
        private m_routingTable: string[];
        /**
         *
         * @returns {string}
         */
        public get ActiveLink() : string {
            return this.m_activeLink;
        }

        /**
         *
         * @param string
         */
        public set ActiveLink(link : string){
            this.m_activeLink = link;
        }

        //constructor
        constructor() {
            this.m_activeLink = "";
            this.m_routingTable = [];
        }

        //public methods
       public Add(route : string) : void{
            this.m_routingTable.push(route);
       }

       public AddTable(routineTable : string[]) : void{
            this.m_routingTable = routineTable;
       }

       public Find(route : string) : number{
            return this.m_routingTable.indexOf(route);
       }

       public Remove(route : string ) : boolean{
            if(this.Find(route) > -1){
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
       }

        //public override
       public toString() : string{
            return this.m_routingTable.toString();
        }

    }



}


let router : core.Router = new core.Router();

router.AddTable([
   "/",
    "/home",
    "/about",
    "/contact",
    "/contact-list",
    "/edit",
    "/login",
    "/projects",
    "/register",
    "/services",

]);

let route : string = location.pathname;

router.ActiveLink = (router.Find(route) > -1)
    ? (route === "/") ? "home" : route.substring(1)
    : ("404");





