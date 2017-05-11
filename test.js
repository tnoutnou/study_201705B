$(function(){
	$(".hoge1").css("color","blue");

    // ポップアップ用のタグを消す
    $('#popup-background').hide();
    $('#popup-item').hide();
    $('#popup-text').hide();
    $('#search-con').hide();
	
    // class「popupimg」のリンクがクリックされた時のイベント定義
    $('.popupimg').bind('click', function(e){
        // aタグでデフォルト動作を無効にする
        e.preventDefault(); 
 
        // 画像の読み込み
        var img = new Image();
        // クリックされたaタグのhrefを取得する
        var imgsrc = this.href;
		        
        $('#popup-item').attr('src', imgsrc);

		// テスト中
//        $('#popup-item').attr('data', this.id);
//        $('#popup-item').data('test', this.id);
          $('.hoge1').data('test', this.id.substr(-1));		
		
		// ポップアップで表示するためのimgタグに画像が読み込まれているかチェックする
		$('#popup-item').each(function(){
			// 読み込み済みならばポップアップ表示用の関数を呼び出す
			if (this.complete) {
				imgload(img);
				return;
			}
		});

		// imgタグのロードイベントを定義
		$('#popup-item').bind('load', function(){
			// 画像がロードされたらポップアップ表示用の関数を呼び出す
			imgload(img);
		});
            
        // Image()に画像を読み込ませる
        img.src = imgsrc;
		
		$('#popup-text').text('');
		if (e.offsetX >= 100) {
			$('#popup-text').css('text-align','right');
		} else {
			$('#popup-text').css('text-align','left');
		}


    });
	

    // ポップアップされた領域のクリックイベント
    $('#popup-background').bind('click', function(){
        // ポップアップを消すため、タグをフェードアウトさせる
        $('#popup-background').fadeOut();
        $('#popup-item').fadeOut();
        $('#popup-text').fadeOut();
        
    });

    // ポップアップされた領域のクリックイベント
    $('#popup-item').bind('click', function(e){
        // ポップアップを消すため、タグをフェードアウトさせる
//        $('#popup-background').fadeOut();
//        $('#popup-item').fadeOut();
		var v_id = $('.hoge1').data('test');
//		alert(e.offsetX);
		
//		var v_id2 = $(v_id).href;
		var v_arr = [];
		
		$(".popupimg").each(function(i, elem) {
			console.log(i + ': ' + $(elem).attr('href'));
			v_arr.push($(elem).attr('href'));
		});

		if (e.offsetX >= 100) {
			var v_id5 = Number(v_id) + 1;
			$('#popup-text').text('>>');
			$('#popup-text').css('text-align','right');
		} else {
			var v_id5 = (Number(v_id) - 1 + v_arr.length) % v_arr.length;
			$('#popup-text').text('<<');
			$('#popup-text').css('text-align','left');
		}
				
//		alert(v_arr);
//		var v_id4 = v_id % 3;
		var v_id4 = (v_id5 - 1 + v_arr.length) % v_arr.length;
				
		// 画像の読み込み
        var img = new Image();
        // src
        var imgsrc = v_arr[v_id4];

        $('#popup-item').attr('src', imgsrc);
		
		// ポップアップで表示するためのimgタグに画像が読み込まれているかチェックする
		$('#popup-item').each(function(){
			// 読み込み済みならばポップアップ表示用の関数を呼び出す
			if (this.complete) {
				imgload(img);
				return;
			}
		});

		// imgタグのロードイベントを定義
		$('#popup-item').bind('load', function(){
			// 画像がロードされたらポップアップ表示用の関数を呼び出す
			imgload(img);
		});
 
        // Image()に画像を読み込ませる
        img.src = imgsrc;
		$('.hoge1').data('test', v_id5);


        
    });
	
	
	
    // ポップアップされた領域でマウスを移動したら
    $('#popup-item').bind('mousemove', function(e){
		if (e.offsetX >= 100) {
			$('#popup-text').text('>>');
			$('#popup-text').css('text-align','right');
		} else {
			$('#popup-text').text('<<');
			$('#popup-text').css('text-align','left');
		}
	});

    // ポップアップされた領域のクリックイベント
    $('#search-btn').bind('click', function(){
        // 表示
		var v_lbl = $('#search-btn').attr('value');
		
		if (v_lbl === '検索表示') {
			//表示
			$('#search-con').fadeIn();
			$('#search-btn').attr('value','検索非表示');
		} else {
			// 非表示
			$('#search-con').fadeOut();
			$('#search-btn').attr('value','検索表示');
		};
        
    });


    
    // ポップアップ表示用関数
    function imgload(imgsource){
        // ポップアップの背景部分を表示する
        $('#popup-background').fadeIn(function(){
            // 画像を中心に表示させるため、画像の半分のサイズを取得
            /* 
            * 画像を表示するimgタグ「popup-item」はCSSで画面の中心に
            * 表示するようにしているため、そのまま表示すると画像の左上の端が
            * 中心に来ます。
            * そのため、マイナスのマージンを画像の半分のサイズ設定します。
            */

//            var item_hieght_margin = (imgsource.height / 2) * -1;
//            var item_width_margin = (imgsource.width / 2) * -1;
            
            // 取得したマージンと画像のサイズをCSSで定義する
            var cssObj = {
//                  marginTop: item_hieght_margin
//                , marginLeft: item_width_margin
//                , width: imgsource.width
//                , height: imgsource.height
                  marginTop: -100
                , marginLeft: -100
                , width: 200
                , height: 200
            }

            // 画像の表示用タグにCSSを当て、表示を行う
            $('#popup-item').css(cssObj).fadeIn(100);

            // 取得したマージンと画像のサイズをCSSで定義する
            var cssObj2 = {
//                  marginTop: item_hieght_margin
//                , marginLeft: item_width_margin
//                , width: imgsource.width
//                , height: imgsource.height
                  marginTop: 100
                , marginLeft: -100
            }


            $('#popup-text').css(cssObj2).fadeIn(100);
        });
    }

    // 
    $('.hoge1').bind('click', function(e){
		alert($('.hoge1').data('test'));
//        $('.hoge1').data('test' , $('#popup-item').data('test'));
	});

	
});
