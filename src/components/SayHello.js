import { height, width } from "@mui/system";
import React, { Component } from "react";


class sayHello extends Component {
    constructor(props) {
        super(props)
            this.state = {
                message: "Hello, ",
             }
    }

    setName() {

        var userName = document.getElementById("user").value;

        if (userName===""){
            document.getElementById("warning").setAttribute("class", "text-warning");
        }else{
            document.getElementById("trulab").setAttribute("class","btn btn-outline btn-accent max-w-xs");
           
            this.setState({
                
                message: this.state.message + userName + "!" + " 🤭",

            });

            this.removeInput();
        }
        
    }

    render() {
        return (
            <div id="main" className="sm:items-center">
                <h1 className="font-bold pt-10">Hanapon Kung Yaon Sain sa PARSU An Saimong Trulab ❤️</h1>
                 <p className=" pt-2" id="name">Name Please? 🤭</p>
                 <h1 className="body pb-2">{this.state.message}</h1>
                 <input placeholder="Name mo po hehe dai man ini recorded" id="user" className="input input-bordered input-sm w-full max-w-xs" type="text"></input>
                 <button id ="kirag" className="btn btn-outline btn-primary btn-sm" onClick={()=> this.setName()}>Submit</button>
                 <br/>
                 <span id="load" className="animation-pulse"></span>
                 <p id="warning" className="hidden">name, please.</p>
                 <p id="hulaTruLab"></p>
                 <div className="sm:items-center items-center sm:flex flex justify-center sm:justify-center">
                 <img id="picture" src={this.state.picture} className=""></img>
                 </div>
                 <br/>
                 <button id="trulab" className="hidden" onClick={()=> this.chooseUniversity()}>hanapon ang saimong trulab</button><br />
                <br/>
                 
            </div>
        );
    }

    removeInput() {
        
        document.getElementById("user").setAttribute("class", "hidden");
        document.getElementById("kirag").setAttribute("class", "hidden");
        var greet = document.createTextNode("An saimong trulab ay nasa....");
        document.getElementById("hulaTruLab").appendChild(greet);
        document.getElementById("name").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
        
    }

    chooseUniversity() {


        var loading = document.getElementById("load");
    
        var cbm = "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/312572238_779005383400392_2770325688430151533_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZp0ikI1azjZ13YCX0Goh8eMUScyuJKzR4xRJzK4krNA1RQ1TsxAVxQnldDQK3B_56g9wK5Xl2F1eZOfbXRszY&_nc_ohc=a4G5LElZKjMAX_uo8El&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfD6yQ7oG6c-FDoIAhTDrUq80k0ug0BsjQ52015PaMfN4Q&oe=64C4A1FF";
        var cas = "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/298050266_627208842346255_430824025578568078_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHclIoSn_ybrB_0IJzFcvKtMjE4b-PlQMUyMThv4-VAxTHHTUUhwtlZL8Mn0DK4tNES9J5cL1Fa2WQKJb2yotAa&_nc_ohc=-g0lp-luTMQAX9sOx_0&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBpT3Id506n3zebmhQiTBT6f5uvVvNY2rOZW28tThiO0A&oe=64C3D212";
        var coed = "https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/67688767_106696117340687_2517276492484837376_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8XVoOuy912ShiM7CdvY9pD-DbrgaIfoAP4NuuBoh-gHpZWd2AT9f5ixCa3Ha3bWslPoulHkN-cpS7T7ljaMCR&_nc_ohc=YEGQVRpqh7sAX97Jz3L&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBST6K5dLTgA__snuR_8qjMd2Qs7LhpC8XKSOXK0BBmzw&oe=64E68A5E";
        var cet = "https://scontent.fmnl4-1.fna.fbcdn.net/v/t31.18172-8/22528706_116944269066299_569522981196838906_o.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCszSH7nSztJ--NDXH23tZcPLyu4ngW85w8vK7ieBbzuz0LsjUIAiq6G61CrybA9dLy0X7CBpHtlBDRcV2qDrG&_nc_ohc=znMJ8Pe77D8AX-O9EJr&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfB-40ZyhinmCx7RUo8ZDmUOPZvBhOe-2s7QKd7GSD-Mfw&oe=64E6A0C0";
        var colleges = [cas, cbm, coed, cet];
        loading.setAttribute("class", "loading loading-infinity loading-lg");
        var element = document.getElementById("picture");
        element.setAttribute("src", "");
        element.setAttribute("class", "");
        var result = Math.floor(Math.random() * colleges.length);
        var pinakaFinalResult = colleges[result];
        console.log(pinakaFinalResult);
        setTimeout(()=> {
            element.setAttribute("src", pinakaFinalResult);
            element.setAttribute("class", "py-5 animate-fadeIn sm:w-36 w-36");
            document.getElementById("trulab").setAttribute("class","hidden"); 
            loading.setAttribute("class", "hidden");
        }, 3.5 * 1000);
        // setTimeout(element.setAttribute("src", pinakaFinalResult), 20000);

    }

}
 
export default sayHello