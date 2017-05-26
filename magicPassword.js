/*
Magic Password
Created: 2017-05-27 00:09:29
Created by: Cstome
Usage:
  1. Set password in magicPassword.passwd, change success callback in magicPassword.successCallback;
  2. Run magicPassword.init();
  3. Type the password your set in webpage window, the success function will call when the password match.
*/
var magicPassword = {
	passwd: "csdccc",
	passwdLength: 0,
	inputStr: "",
	successCallback: function() {
		console.log("Match success!");
	},
	init: function() {
		var self = this;
		document.addEventListener("keypress", function(e) {
			self.matchPasswd(e.key);
		})
	},
	matchPasswd: function(key) {
		//this function used to match password, you can modify this the verify method(likes online verify) in thisb function.
		this.inputStr = this.inputStr.concat(key);
		if(this.inputStr == this.passwd) {
			this.successCallback();
		}else if(this.inputStr == this.passwd.slice(0, this.inputStr.length)){
			console.log("Some word match.")
		}else{
			console.log("pw" + this.passwd +"; inpStr:" + this.inputStr)
			//empty the inputStr when the input sring isn't match password.
			this.inputStr = "";
		}
	}
}

magicPassword.init();