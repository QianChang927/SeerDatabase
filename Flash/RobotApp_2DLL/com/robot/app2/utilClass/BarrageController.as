package com.robot.app2.utilClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.DanmuContentXMLInfo;
   import com.robot.core.config.xml.TasksOfNewStyleXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class BarrageController
   {
      
      private static var _instance:com.robot.app2.utilClass.BarrageController;
      
      private static var LastHeight:int = 0;
      
      private static var LastHeight1:int = 0;
      
      private static var LastHeight2:int = 0;
      
      private static var LastHeight3:int = 0;
      
      private static const speed:int = 5;
      
      private static var danmuOn:Boolean = false;
      
      public static var _taskIndex:int = 0;
       
      
      private var bar:MovieClip;
      
      private var screen:MovieClip;
      
      private var autoDanmuContentArray:Array;
      
      private var ticker:Timer;
      
      private var txt2:TextField;
      
      private var colorArray:Array;
      
      private var colorValue:uint = 15658496;
      
      public var danmuNumUp:int = 20;
      
      private var _screenShow:Boolean = false;
      
      private var _barrageShow:Boolean = false;
      
      private var ColorPanelShow:Boolean = false;
      
      public var isSend:Boolean = true;
      
      protected var _lastRecordIndex:int = 1;
      
      protected var _recordfull:Boolean = false;
      
      private var IntervalID_1:uint = 0;
      
      private var IntervalID_2:uint = 0;
      
      private var IntervalID_3:uint = 0;
      
      public function BarrageController()
      {
         this.colorArray = [15658496,16711680,8900351,8190976,15624871,15592941];
         super();
         if(_instance)
         {
            throw new Error("只能使用getInstance()方法访问该实例对象！");
         }
      }
      
      public static function getInstance() : com.robot.app2.utilClass.BarrageController
      {
         if(!_instance)
         {
            _instance = new com.robot.app2.utilClass.BarrageController();
            _instance.initPanel();
         }
         return _instance;
      }
      
      public function initPanel() : void
      {
         this.bar = UIManager.getMovieClip("Barrage_Bar");
         this.screen = UIManager.getMovieClip("Barrage_Screen");
         this.bar.x = 300;
         this.bar.y = 300;
         this.screen.x = 0;
         this.screen.y = 0;
         this.screen.height = 400;
         this.screen.width = 960;
         this.bar.visible = false;
         this.screen.visible = false;
         LevelManager.topLevel.addChild(this.screen);
         LevelManager.topLevel.addChild(this.bar);
         KTool.initDrag(this.bar,this.bar.bg);
      }
      
      public function destroyPanel() : void
      {
         this.removeBarListener();
         KTool.destroyDrag(this.bar);
         LevelManager.topLevel.removeChild(this.bar);
         LevelManager.topLevel.removeChild(this.screen);
         this.screen = null;
         this.bar = null;
         _instance = null;
      }
      
      public function showBarrage(param1:int, param2:int) : void
      {
         this._barrageShow = true;
         this.bar.x = param1;
         this.bar.y = param2;
      }
      
      public function hide() : void
      {
         this.bar.visible = false;
         this.screen.visible = false;
      }
      
      public function show() : void
      {
         if(this._screenShow)
         {
            this.screen.visible = true;
         }
         if(this._barrageShow)
         {
            this.bar.visible = true;
            if(danmuOn)
            {
               this.screen.visible = true;
            }
            else
            {
               this.screen.visible = false;
            }
         }
      }
      
      public function showScreen(param1:int, param2:int, param3:int = 0, param4:int = 0) : void
      {
         this._screenShow = true;
         this.screen.x = param3;
         this.screen.y = param4;
         this.screen.width = param1;
         this.screen.height = param2;
         this.screen.dt.alpha = 0.9;
      }
      
      public function init() : void
      {
         this.bar.OnOff.gotoAndStop(1);
         this.bar.ColorBtn.gotoAndStop(1);
         this.colorPanelShow(false);
         this.screen.visible = false;
         this.bar.OnOff.addEventListener(MouseEvent.CLICK,this.Isdanmu);
         this.bar.ColorBtn.addEventListener(MouseEvent.CLICK,this.ColorBtnClick);
         this.bar.txtSend.addEventListener(KeyboardEvent.KEY_DOWN,this.KeyDownHandler);
         this.bar.btnSend.addEventListener(MouseEvent.CLICK,this.btnSendHandler);
         this.bar.txtSend.addEventListener(MouseEvent.CLICK,this.firstClickHandler);
      }
      
      public function removeBarListener() : void
      {
         this.bar.OnOff.removeEventListener(MouseEvent.CLICK,this.Isdanmu);
         this.bar.ColorBtn.removeEventListener(MouseEvent.CLICK,this.ColorBtnClick);
         this.bar.txtSend.removeEventListener(KeyboardEvent.KEY_DOWN,this.KeyDownHandler);
         this.bar.btnSend.removeEventListener(MouseEvent.CLICK,this.btnSendHandler);
      }
      
      private function btnSendHandler(param1:Event) : void
      {
         if(!danmuOn)
         {
            this.Isdanmu(param1);
            this.danmu(param1);
         }
      }
      
      private function firstClickHandler(param1:Event) : void
      {
         this.bar.txtSend.text = "";
         this.bar.txtSend.removeEventListener(MouseEvent.CLICK,this.firstClickHandler);
      }
      
      private function addColorListener() : void
      {
         var _loc1_:int = 1;
         while(_loc1_ <= this.colorArray.length)
         {
            this.bar["Color" + _loc1_.toString()].addEventListener(MouseEvent.CLICK,this.changeBtnColor);
            _loc1_++;
         }
      }
      
      private function removeColorListener() : void
      {
         var _loc1_:int = 1;
         while(_loc1_ <= this.colorArray.length)
         {
            this.bar["Color" + _loc1_.toString()].removeEventListener(MouseEvent.CLICK,this.changeBtnColor);
            _loc1_++;
         }
      }
      
      private function changeBtnColor(param1:Event) : void
      {
         var _loc2_:int = int(param1.target.name.split("r")[1]);
         this.bar.ColorBtn.gotoAndStop(_loc2_);
         this.ColorPanelShow = false;
         this.colorPanelShow(false);
         this.removeColorListener();
         this.colorValue = this.colorArray[_loc2_ - 1];
         this.bar.txtSend.textColor = this.colorValue;
      }
      
      private function colorPanelShow(param1:Boolean) : void
      {
         this.bar.ColorPanel.visible = param1;
         var _loc2_:int = 1;
         while(_loc2_ <= this.colorArray.length)
         {
            this.bar["Color" + _loc2_.toString()].visible = param1;
            _loc2_++;
         }
      }
      
      private function ColorBtnClick(param1:Event) : void
      {
         this.ColorPanelShow = !this.ColorPanelShow;
         if(this.ColorPanelShow)
         {
            this.colorPanelShow(true);
            this.addColorListener();
         }
         else
         {
            this.colorPanelShow(false);
            this.removeColorListener();
         }
      }
      
      private function KeyDownHandler(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == 13)
         {
            if(!danmuOn)
            {
               this.Isdanmu(param1);
            }
            this.danmu(param1);
         }
      }
      
      private function Isdanmu(param1:Event) : void
      {
         danmuOn = !danmuOn;
         if(danmuOn)
         {
            this.screen.visible = true;
            this.bar.btnSend.addEventListener(MouseEvent.CLICK,this.danmu);
            this.bar.OnOff.gotoAndStop(2);
         }
         else
         {
            this.screen.visible = false;
            this.bar.btnSend.removeEventListener(MouseEvent.CLICK,this.danmu);
            this.bar.OnOff.gotoAndStop(1);
         }
      }
      
      private function danmu(param1:Event) : void
      {
         var _loc2_:String = String(this.bar.txtSend.text);
         var _loc3_:RegExp = /^\s*|\s*$/;
         _loc2_ = _loc2_.replace(_loc3_,"");
         if(_loc2_.length <= 0 || _loc2_.length > 20)
         {
            Alarm.show("请输入1~18个有效字符!",null,false,false,false,LevelManager.topLevel);
            return;
         }
         this.sendToServer(_loc2_);
      }
      
      public function danmuAI(param1:String, param2:uint = 15658496) : Boolean
      {
         if(this.screen.numChildren > this.danmuNumUp)
         {
            return false;
         }
         if(param1 == null)
         {
            return false;
         }
         var _loc3_:RegExp = /^\s*|\s*$/;
         param1 = param1.replace(_loc3_,"");
         this.txt2 = new TextField();
         var _loc4_:TextFormat;
         (_loc4_ = new TextFormat()).size = 600 / this.screen.height * 20;
         _loc4_.font = "宋体";
         _loc4_.bold = true;
         _loc4_.color = param2;
         this.txt2.autoSize = TextFieldAutoSize.LEFT;
         this.txt2.text = param1;
         this.txt2.setTextFormat(_loc4_);
         this.txt2.selectable = false;
         this.txt2.y = 600 * 3 / 4 * Math.random();
         while(this.txt2.y < LastHeight + this.txt2.height && this.txt2.y > LastHeight || this.txt2.y < LastHeight1 + this.txt2.height && this.txt2.y > LastHeight1 || this.txt2.y < LastHeight2 + this.txt2.height && this.txt2.y > LastHeight2 || this.txt2.y < LastHeight3 + this.txt2.height && this.txt2.y > LastHeight3)
         {
            this.txt2.y = 600 * 3 / 4 * Math.random();
         }
         LastHeight3 = LastHeight2;
         LastHeight2 = LastHeight1;
         LastHeight1 = LastHeight;
         LastHeight = this.txt2.y;
         this.txt2.x = -this.txt2.width;
         this.screen.addChild(this.txt2);
         this.txt2.addEventListener(Event.ENTER_FRAME,this.fx);
         this.txt2.addEventListener(MouseEvent.MOUSE_OVER,this.stopTxt);
         this.txt2.addEventListener(MouseEvent.MOUSE_OUT,this.startTxt);
         return true;
      }
      
      public function autoPlayDanmu() : void
      {
         this.autoDanmuContentArray = DanmuContentXMLInfo.data;
         this.IntervalID_3 = setInterval(this.autoPlayDanmuPlay,6000);
      }
      
      private function autoPlayDanmuPlay(param1:Event = null) : void
      {
         var _loc2_:int = 0;
         var _loc3_:String = null;
         var _loc4_:RegExp = null;
         var _loc5_:uint = 0;
         if(this.screen.numChildren < this.danmuNumUp)
         {
            _loc2_ = (this.autoDanmuContentArray.length - 1) * Math.random();
            _loc3_ = String(this.autoDanmuContentArray[_loc2_]);
            _loc4_ = /^\s*|\s*$/;
            _loc3_ = _loc3_.replace(_loc4_,"");
            if(_loc3_.length > 0 && _loc3_.length <= 20)
            {
               _loc5_ = uint(this.colorArray[int(6 * Math.random())]);
               this.danmuAI(_loc3_,_loc5_);
            }
         }
      }
      
      public function stopAutoPlayDanmu() : void
      {
         this.ticker.stop();
         this.ticker.removeEventListener(TimerEvent.TIMER,this.autoPlayDanmuPlay);
         this.ticker = null;
      }
      
      private function fx(param1:Event) : void
      {
         param1.target.x += speed;
         if(param1.target.x >= 983)
         {
            param1.target.removeEventListener(Event.ENTER_FRAME,this.fx);
            param1.target.removeEventListener(MouseEvent.MOUSE_OVER,this.stopTxt);
            param1.target.removeEventListener(MouseEvent.MOUSE_OUT,this.startTxt);
            if(this.screen != null)
            {
               this.screen.removeChild(param1.target as DisplayObject);
            }
            this.txt2 = param1.target as TextField;
            this.txt2 = null;
         }
      }
      
      private function stopTxt(param1:Event) : void
      {
         this.screen.setChildIndex(param1.target as DisplayObject,this.screen.numChildren - 1);
         param1.target.removeEventListener(Event.ENTER_FRAME,this.fx);
         var _loc2_:TextFormat = param1.target.getTextFormat(-1,-1);
         _loc2_.size = 600 / this.screen.height * 25;
         param1.target.setTextFormat(_loc2_);
      }
      
      private function startTxt(param1:Event) : void
      {
         param1.target.addEventListener(Event.ENTER_FRAME,this.fx);
         var _loc2_:TextFormat = param1.target.getTextFormat(-1,-1);
         _loc2_.size = 600 / this.screen.height * 20;
         param1.target.setTextFormat(_loc2_);
      }
      
      public function sendToServer(param1:String) : void
      {
         var oldcontent:String = null;
         var con:ByteArray = null;
         var data:ByteArray = null;
         var t:uint = 0;
         var content:String = param1;
         if(this.isSend)
         {
            this.bar.txtSend.text = "";
            if(content.length <= 0 || content.length > 18)
            {
               Alarm.show("请输入1~18个有效字符!",null,false,false,false,LevelManager.topLevel);
               return;
            }
            oldcontent = content;
            content += "##" + this.colorValue + "##";
            con = new ByteArray();
            con.writeUTFBytes(content);
            data = new ByteArray();
            data.writeUnsignedInt(con.length);
            data.writeUTFBytes(content);
            this.isSend = false;
            SocketConnection.sendWithCallback(42525,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               _lastRecordIndex = _loc3_;
               danmuAI(oldcontent,colorValue);
            },data,_taskIndex);
            t = setTimeout(function():void
            {
               isSend = true;
            },60000);
         }
         else
         {
            Alarm.show("请等待1分钟再输入");
         }
      }
      
      public function receiveFromServer(param1:* = null) : void
      {
         var data:ByteArray;
         var e:* = param1;
         var con:ByteArray = new ByteArray();
         con.writeUTFBytes("");
         data = new ByteArray();
         data.writeUnsignedInt(con.length);
         data.writeUTFBytes("");
         if(this.isSend)
         {
            SocketConnection.sendWithCallback(42525,function(param1:SocketEvent):void
            {
               var curRecordIndex:int = 0;
               var e:SocketEvent = param1;
               var c:ByteArray = e.data as ByteArray;
               curRecordIndex = int(c.readUnsignedInt() - 1);
               if(curRecordIndex - _lastRecordIndex > 100)
               {
                  _lastRecordIndex = curRecordIndex - 100;
               }
               if(curRecordIndex > _lastRecordIndex || _lastRecordIndex == 1000)
               {
                  SocketConnection.sendWithCallback(42527,function(param1:SocketEvent):void
                  {
                     var resArr:Array = null;
                     var len:int = 0;
                     var str:String = null;
                     var evt:SocketEvent = param1;
                     resArr = new Array();
                     var b:ByteArray = evt.data as ByteArray;
                     var count:int = int(b.readUnsignedInt());
                     var i:int = 0;
                     while(i < count)
                     {
                        len = int(b.readUnsignedInt());
                        str = b.readUTFBytes(len);
                        resArr.push(str);
                        i++;
                     }
                     IntervalID_1 = setInterval(function():void
                     {
                        var _loc1_:* = undefined;
                        var _loc2_:* = undefined;
                        if(resArr.length <= 0)
                        {
                           clearInterval(IntervalID_1);
                        }
                        else
                        {
                           str = resArr.pop();
                           _loc1_ = str.match(/##.+##/);
                           if(_loc1_ == null)
                           {
                              danmuAI(str,colorArray[int(6 * Math.random())]);
                           }
                           else
                           {
                              str = str.replace(/##.+##/g,"");
                              _loc2_ = uint(_loc1_[0].replace(/##/g,""));
                              danmuAI(str,_loc2_);
                           }
                        }
                     },5000 * Math.random());
                     _lastRecordIndex = curRecordIndex;
                  },22,_taskIndex,0,curRecordIndex <= _lastRecordIndex ? (_lastRecordIndex == 1000 ? 30 : 0) : curRecordIndex - _lastRecordIndex - 1);
               }
            },data,_taskIndex);
         }
      }
      
      public function playOthersSay() : void
      {
         _taskIndex = TasksOfNewStyleXMLInfo.data.length - 15;
         _taskIndex = _taskIndex <= 0 ? 0 : _taskIndex;
         this.IntervalID_2 = setInterval(this.receiveFromServer,60000);
         this.autoPlayDanmu();
      }
      
      public function stopPlayOthersSay() : void
      {
         if(this.IntervalID_2 != 0)
         {
            clearInterval(this.IntervalID_2);
         }
         if(this.IntervalID_3 != 0)
         {
            clearInterval(this.IntervalID_3);
         }
      }
   }
}
