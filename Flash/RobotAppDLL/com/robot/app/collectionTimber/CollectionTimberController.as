package com.robot.app.collectionTimber
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class CollectionTimberController
   {
      
      private static var _type:uint;
      
      private static var _name:String;
      
      private static var _cltType:String;
      
      private static var _engyUnit:String;
      
      private static var _timer:Timer;
      
      private static var _map:BaseMapProcess;
      
      private static var _mainUI:MovieClip;
      
      private static var _mapPos:Array = [{
         "px":400,
         "py":250
      },{
         "px":250,
         "py":190
      },{
         "px":380,
         "py":300
      },{
         "px":230,
         "py":200
      },{
         "px":700,
         "py":200
      },{
         "px":320,
         "py":450
      },{
         "px":250,
         "py":130
      },{
         "px":520,
         "py":400
      },{
         "px":750,
         "py":400
      },{
         "px":350,
         "py":290
      }];
      
      private static var _index:int;
      
      private static var _surplusTime:int;
      
      private static var _isCanget:Boolean = false;
      
      private static var _CToSCoContro:Boolean = true;
       
      
      public function CollectionTimberController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess, param2:int) : void
      {
         _map = param1;
         _index = param2;
         addUI();
      }
      
      private static function addUI() : void
      {
         _mainUI = UIManager.getMovieClip("collectionTimberUI");
         _mainUI.x = _mapPos[_index].px;
         _mainUI.y = _mapPos[_index].py;
         _mainUI.gotoAndStop(1);
         _map.btnLevel.addChild(_mainUI);
         _mainUI.mc.visible = false;
         _mainUI.tipsMc.visible = false;
         _timer = new Timer(1000);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _mainUI.mc.fastCollecBtn.addEventListener(MouseEvent.CLICK,onBtnClick);
         _mainUI.timbeMc.addEventListener(MouseEvent.CLICK,onTimbeClick);
         _mainUI.tipsMc.closeBtn.addEventListener(MouseEvent.CLICK,onCloseTips);
         update();
      }
      
      private static function onBtnClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         KTool.buyProductByCallback(242711,1,function():void
         {
            KTool.doExchange(5038 + _index,function():void
            {
               update();
            });
         });
      }
      
      private static function onCloseTips(param1:MouseEvent) : void
      {
         _mainUI.tipsMc.visible = false;
      }
      
      private static function onTimbeClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(_isCanget)
         {
            if(_CToSCoContro)
            {
               getReward();
            }
         }
         else if(_CToSCoContro)
         {
            SocketConnection.addCmdListener(43582,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(43582,arguments.callee);
               update();
               _CToSCoContro = true;
               _mainUI.tipsMc.visible = true;
            });
            SocketConnection.send(43582,1,_index + 1);
            StatManager.sendStat2014("庆开学 拿神兽","开始采集雷劫朽木","2015运营活动");
            _CToSCoContro = false;
         }
      }
      
      private static function getReward() : void
      {
         SocketConnection.addCmdListener(43582,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var result:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(43582,arguments.callee);
            data = e.data as ByteArray;
            result = data.readUnsignedInt();
            if(result > 0)
            {
               Alarm.show("恭喜获得雷劫朽木！");
            }
            else
            {
               KTool.getMultiValue([15631],function(param1:Array):void
               {
                  if(param1[0] >= 30)
                  {
                     Alarm.show("今日到上限！采集失败！");
                  }
                  else
                  {
                     Alarm.show("很遗憾，你在采集中笨手笨脚，弄坏了这块木头。");
                  }
               });
            }
            update();
            _CToSCoContro = true;
         });
         SocketConnection.send(43582,2,_index + 1);
         _CToSCoContro = false;
      }
      
      private static function update() : void
      {
         var nowTime:Number = NaN;
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([15632,15633,15634,15635,15636,15637,15638,15639,15640,15641],function(param1:Array):void
         {
            var _loc2_:int = 0;
            if(param1[_index] != 0)
            {
               _isCanget = true;
               _mainUI.mc.visible = true;
               _loc2_ = int(nowTime - param1[_index]);
               if(_loc2_ < 0)
               {
                  _loc2_ = 0;
               }
               _surplusTime = 2 * 60 - _loc2_;
               if(_surplusTime <= 0)
               {
                  _mainUI.mc.statusMc.gotoAndStop(2);
                  _mainUI.mc.progressBar.gotoAndStop(120);
                  _mainUI.mc.fastCollecBtn.visible = false;
                  KTool.enableMC([_mainUI.timbeMc],true);
                  _timer.stop();
               }
               else
               {
                  KTool.enableMC([_mainUI.timbeMc],false);
                  _mainUI.mc.statusMc.gotoAndStop(1);
                  _mainUI.mc.fastCollecBtn.visible = true;
                  getTimeClockString(_surplusTime);
                  _mainUI.mc.progressBar.gotoAndStop(2 * 60 - _surplusTime);
                  _timer.start();
               }
            }
            else
            {
               _isCanget = false;
               KTool.enableMC([_mainUI.timbeMc],true);
               _mainUI.mc.visible = false;
            }
         });
         KTool.getMultiValue([5679],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               if(param1[0] % 5 == 0)
               {
               }
            }
            _mainUI.tipsMc.curJilvTx.text = int(param1[0] / 5) * 10 + 30 + "%";
            _mainUI.tipsMc.numTx.text = String(5 - param1[0] % 5);
         });
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         --_surplusTime;
         if(_surplusTime < 0)
         {
            update();
         }
         else
         {
            getTimeClockString(_surplusTime);
            _mainUI.mc.progressBar.gotoAndStop(2 * 60 - _surplusTime);
         }
      }
      
      private static function getTimeClockString(param1:int) : void
      {
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc2_:int = param1 / 3600;
         var _loc3_:int = (param1 - _loc2_ * 3600) / 60;
         var _loc4_:int = param1 - _loc2_ * 3600 - _loc3_ * 60;
         if(_loc3_ < 10)
         {
            _loc5_ = "0" + _loc3_;
         }
         else
         {
            _loc5_ = String(_loc3_);
         }
         if(_loc4_ < 10)
         {
            _loc6_ = "0" + _loc4_;
         }
         else
         {
            _loc6_ = String(_loc4_);
         }
         _mainUI.mc.timeTx.text = _loc5_ + ":" + _loc6_;
      }
      
      public static function destory() : void
      {
         if(_timer != null)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer = null;
         }
      }
   }
}
