package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.controller.JsonLoadControl;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.EventManager;
   
   public class SeerNumberPeripheralGiftOxLotteryInfoView extends Sprite
   {
      private var _mainUI:MovieClip;
      
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _requireItemArray:Array;
      
      private var _scrollBar:UIScrollBar;
      
      private var _provincesAndCitiesNameArr:Array;
      
      private var _state:int;
      
      private var _haveSend:Boolean = false;
      
      private var _initTxArr:Array;
      
      public function SeerNumberPeripheralGiftOxLotteryInfoView(ui:MovieClip, state:int = 1)
      {
         this._initTxArr = ["请输入姓名","请输入电话","请选择联系地址","请填写详细地址"];
         super();
         this._mainUI = ui;
         this._state = state;
         this.initView();
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onMainUIClick);
         JsonLoadControl.getValues("2024/1115/seerNumberPeripheralGiftOxLotteryConfig").then(function(dataHash:HashMap):void
         {
            _commdId = dataHash.getValue("comId")[0];
            _provincesAndCitiesNameArr = dataHash.getValue("provincesAndCitiesNameArr");
            update();
         });
      }
      
      public function show(state:int) : void
      {
         this._state = state;
         this.update();
         this._mainUI.visible = true;
      }
      
      public function hide() : void
      {
         this._mainUI.visible = false;
      }
      
      private function initView() : void
      {
         var i:int = 0;
         this._mainUI.tx_0.addEventListener(MouseEvent.CLICK,this.onInputTxt0Click);
         this._mainUI.tx_1.addEventListener(MouseEvent.CLICK,this.onInputTxt1Click);
         this._mainUI.tx_3.addEventListener(MouseEvent.CLICK,this.onInputTxt3Click);
         this._mainUI.tx_3.addEventListener(TextEvent.TEXT_INPUT,this.onText3Input);
         this._mainUI.tx_0.restrict = "^ ";
         this._mainUI.tx_0.maxChars = 12;
         this._mainUI.tx_1.restrict = "0-9";
         this._mainUI.tx_1.maxChars = 11;
         this._mainUI.tx_3.maxChars = 100;
         this._scrollBar = new UIScrollBar(this._mainUI["listMc"].barMc.slider,this._mainUI["listMc"].barMc.track,2,this._mainUI["listMc"].barMc.upArrow,this._mainUI["listMc"].barMc.downArrow,false);
         this._scrollBar.wheelObject = this._mainUI["listMc"];
         this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this._scrollBar.totalLength = Math.ceil(34);
         this._mainUI["listMc"].alpha = 0;
         this._mainUI["listMc"].scaleY = 0;
         this._mainUI.downMc.gotoAndStop(1);
         this._mainUI.downMc.mouseEnabled = false;
         this._mainUI.downMc.mouseChildren = false;
         this._mainUI.titleMc.gotoAndStop(this._state);
         this._mainUI.btnMc.gotoAndStop(this._state);
         if(this._state == 1)
         {
            for(i = 0; i < 4; i++)
            {
               this._mainUI["tx_" + i].text = this._initTxArr[i];
            }
         }
      }
      
      private function onScrollMove(e:Event) : void
      {
         var str:String = null;
         for(var i:int = 0; i < 5; i++)
         {
            if(this._scrollBar.index + i < this._provincesAndCitiesNameArr.length)
            {
               str = this._provincesAndCitiesNameArr[this._scrollBar.index + i] as String;
               this._mainUI["listMc"]["item_" + i].adNameTx.text = str;
               this._mainUI["listMc"]["item_" + i].adname = str;
               this._mainUI["listMc"]["item_" + i].visible = true;
               this._mainUI["listMc"]["item_" + i].adNameTx.mouseEnabled = false;
            }
            else
            {
               this._mainUI["listMc"]["item_" + i].adname = null;
               this._mainUI["listMc"]["item_" + i].visible = false;
            }
         }
      }
      
      private function onInputTxt0Click(event:MouseEvent) : void
      {
         this.checkTx(0);
         if(this._mainUI.tx_0.text == "请输入姓名")
         {
            this._mainUI.tx_0.text = "";
         }
      }
      
      private function onInputTxt1Click(event:MouseEvent) : void
      {
         this.checkTx(1);
         if(this._mainUI.tx_1.text == "请输入电话")
         {
            this._mainUI.tx_1.text = "";
         }
      }
      
      private function onInputTxt3Click(event:MouseEvent) : void
      {
         this.checkTx(3);
         var str:String = this._mainUI.tx_3.text;
         if(str.indexOf("填写") >= 0 || str.indexOf("详细") >= 0)
         {
            this._mainUI.tx_3.text = "";
         }
      }
      
      private function onText3Input(e:TextEvent) : void
      {
         if(e.text == "\n" || e.text == "\r")
         {
            e.preventDefault();
         }
      }
      
      private function checkTx(index:int) : void
      {
         var str:String = null;
         for(var i:int = 0; i < 4; i++)
         {
            str = this._mainUI["tx_" + i].text;
            if(index != i)
            {
               if(this._mainUI["tx_" + i].text == "" || str.indexOf(" ") >= 0)
               {
                  this._mainUI["tx_" + i].text = this._initTxArr[i];
               }
            }
         }
      }
      
      private function onKeyUp(e:KeyboardEvent) : void
      {
         var str:String = null;
         for(var i:int = 0; i < 4; i++)
         {
            str = this._mainUI["tx_" + i].text;
            if(str == "")
            {
               this._mainUI["tx_" + i].text = this._initTxArr[i];
            }
         }
      }
      
      private function onMainUIClick(e:*) : void
      {
         var index1:int = 0;
         var str222:String = null;
         var str0:String = null;
         var str1:String = null;
         var str2:String = null;
         var str3:String = null;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         index1 = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeInfoBtn":
               this.hide();
               break;
            case "chooseProvincesBtn":
               this.checkTx(2);
               if(this._mainUI["listMc"].alpha == 0)
               {
                  this._scrollBar.index = 0;
                  this.showList(true);
               }
               else
               {
                  this.showList(false);
               }
               break;
            case "clickBtn":
               str222 = this._mainUI["listMc"]["item_" + index1].adname;
               this._mainUI.tx_2.text = str222;
               this.showList(false);
               break;
            case "sureBtn":
               if(this._haveSend)
               {
                  Alarm2.show("你已经发送过了哦！");
                  return;
               }
               str0 = this._mainUI.tx_0.text;
               if(str0.length == 0 || str0.charAt(0) == " " || str0 == "请输入姓名")
               {
                  Alarm2.show("请输入收货人姓名！");
                  return;
               }
               str1 = this._mainUI.tx_1.text;
               if(str1 == "请输入电话" || str1.length != 11 || str1.charAt(0) == " ")
               {
                  Alarm2.show("请输入正确的手机号码！");
                  return;
               }
               str2 = this._mainUI.tx_2.text;
               if(str2.length == 0 || str2 == "请选择联系地址")
               {
                  Alarm2.show("请选择省市！");
                  return;
               }
               str3 = this._mainUI.tx_3.text;
               if(str3.length == 0 || str3 == " " || str3.indexOf("请填写") >= 0 || str3.indexOf("详细地") >= 0)
               {
                  Alarm2.show("请填写详细地址！");
                  return;
               }
               Alert.show("收件信息仅可提交1次，因填写错误导致的礼盒遗失将不予补发，是否确认？",function():void
               {
                  var str:String = null;
                  str = str0 + ";" + str1 + ";" + str2 + ";" + str3;
                  var by:ByteArray = new ByteArray();
                  by.writeUTFBytes(str);
                  by.length = 200;
                  _mainUI.mouseChildren = _mainUI.mouseEnabled = false;
                  SocketConnection.sendByQueue(45164,[6,by],function(e:*):void
                  {
                     if(_state == 1)
                     {
                        Alarm2.show("提交成功！奖品将于活动结束后陆续邮寄！");
                     }
                     _haveSend = true;
                     EventManager.dispatchEvent(new Event("seerNumberPeripheralGiftOxLottery"));
                     hide();
                     _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
                  },function(err:*):void
                  {
                     _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
                  });
               });
               break;
         }
      }
      
      private function showList(show:Boolean) : void
      {
         CommonUI.setEnabled(this._mainUI,false,false);
         this._mainUI.downMc.gotoAndStop(show ? 2 : 1);
         TweenLite.to(this._mainUI["listMc"],0.5,{
            "alpha":(show ? 1 : 0),
            "scaleY":(show ? 1 : 0.1),
            "onComplete":function():void
            {
               if(_mainUI != null)
               {
                  CommonUI.setEnabled(_mainUI,true,false);
               }
            }
         });
      }
      
      public function update() : void
      {
         this._mainUI.titleMc.gotoAndStop(1);
         this._mainUI.btnMc.gotoAndStop(1);
         this._mainUI.alertBtn.visible = false;
         this._mainUI.tx_2.mouseEnabled = false;
      }
      
      public function destroy() : void
      {
         this._mainUI.tx_0.removeEventListener(MouseEvent.CLICK,this.onInputTxt0Click);
         this._mainUI.tx_1.removeEventListener(MouseEvent.CLICK,this.onInputTxt1Click);
         this._mainUI.tx_3.removeEventListener(MouseEvent.CLICK,this.onInputTxt3Click);
         this._mainUI.tx_3.removeEventListener(TextEvent.TEXT_INPUT,this.onText3Input);
         this._requireItemArray = null;
         this._provincesAndCitiesNameArr = null;
         this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         this._scrollBar = null;
      }
   }
}

