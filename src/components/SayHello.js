import { height, width } from "@mui/system";
import React, { Component } from "react";


class sayHello extends Component {
    constructor(props) {
        super(props)
            this.state = {
                message: "Hello, "
             }
    }

    setName() {

        var user = document.getElementById("user").value;
        var hanapButton = document.getElementById("trulab").setAttribute("class","btn btn-outline btn-accent max-w-xs");
        this.setState({
            message: "Hello, " + user + "!",
        });
    }

    render() {
        return (
            <div id="main" className="sm:items-center">
                <h1 className="font-bold pt-10">Hanapon Kung Yaon Sain sa PARSU An Saimong Trulab ❤️</h1>
                 <p className=" pt-2">Name Please? 🤭</p>
                 <h1 className="body pb-2">{this.state.message}</h1>
                 <input placeholder="Name mo po hehe dai man ini recorded" id="user" className="input input-bordered input-sm w-full max-w-xs" type="text"></input>
                 <button id ="kirag" className="btn btn-outline btn-primary btn-sm" onClick={()=> this.setName()}>Submit</button>
                 <br/>
                 <span id="load" className="animation-pulse"></span>
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
        
        var inputs = document.getElementById("user").setAttribute("class", "hidden");
        var removeButton = document.getElementById("kirag").setAttribute("class", "hidden");
        var greet = document.createTextNode("An saimong trulab ay nasa....");
        var hulaTruLab = document.getElementById("hulaTruLab").appendChild(greet);
        
    }

    chooseUniversity() {


        var loading = document.getElementById("load");
        this.removeInput();
        var cbm = "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/312572238_779005383400392_2770325688430151533_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZp0ikI1azjZ13YCX0Goh8eMUScyuJKzR4xRJzK4krNA1RQ1TsxAVxQnldDQK3B_56g9wK5Xl2F1eZOfbXRszY&_nc_ohc=Wdm9rXaUNm0AX-k2H9s&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfBWwqev1EwLH7GOrAogIwBI6oti7lvhG7Lsn5PGk_-XXg&oe=649B1ABF";
        var cas = "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/298050266_627208842346255_430824025578568078_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHclIoSn_ybrB_0IJzFcvKtMjE4b-PlQMUyMThv4-VAxTHHTUUhwtlZL8Mn0DK4tNES9J5cL1Fa2WQKJb2yotAa&_nc_ohc=3KsvaFNcW9oAX-eEeC3&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfC8cWl8TWOiNFLoZKTTPk9JqJwLBKA58Zz6BvfHHZZMcw&oe=649A4AD2";
        var coed = "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/287082297_114592404607758_7203168607198135054_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFYYOASEhzDjoBfZ7c8WSScQSMdDTV0vlRBIx0NNXS-VA5DJG_2sASWMxYtA7M0-wZ1jIzbsO0HQ0fa1J8zVycZ&_nc_ohc=9vy4IeE_disAX8aLrWX&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfB743hlyByly3QK8dpwgwuTcApjhjToEC2_SUu0dcpnHA&oe=649B5FCB";
        var cet = "https://scontent.fmnl13-1.fna.fbcdn.net/v/t31.18172-8/22528706_116944269066299_569522981196838906_o.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCszSH7nSztJ--NDXH23tZcPLyu4ngW85w8vK7ieBbzuz0LsjUIAiq6G61CrybA9dLy0X7CBpHtlBDRcV2qDrG&_nc_ohc=lMQXTl_JSbYAX-4cAsr&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfAky9pv08G5QOLEoeSCUpuwCN0Yv99NiGjc38FstLKFrg&oe=64BD1980";
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
            var hanapButton = document.getElementById("trulab").setAttribute("class","hidden");
            loading.setAttribute("class", "hidden");
        }, 3.5 * 1000);
        // setTimeout(element.setAttribute("src", pinakaFinalResult), 20000);

    }

}
 
export default sayHello