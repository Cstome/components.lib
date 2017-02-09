<script>
	var forChecking; //二维码容器，用于验证
	function generateVerificationCode(input) { //二维码生成，无input的时候是生成，有Input的时候是验证
		if (!input) {
			var result = Math.floor(1000 + Math.random() * 9000);
			forChecking = result + '';
			console.log('验证码---' + result);
			rotateNum(forChecking);
			return false;
		}
		else {
			//console.log('输入为--' + input + '--验证码为==' + forChecking);
			if (input == forChecking) {
				return true;
			}
		}
	}

	function rotateNum(num) {
		var first = $('#verificationCode span:nth-child(1)');
		first.text(num.substring(1, 0));
		var second = $('#verificationCode span:nth-child(2)');
		second.text(num.substring(2, 1));
		var third = $('#verificationCode span:nth-child(3)');
		third.text(num.substring(3, 2));
		var fouth = $('#verificationCode span:nth-child(4)');
		fouth.text(num.substring(4, 3));
		var numBox = [first, second, third, fouth];
		for (var i = 0; i < numBox.length; i++) {
			var rotateDeg = 'rotate(' + selectfrom(-30, 30) + 'deg)';
			numBox[i].css('-ms-transform', rotateDeg);
			numBox[i].css('-moz-transform', rotateDeg);
			numBox[i].css('-webkit-transform', rotateDeg);
			numBox[i].css('transform', rotateDeg);
		}
	}

	function selectfrom(lowValue, highValue) {
		var choice = highValue - lowValue + 1;
		return Math.floor(Math.random() * choice + lowValue);
	}
</script>